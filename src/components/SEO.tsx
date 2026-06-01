import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => (
    <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <meta name="twitter:card" content="summary" />
    </Helmet>
);

export default SEO;
