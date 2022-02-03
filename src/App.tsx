import Menus from './components/Menus';
import Hero from './components/Hero';
import Popular from './components/Popular';
import News from './components/News';
import Footer from './components/Footer';


export default function App(): JSX.Element {
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