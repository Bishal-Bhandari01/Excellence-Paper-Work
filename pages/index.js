import NavBar from "./navbar";
import Main from "./main";
import Aboutus from './aboutus';
import Contactus from './contactus'
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <div>
       <NavBar />
      </div>
      <Main />
      <Aboutus />
      <Contactus />
      <Footer />
    </div>
  );
}
