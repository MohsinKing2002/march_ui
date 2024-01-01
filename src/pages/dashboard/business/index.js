import Head from 'next/head';
import Dashboard from '@/layouts/Dashboard';
import AuthSession from '@/hoc/AuthSession';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <AuthSession>
        <Dashboard />
      </AuthSession>
    </>
  );
};

export default Page;
