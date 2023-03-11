import '../styles/global.css';

export default function App({ Component, pageProps }) {
  console.log('App Component: ', Component);
  return <Component {...pageProps} />;
}