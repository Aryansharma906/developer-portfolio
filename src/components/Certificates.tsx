import React, { useState, useEffect } from "react";
import certificatesData from "@/data/certificates.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye, X } from "lucide-react";

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    pdfUrl: string;
    icon: string;
    category?: string;
    skills?: string[];
}

export const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleDoubleClick = (cert: Certificate) => {
        // Open a standalone certificate page in a new tab for deeper view
        try {
            window.open(`/certificate/${cert.id}`, "_blank");
        } catch (e) {
            // fallback: still open modal
        }
        setSelectedCert(cert);
        setIsOpen(true);
    };

    // Close modal on ESC key
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    // Certificates are preview-only on the site. Downloads are intentionally disabled.

    return (
        <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                        <span>🏆</span>
                        Certifications & Awards
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold">Professional Credentials</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Industry-recognized certifications and achievements demonstrating expertise and commitment to continuous learning
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {certificatesData.map((cert: Certificate) => (
                        <div
                            key={cert.id}
                            onDoubleClick={() => handleDoubleClick(cert)}
                            className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/60 hover:scale-105 cursor-pointer"
                        >
                            {/* Animated gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700" />
                            </div>

                            <div className="relative p-8 flex flex-col h-full">
                                {/* Icon with animation */}
                                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:animate-bounce transition-transform duration-300">
                                    {cert.icon}
                                </div>

                                {/* Category badge */}
                                {cert.category && (
                                    <span className="inline-flex w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                                        {cert.category}
                                    </span>
                                )}

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Issuer & Date */}
                                <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
                                <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>

                                {/* Description */}
                                <p className="text-sm text-foreground/80 mb-4 flex-grow leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Skills tags */}
                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-border/50">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2.5 py-1 bg-primary/5 text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Hover overlay with "Click to View" button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm rounded-2xl">
                                    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 shadow-xl">
                                        <Eye className="w-5 h-5" />
                                        Double-click to View
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info section */}
                <div className="text-center bg-primary/5 border border-primary/30 rounded-2xl p-8">
                    <p className="text-muted-foreground">
                        💡 Tip: <span className="font-semibold text-foreground">Double-click</span> any certificate to view full details and preview
                    </p>
                </div>
            </div>

            {/* View Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl h-[90vh] overflow-hidden">
                    <DialogHeader className="flex items-center justify-between">
                        <DialogTitle className="flex items-center gap-3 text-xl">
                            <span className="text-3xl">{selectedCert?.icon}</span>
                            {selectedCert?.title}
                        </DialogTitle>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-1 hover:bg-muted transition-colors"
                            title="Close certificate details"
                            aria-label="Close certificate details"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </DialogHeader>

                    {selectedCert && (
                        <div className="flex flex-col gap-4 h-full">
                            {/* Certificate details */}
                            <div className="grid grid-cols-2 gap-4 bg-muted/50 rounded-lg p-4">
                                <div>
                                    <p className="text-sm text-muted-foreground font-semibold">Issuer</p>
                                    <p className="text-foreground font-medium">{selectedCert.issuer}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-semibold">Date Issued</p>
                                    <p className="text-foreground font-medium">{selectedCert.date}</p>
                                </div>
                                {selectedCert.category && (
                                    <div>
                                        <p className="text-sm text-muted-foreground font-semibold">Category</p>
                                        <p className="text-foreground font-medium">{selectedCert.category}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm text-muted-foreground font-semibold">Status</p>
                                    <p className="text-green-600 font-medium">✓ Verified</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-muted/30 rounded-lg p-4">
                                <p className="text-sm text-muted-foreground font-semibold mb-2">About This Certificate</p>
                                <p className="text-foreground/90 leading-relaxed">{selectedCert.description}</p>
                            </div>

                            {/* Skills */}
                            {selectedCert.skills && selectedCert.skills.length > 0 && (
                                <div className="bg-muted/30 rounded-lg p-4">
                                    <p className="text-sm text-muted-foreground font-semibold mb-3">Key Skills & Competencies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* PDF Viewer with watermark overlay */}
                            <div className="flex-1 border border-border rounded-lg overflow-hidden relative">
                                <iframe
                                    src={selectedCert.pdfUrl}
                                    className="w-full h-full"
                                    title={selectedCert.title}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                                <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4">
                                    <div className="text-xs text-white/40 bg-black/20 px-2 py-1 rounded">Aryan Sharma — Preview</div>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-2 border-t border-border pt-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Certificates;
