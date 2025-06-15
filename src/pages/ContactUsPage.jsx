import ContactForm from '../components/ContactForm';


const ContactUsPage = () => {

    return (
        <section id="contact" className="max-width">
        <h6 data-aos='fade-right' data-aos-duration="700" className="text-lg sm:text-2xl text-center text-secondary mb-1 sm:mb-2">
          Contact Us
        </h6>
        <h2 data-aos='fade-left' data-aos-duration="700" className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-8">
        Reach Out to Our Coaching Centre
        </h2>
        <ContactForm />
        </section>
    );
};

export default ContactUsPage;