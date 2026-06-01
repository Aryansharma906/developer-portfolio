import React from 'react';
import { useParams, Link } from 'react-router-dom';
import certificatesData from '@/data/certificates.json';

const CertificatePage: React.FC = () => {
    const { id } = useParams();
    const cid = Number(id);
    const cert = certificatesData.find((c) => c.id === cid);

    if (!cert) {
        return (
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-2xl font-bold">Certificate not found</h1>
                <p className="mt-4">The requested certificate could not be located.</p>
                <Link to="/" className="text-primary mt-4 inline-block">Back to Home</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{cert.icon}</div>
                        <div>
                            <h1 className="text-2xl font-bold">{cert.title}</h1>
                            <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                            <p className="text-sm text-muted-foreground mb-2">Category</p>
                            <p className="mb-4 font-medium">{cert.category}</p>

                            <p className="text-sm text-muted-foreground mb-2">Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {cert.skills?.map((s) => (
                                    <span key={s} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">{s}</span>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground mb-2">About this certificate</p>
                            <p className="mb-4 leading-relaxed">{cert.description}</p>

                            <div className="border rounded overflow-hidden">
                                <iframe
                                    src={cert.pdfUrl}
                                    title={cert.title}
                                    className="w-full h-96"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>

                            <div className="mt-4 flex items-center gap-3">
                                <Link to="/" className="text-sm text-muted-foreground">← Back</Link>
                                <a href={cert.pdfUrl} target="_blank" rel="noreferrer" className="text-sm text-primary font-semibold">Open PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CertificatePage;
