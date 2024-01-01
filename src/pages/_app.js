import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Loader } from '@/components';
import { logout, loadingStart, loadingStop, login } from '@/redux/action';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Config from '@/config';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WrappingContainer pageProps={pageProps} Component={Component} />
      </PersistGate>
    </Provider>
  );
}

const WrappingContainer = ({ Component, pageProps }) => {
  const { isLoading, userSession } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Handle logout action on unauthorized api call
    if (Config.UNAUTHORIZED_EXCEPTION == true) {
      dispatch(logout());
      Config.UNAUTHORIZED_EXCEPTION = false;
      router.replace('/?logout=1');
    }
  }, [Config.UNAUTHORIZED_EXCEPTION]);

  useEffect(() => {
    // This use Effect is only used to load localstorage data into redux on page reload.
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};
