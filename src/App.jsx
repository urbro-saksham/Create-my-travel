import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Star, Plane, Car, Shield, Hotel, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('india');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop",
      title: "Experience India",
      description: "Luxury travel redefined across the subcontinent.",
      tag: "Cultural Heritage"
    },
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
      title: "Himalayan Peaks",
      description: "Adventure and peace in the majestic mountains.",
      tag: "Adventure"
    },
    {
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",
      title: "Tropical Luxury",
      description: "Crystal clear waters and golden sands.",
      tag: "Luxury"
    },
    {
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop",
      title: "Global Wonders",
      description: "Explore the world's most iconic landmarks.",
      tag: "International"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <img src="/logo.png" alt="Create My Travel" className="logo-img" />
            <h1>Create My Travel</h1>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#packages" onClick={() => setMobileMenuOpen(false)}>Packages</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#moments" onClick={() => setMobileMenuOpen(false)}>Moments</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="hero-slide"
          >
            <div className="hero-bg">
              <motion.img
                key={`img-${currentSlide}`}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="bg-img"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
              />
              <div className="overlay"></div>
            </div>

            <div className="container hero-content">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hero-text-box"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="hero-tag"
                >
                  {slides[currentSlide].tag}
                </motion.span>
                <h1>{slides[currentSlide].title.split(' ').map((word, i) =>
                  word === 'India' || word === 'Peaks' || word === 'Luxury' || word === 'Wonders' ?
                    <span key={i} className="text-gradient">{word} </span> : word + ' '
                )}</h1>
                <p>{slides[currentSlide].description}</p>
                <div className="hero-buttons">
                  <a href="#packages" className="btn btn-primary">View Packages <ChevronRight size={18} /></a>
                  <a href="#about" className="btn btn-secondary">Our Story</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="about-image-wrapper"
            >
              <div className="img-frame glass">
                <img src="/oldbanner.jpeg" alt="Our Legacy" className="about-img" />
              </div>
              <div className="experience-badge glass">
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="about-content"
            >
              <span className="section-tag">Who We Are</span>
              <h2>Crafting Unforgettable Journeys Since 2012</h2>
              <p>Established in South Delhi, <strong>Create My Travel</strong> has grown into an eminent name in the travel industry. We are dedicated to offering complete travel solutions with a commitment to transparency and excellence.</p>
              <p>As a sole proprietorship firm, we strictly adhere to a policy of affordability, ensuring our rates are competitive while completely avoiding hidden costs. From spiritual retreats to international adventures, we handle every detail with premium care.</p>

              <div className="stats-row">
                <div className="stat">
                  <h4 className="text-gradient">500+</h4>
                  <span>Tours Completed</span>
                </div>
                <div className="stat">
                  <h4 className="text-gradient">10k+</h4>
                  <span>Happy Travelers</span>
                </div>
                <div className="stat">
                  <h4 className="text-gradient">50+</h4>
                  <span>Destinations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-light founder-section">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="founder-card glass"
          >
            <div className="founder-content">
              <span className="section-tag">The Visionary</span>
              <h2>A Message from Our Founder</h2>
              <blockquote className="founder-quote">
                "Travel is the only thing you buy that makes you richer. At Create My Travel, our mission is to ensure every journey adds a new chapter of joy to your life. We don't just sell tickets; we build relationships."
              </blockquote>
              <div className="founder-meta">
                <h4 className="text-gradient">Vipin Kumar Srivastava</h4>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="founder-image-container">
              <img src="/founder-image.webp" alt="Founder" className="founder-img" />
              <div className="founder-backdrop"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding packages-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Collections</span>
            <h2>Curated Travel Packages</h2>
            <p className="section-subtitle">Discover our most popular destinations crafted for the perfect getaway.</p>
          </div>

          <div className="tab-controls">
            <button className={`tab-btn ${activeTab === 'india' ? 'active' : ''}`} onClick={() => setActiveTab('india')}>Domestic (India)</button>
            <button className={`tab-btn ${activeTab === 'international' ? 'active' : ''}`} onClick={() => setActiveTab('international')}>International</button>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="packages-grid"
          >
            {activeTab === 'india' ? (
              <>
                <motion.div variants={fadeIn} className="package-card glass">
                  <div className="pkg-img-wrap">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" alt="Varanasi" />
                    <span className="pkg-price">Get Best Deal</span>
                  </div>
                  <div className="pkg-content">
                    <div className="pkg-rating"><Star size={16} className="star-icon" /> 4.9 (120 reviews)</div>
                    <h3>Spiritual Varanasi</h3>
                    <p>A journey through the oldest living city in the world. Witness the magical Ganga Aarti.</p>
                    <div className="pkg-footer">
                      <span className="duration">4 Days / 3 Nights</span>
                      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Explore</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="package-card glass">
                  <div className="pkg-img-wrap">
                    <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop" alt="Rajasthan" />
                    <span className="pkg-price">Get Best Deal</span>
                  </div>
                  <div className="pkg-content">
                    <div className="pkg-rating"><Star size={16} className="star-icon" /> 4.8 (85 reviews)</div>
                    <h3>Royal Rajasthan</h3>
                    <p>Live like royalty in the grand palaces of Jaipur, Jodhpur, and Udaipur.</p>
                    <div className="pkg-footer">
                      <span className="duration">7 Days / 6 Nights</span>
                      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Explore</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="package-card glass">
                  <div className="pkg-img-wrap">
                    <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop" alt="Kerala" />
                    <span className="pkg-price">Get Best Deal</span>
                  </div>
                  <div className="pkg-content">
                    <div className="pkg-rating"><Star size={16} className="star-icon" /> 5.0 (200 reviews)</div>
                    <h3>Kerala Backwaters</h3>
                    <p>Relax in the serene houseboats and explore the lush green landscapes of God's Own Country.</p>
                    <div className="pkg-footer">
                      <span className="duration">5 Days / 4 Nights</span>
                      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Explore</a>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div variants={fadeIn} className="package-card glass">
                  <div className="pkg-img-wrap">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop" alt="Paris" />
                    <span className="pkg-price">Get Best Deal</span>
                  </div>
                  <div className="pkg-content">
                    <div className="pkg-rating"><Star size={16} className="star-icon" /> 4.9 (150 reviews)</div>
                    <h3>European Charm</h3>
                    <p>Discover the romance of Paris, the history of Rome, and the beauty of the Swiss Alps.</p>
                    <div className="pkg-footer">
                      <span className="duration">10 Days / 9 Nights</span>
                      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Explore</a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="package-card glass">
                  <div className="pkg-img-wrap">
                    <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" alt="Bali" />
                    <span className="pkg-price">Get Best Deal</span>
                  </div>
                  <div className="pkg-content">
                    <div className="pkg-rating"><Star size={16} className="star-icon" /> 4.8 (95 reviews)</div>
                    <h3>Bali Getaway</h3>
                    <p>Experience tropical paradise, vibrant culture, and stunning beaches in Indonesia.</p>
                    <div className="pkg-footer">
                      <span className="duration">6 Days / 5 Nights</span>
                      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Explore</a>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="package-card glass">
                  <div className="pkg-img-wrap">
                    <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" alt="Dubai" />
                    <span className="pkg-price">Get Best Deal</span>
                  </div>
                  <div className="pkg-content">
                    <div className="pkg-rating"><Star size={16} className="star-icon" /> 5.0 (310 reviews)</div>
                    <h3>Dubai Luxury</h3>
                    <p>Experience the future in the city of gold. Sky-high luxury and desert adventures await.</p>
                    <div className="pkg-footer">
                      <span className="duration">5 Days / 4 Nights</span>
                      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Explore</a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-light services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Beyond Travel</span>
            <h2>Extra Services for You</h2>
            <p className="section-subtitle">We take care of every detail so you can focus on making memories.</p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="services-grid">
            <motion.div variants={fadeIn} className="service-card glass">
              <div className="service-icon"><Car size={32} /></div>
              <h3>Premium Transport</h3>
              <p>Airport pickups, luxury car rentals, and inter-city transfers with professional drivers.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="service-card glass">
              <div className="service-icon"><Plane size={32} /></div>
              <h3>Visa Assistance</h3>
              <p>Hassle-free documentation and processing for all international travel requirements.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="service-card glass">
              <div className="service-icon"><Shield size={32} /></div>
              <h3>Travel Insurance</h3>
              <p>Comprehensive coverage to keep you and your loved ones safe throughout your journey.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="service-card glass">
              <div className="service-icon"><Hotel size={32} /></div>
              <h3>Hotel Bookings</h3>
              <p>Exclusive tie-ups with premium properties ensuring the best rates and amenities.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Moments / Gallery Section */}
      <section id="moments" className="section-padding moments-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Life at Create My Travel</span>
            <h2>Our Company Moments</h2>
            <p className="section-subtitle">Behind every successful trip is a team that celebrates together.</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item large glass">
              <img src="/office-event1.jpeg" alt="Industry Event" />
              <div className="gallery-overlay">
                <Camera className="gallery-icon" />
                <span>Industry Events</span>
              </div>
            </div>
            <div className="gallery-item glass">
              <img src="/office-event2.jpeg" alt="Office Meet" />
              <div className="gallery-overlay">
                <Camera className="gallery-icon" />
                <span>Annual Meet</span>
              </div>
            </div>
            <div className="gallery-item glass">
              <img src="/satte-event.jpeg" alt="Travel Show" />
              <div className="gallery-overlay">
                <Camera className="gallery-icon" />
                <span>SATTE Travel Show</span>
              </div>
            </div>
            <div className="gallery-item glass">
              <img src="/office-event3.jpeg" alt="Team Celebration" />
              <div className="gallery-overlay">
                <Camera className="gallery-icon" />
                <span>Team Celebration</span>
              </div>
            </div>
            <div className="gallery-item glass">
              <img src="/office-event4.jpeg" alt="Office Moments" />
              <div className="gallery-overlay">
                <Camera className="gallery-icon" />
                <span>Office Moments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="contact-wrapper glass">
            <div className="contact-info">
              <span className="section-tag">Get in Touch</span>
              <h2>Ready for your next adventure?</h2>
              <p>Plan your dream vacation with us. Reach out via phone, email, or visit our office in Delhi. We are always ready to assist you!</p>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon"><Phone size={24} /></div>
                  <div>
                    <h4>Phone Numbers</h4>
                    <p>9711219898, 8744809898, 9718351467</p>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"><MapPin size={24} /></div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Dwarka Mod, New Delhi</p>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>anurag.goodluck@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-visual">
              <img src="https://images.unsplash.com/photo-1533514114760-4389f572ae26?q=80&w=1000&auto=format&fit=crop" alt="Contact Us Map" className="contact-img" />
              <div className="visual-overlay">
                <h3>Visit Us in Delhi</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/logo.png" alt="Create My Travel" className="logo-img footer-logo" />
              <p>Your trusted partner for premium travel experiences across India and the globe.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Create My Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <a href="https://wa.link/4ri2dm" target="_blank" rel="noreferrer" className="whatsapp-float">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.631 1.43h.005c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
