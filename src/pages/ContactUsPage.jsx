import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUsPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
    return (
        <section id="contact" className="mb-40 max-width">
        <h6 data-aos='fade-up' data-aos-duration="700" className="text-lg sm:text-2xl text-center text-secondary mb-1 sm:mb-2">
          Contact Us
        </h6>
        <h2 data-aos='fade-up' data-aos-duration="700" className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        Reach Out to Our Agency
        </h2>
        <ContactForm />
        </section>
    );
};

export default ContactUsPage;