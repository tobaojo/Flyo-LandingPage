import Container from './components/Container';
import Features from './components/Features';
import Footer from './components/Footer';
import GetStartedForm from './components/GetStartedForm';
import Hero from './components/Hero';
import Information from './components/Information';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Container>
        <div className="bg-navy-850 w-full overflow-x-visible mx-auto">
          <Navbar />
          <Hero />
        </div>
        <Features />
        <Information />
        <Testimonials />
        <GetStartedForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
