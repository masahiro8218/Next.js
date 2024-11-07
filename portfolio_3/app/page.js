import Banner from '../components/Banner';
import Client from '../components/Client';
import Services from './services/page';
import About from './about/page';
import Contact from './contact/page';
import Director from './director/page';

export default function Home() {
  return (
    <>
      <Banner />
      <Client />
      <Services />
      <About />
      <Contact />
      <Director />
    </>
  );
}
