import { BrowserRouter } from "react-router-dom";

import { Hizmetlerimiz, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Ekibimiz, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <div className='relative z-110'>
            <Navbar />
            <StarsCanvas />
            <Hero />
          </div>
        </div>
        <Hizmetlerimiz />
        <Experience />
        <Tech />
        <Ekibimiz />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
