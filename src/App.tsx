import { useEffect } from 'react';
import Menus from './components/Menus';
import Hero from './components/Hero';
import Popular from './components/Popular';
import News from './components/News';
import Footer from './components/Footer';


export default function App(): JSX.Element {
  useEffect(() => {
    if (typeof window.document?.body?.style?.scrollBehavior === 'undefined') {
        import('smoothscroll-polyfill').then(smoothscroll => {
            smoothscroll.polyfill();
        });
    }
  }, []);

  return (
    <>
      <Menus/>
      <Hero/>
      <Popular/>
      <News/>
      <Footer/>
    </>
  );
}
