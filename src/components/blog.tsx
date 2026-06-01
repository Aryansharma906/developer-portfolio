import React, { useEffect, useMemo, useState } from "react";
import localBlogs from "@/data/blogs.json";
import LINKEDIN_ARTICLES, { LinkedinArticle } from "@/config/linkedinArticles";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface BlogPost {
    id: number | string;
    title: string;
    slug: string;
    excerpt: string;
    tags: string[];
    image?: string;
    createdAt?: string;
    url?: string;
    isExternal?: boolean;
    featured?: boolean;
}

const PAGE_SIZE = 6;

export const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [filterType, setFilterType] = useState<"all" | "local" | "linkedin">("all");

    useEffect(() => {
        let mounted = true;

        // Try backend API first (if dev runs Flask backend at /api/blog)
        const tryFetchBackend = async () => {
            try {
                const res = await fetch('/api/blog');
                if (!res.ok) throw new Error('no backend');
                const json = await res.json();
                if (Array.isArray(json.data) && mounted) {
                    const remote: BlogPost[] = json.data.map((article: unknown, idx: number): BlogPost => {
                        const a = article as Record<string, unknown>;
                        return {
                            id: (a.id as string) || `remote-${idx}`,
                            title: String(a.title || ''),
                            slug: (a.slug as string) || `remote-${(a.id as string) || idx}`,
                            excerpt: String(a.excerpt || ''),
                            tags: Array.isArray(a.tags) ? a.tags as string[] : [],
                            image: (a.thumbnail as string) || (a.image as string) || '/images/blog/default.jpg',
                            url: a.url as string,
                            isExternal: true,
                            createdAt: a.date as string,
                            featured: !!(a.featured as boolean),
                        };
                    });
                    setPosts([...remote, ...(localBlogs as BlogPost[])]);
                    setLoading(false);
                    return;
                }
            } catch (err) {
                // ignore and fallback to local
            }

            // Combine local blogs with LinkedIn articles (fallback)
            const combinedPosts: BlogPost[] = [
                ...LINKEDIN_ARTICLES.map((article: LinkedinArticle) => ({
                    id: String(article.id).startsWith('llm') ? article.id : `ln-${article.id}`,
                    title: article.title,
                    slug: `linkedin-${article.id}`,
                    excerpt: article.excerpt,
                    tags: article.tags,
                    image: article.thumbnail || article.image || '/images/blog/default.jpg',
                    url: article.url,
                    isExternal: true,
                    createdAt: article.date || undefined,
                    featured: article.featured || false,
                })),
                ...(localBlogs as BlogPost[]),
            ].sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                const dateA = new Date(a.createdAt || 0).getTime();
                const dateB = new Date(b.createdAt || 0).getTime();
                return dateB - dateA;
            });

            if (mounted) {
                setPosts(combinedPosts);
                setLoading(false);
            }
        };

        tryFetchBackend();

        return () => {
            mounted = false;
        };
    }, []);

    const filteredPosts = useMemo(() => {
        if (filterType === "all") return posts;
        if (filterType === "linkedin") return posts.filter((p) => p.isExternal);
        return posts.filter((p) => !p.isExternal);
    }, [posts, filterType]);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));

    const paged = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE;
        return filteredPosts.slice(start, start + PAGE_SIZE);
    }, [filteredPosts, page]);

    if (loading)
        return (
            <div className="text-center py-8">
                <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
                <p className="mt-2 text-muted-foreground">Loading posts…</p>
            </div>
        );

    return (
        <section id="blog" className="py-20 px-4 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                        <span>📝</span>
                        Latest Articles
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold">Blog & Articles</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Insights on AI, security, development, and emerging technologies
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    <button
                        onClick={() => {
                            setFilterType("all");
                            setPage(1);
                        }}
                        className={`px-4 py-2 rounded-full font-medium transition-all ${filterType === "all"
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        All Posts ({posts.length})
                    </button>
                    <button
                        onClick={() => {
                            setFilterType("linkedin");
                            setPage(1);
                        }}
                        className={`px-4 py-2 rounded-full font-medium transition-all ${filterType === "linkedin"
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        LinkedIn Articles ({posts.filter((p) => p.isExternal).length})
                    </button>
                    <button
                        onClick={() => {
                            setFilterType("local");
                            setPage(1);
                        }}
                        className={`px-4 py-2 rounded-full font-medium transition-all ${filterType === "local"
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        Blog Posts ({posts.filter((p) => !p.isExternal).length})
                    </button>
                </div>

                {/* Posts Grid */}
                {paged.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paged.map((post) => (
                            <article
                                key={post.id}
                                className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/60 hover:scale-[1.02]"
                            >
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Image or emoji */}
                                {post.image && (
                                    <div className="relative h-48 overflow-hidden bg-muted flex items-center justify-center text-4xl">
                                        {typeof post.image === "string" && post.image.length === 1 ? (
                                            post.image
                                        ) : (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    const parent = e.currentTarget.parentElement;
                                                    if (parent) {
                                                        parent.innerHTML = '<div className="w-full h-full bg-muted flex items-center justify-center text-6xl">📝</div>';
                                                    }
                                                }}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        )}
                                    </div>
                                )}

                                <div className="relative p-6 flex flex-col h-full">
                                    {/* External badge */}
                                    {post.isExternal && (
                                        <div className="inline-flex w-fit mb-3 px-3 py-1 bg-blue-500/10 text-blue-600 text-xs font-semibold rounded-full">
                                            📘 LinkedIn Article
                                        </div>
                                    )}

                                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 flex-wrap mb-4">
                                        {post.tags.slice(0, 3).map((t: string) => (
                                            <Badge key={t} variant="outline" className="text-xs">
                                                {t}
                                            </Badge>
                                        ))}
                                        {post.featured && (
                                            <span className="ml-2 text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Featured</span>
                                        )}
                                        {post.tags.length > 3 && <span className="text-xs text-muted-foreground">+{post.tags.length - 3}</span>}
                                    </div>

                                    {/* Footer with date and link */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <small className="text-xs text-muted-foreground">
                                            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
                                        </small>
                                        {post.isExternal ? (
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1 group/link"
                                            >
                                                Read on LinkedIn
                                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                                            </a>
                                        ) : (
                                            <a href={`/blog/${post.slug}`} className="text-sm text-primary hover:text-primary/80 font-semibold">
                                                Read more →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No posts found in this category.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-3">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            className="px-4 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                            ← Previous
                        </button>
                        <span className="text-sm text-muted-foreground px-4">
                            Page <span className="font-bold text-foreground">{page}</span> of <span className="font-bold text-foreground">{totalPages}</span>
                        </span>
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            className="px-4 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
