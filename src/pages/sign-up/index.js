import Head from 'next/head';
import SignUp from '@/layouts/SignUp';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Page = () => {
  const [noLoginSession, setNoLoginSession] = useState(false);
  const { isLoading, userSession } = useSelector((state) => state.session);
  const router = useRouter();

  useEffect(() => {
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
  }, []);
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>March</title>
      </Head>
      {noLoginSession && <SignUp />}
    </>
  );
};

export default Page;
