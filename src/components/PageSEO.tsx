import { NextSeo } from 'next-seo';

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title, description, canonical }) => {
  const baseUrl = 'https://shiftmastersessions.com';

  return (
    <NextSeo
      title={`${title} | SHiFT`}
      description={description}
      canonical={canonical ? `${baseUrl}${canonical}` : undefined}
      openGraph={{
        title: `${title} | SHiFT`,
        description,
        url: canonical ? `${baseUrl}${canonical}` : undefined,
      }}
    />
  );
};

export default PageSEO;