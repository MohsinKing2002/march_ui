import Home from '@/layouts/Home';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export default function Page() {
  const [noLoginSession, setNoLoginSession] = useState(false);
  const { isLoading, userSession } = useSelector((state) => state.session);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (!query?.logout) {
      if (userSession?.account_type === 'customer') {
        router.push('/dashboard/customer');
      } else if (userSession?.business_details === '') {
        router.push({
          pathname: '/sign-up/business',
          query: {
            businessData: true
          }
        });
      } else if (userSession?.account_type === 'business') {
        router.push('/dashboard/business');
      } else setNoLoginSession(true);
    } else {
      setNoLoginSession(true);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager</title>
      </Head>
      {noLoginSession && <Home />}
    </>
  );
}
