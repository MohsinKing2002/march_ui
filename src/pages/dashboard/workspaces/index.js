import Head from 'next/head';
import AuthSession from '@/hoc/AuthSession';
import Workspaces from '@/layouts/Workspaces';

const Page = () => {
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
      <AuthSession>
        <Workspaces />
      </AuthSession>
    </>
  );
};

export default Page;
