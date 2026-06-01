import React from 'react';
import resume from '@/data/resume.json';

export function AboutMe() {
    return (
        <section id="about" className="py-12">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-4">{resume.summary}</p>
                <ul className="text-sm space-y-1">
                    <li><strong>Email:</strong> <a href={`mailto:${resume.contact.email}`} className="text-primary">{resume.contact.email}</a></li>
                    <li><strong>GitHub:</strong> <a href={`https://github.com/${resume.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-primary">{resume.contact.github}</a></li>
                    <li><strong>LinkedIn:</strong> <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">Profile</a></li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;
