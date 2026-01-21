import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect all 404 pages to homepage
    router.push('/');
  }, [router]);

  return null;
};

export default Custom404;