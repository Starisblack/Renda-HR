import CallToAction from "./components/CallToAction/CallToAction";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Layout from "./containers/Layout/Layout";


function App() {
  return (

    <Layout>
      <Hero />
      <Services />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />


    </Layout>
  );
}

export default App;
