import Head from 'next/head';
import NavigationComponent from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificationSection from '@/components/CertificationSection';
import PortfolioSection from '@/components/PortfolioSection';
import FooterSection from '@/components/FooterSection';
import FloatingParticles from '@/components/FloatingParticles';

// Import data
import contentData from '@/data/content.json';
import seoData from '@/data/seo.json';

import type { ContentData, SEOData } from '@/types';

const content = contentData as ContentData;
const seo = seoData as SEOData;

export default function Home() {
  return (
    <>
      <Head>
        <title>{seo.siteTitle}</title>
        <meta name="description" content={seo.siteDescription} />
        <meta name="keywords" content={seo.siteKeywords} />
        <meta name="author" content={seo.author.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:title" content={seo.siteTitle} />
        <meta property="og:description" content={seo.siteDescription} />
        <meta property="og:site_name" content={seo.openGraph.siteName} />
        <meta property="og:locale" content={seo.openGraph.locale} />
        <meta property="og:url" content={seo.siteUrl} />
        <meta property="og:image" content={`${seo.siteUrl}/og-image.jpg`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:creator" content={seo.twitter.creator} />
        <meta name="twitter:title" content={seo.siteTitle} />
        <meta name="twitter:description" content={seo.siteDescription} />
        <meta name="twitter:image" content={`${seo.siteUrl}/og-image.jpg`} />
        
        {/* Additional SEO */}
        <link rel="canonical" href={seo.siteUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Indonesian" />
        <meta name="theme-color" content="#667eea" />
      </Head>

      <div className="main-container">
        {/* Animated Background */}
        <div className="fixed inset-0 animated-bg -z-20" />
        
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Navigation */}
        <NavigationComponent data={content.navigation} />
        
        {/* Main Content */}
        <main>
          <HeroSection data={content.hero} />
          <ExperienceSection data={content.experiences} />
          <EducationSection data={content.education} />
          <AchievementsSection data={content.achievements} />
          <CertificationSection data={content.certifications} />
          <PortfolioSection data={content.portfolio} />
        </main>
        
        {/* Footer */}
        <FooterSection data={content.footer} />
      </div>
    </>
  );
}
