
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import heroImg from "../assets/hero.jpg";
import client1 from "../assets/testimonials/client1.jpg";
import client2 from "../assets/testimonials/client2.jpg";
import client3 from "../assets/testimonials/client3.jpg";

function Home() {
  const texts = [
    "Where Elegance Meets Emotion",
    "Where Luxury Meets Love",
    "Where Your Dream Event Begins",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImg} alt="Luxury Wedding Decor" className="hero-img kenburns" />
        <div className="hero-content" data-aos="fade-up">
          <h1 className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>
            {texts[textIndex]}
          </h1>
          <p className="luxury-tagline">
            Crafting unforgettable experiences with grace, charm, and timeless beauty.
          </p>
          <a href="/services" className="cta-btn shine">
            Explore Our Creations
          </a>
        </div>
      </section>

      {/* Why Us */}
      <section className="our-promise" data-aos="fade-up">
        <h2>Why Us?</h2>
        <div className="divider" />
        <p>
          At Lotus Décor and Events, we believe every event is a reflection of your unique vision,
          and we bring it to life with unmatched creativity and attention to detail. Unlike generic
          decor services, we specialize in fully customized setups tailored to each client’s style,
          budget, and dreams. 
        </p>
        <p>Whether you envision a grand traditional celebration or a chic modern affair, we offer decor 
          for all occasions and ages. We take pride in being the only decor company in Dallas that 
          incorporates exquisite sola wood flowers alongside fresh florals, ensuring elegance and sustainability.
        </p>
        <p>
          As full-time event planners and organizers, we don’t just design—we travel with you
          throughout the event, providing expert guidance every step of the way. Let us transform
          your vision into reality with stunning decor that leaves a lasting impression!
        </p>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {[
            {
              name: "Anjali Mehra",
              quote: "Lotus Decors made our wedding magical. The team was detail-oriented, warm, and incredibly creative!",
              img: client1,
            },
            {
              name: "Ravi Patel",
              quote: "From the flowers to the lighting, everything was breathtaking. Our guests still talk about it!",
              img: client2,
            },
            {
              name: "Priya Sharma",
              quote: "They captured our style perfectly and brought elegance to every inch of our event.",
              img: client3,
            },
          ].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div
                className="testimonial-img"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="testimonial-overlay">
                <h3>{item.name}</h3>
                <p>{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-aos="zoom-in">
        <h2>Let’s Make Your Dream Event Come True</h2>
        <a href="/contact" className="cta-btn outlined">
          Book a Consultation
        </a>
      </section>
    </div>
  );
}

export default Home;
