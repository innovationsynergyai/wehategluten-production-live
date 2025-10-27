import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({
  title = "WeHateGluten.com - #1 Gluten-Free Digital Products & Community Platform",
  description = "Download premium gluten-free guides, meal plans, recipes & courses. Join 500K+ members accessing expert content, supplements & lifestyle products. Start your transformation today!",
  keywords = "gluten free digital products, PDF guides, meal plans, gluten free recipes, celiac disease, supplements, online courses, gluten sensitivity, wellness community",
  image = "https://wehategluten.com/og-image-2025.jpg",
  url = "https://wehategluten.com",
  type = "website"
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="WeHateGluten.com" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="WeHateGluten.com" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@WeHateGluten" />
      <meta property="twitter:creator" content="@WeHateGluten" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#7d917d" />
      <meta name="msapplication-TileColor" content="#7d917d" />
    </Helmet>
  );
}