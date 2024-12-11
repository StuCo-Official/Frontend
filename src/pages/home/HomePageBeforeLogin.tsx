import React from 'react';
import { Link } from 'react-router-dom';
import image31 from "../../assets/Image_31.png";
import IntroduceFeatureCard from '../../components/cards/IntroduceFeature.tsx';
import ContactUsCard from '../../components/cards/ContactUsCard.tsx';
import Footer from '../../components/cards/Footer.tsx';
import MyAppBar from '../../components/layout/AppBar.tsx';
import WelcomeCard from '../../components/cards/WelcomeCardOnMain.tsx';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* AppBar section */}
      <section>
        <MyAppBar />
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <WelcomeCard/>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <IntroduceFeatureCard />
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <ContactUsCard />
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
