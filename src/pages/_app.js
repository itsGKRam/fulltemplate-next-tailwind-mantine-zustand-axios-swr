import myAxios from '@config/myAxios';
import useThemeStore from '@config/store/useThemeStore';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

function MyApp(props) {
  const isBrowser = () => typeof window !== 'undefined';
  const api = myAxios.init();
  const { Component, pageProps, router } = props;
  const theme = useThemeStore((state) => state.theme);
  const [themeMode, setThemeMode] = React.useState(theme);
  const getLayout = Component.getLayout || ((page) => page);

  const toggleColorScheme = (value) => {
    setThemeMode(value || (themeMode === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);



  return (
    <>
      <Head>
        <title>itsGKRam | Full Template</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta name="description" content="Generated by itsgkram" />
        <link rel="icon" href="/src/public/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          revalidateIfStale: false,
          revalidateOnFocus: true,
          revalidateOnReconnect: false,
          fetcher: (url) =>
            api.global.get(url).then((res) => res.data),
        }}
      >
        <ColorSchemeProvider
          colorScheme={themeMode}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: themeMode,
              defaultRadius: 'sm',
              primaryColor: 'orange',
              dir: 'ltr',
              loader: 'dots',
            }}
            defaultProps={{
              Container: {
                size: 'lg',
              },
            }}
          >
            <NotificationsProvider
              position='top-right'
              zIndex={1000}
              limit={3}
            >
              <ModalsProvider>
                {getLayout(
                  <Component
                    {...pageProps}
                    key={router.route}
                  />,
                )}
              </ModalsProvider>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
