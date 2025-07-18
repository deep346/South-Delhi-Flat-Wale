import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import { supabase } from "../utils/supabaseClient";


export default function Home() {
  const formRef = useRef(null);
  const thankYouRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    if (submitted && thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //setSubmitted(true); // to send enquiry quickly
    
    const form = formRef.current;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim() || "";
    const email = formData.get("email")?.trim() || "";
    const phone = formData.get("phone")?.trim() || "";

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {

      alert("Name should contain only letters and spaces.");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be exactly 10 digits.");
      setLoading(false);
      return;
    }

    const flattype = formData.get("flattype")?.trim() || "";
    const purpose = formData.get("purpose")?.trim() || "";
    const message = formData.get("message")?.trim() || "";
    // To check if customer doesn't give proper fields and every fields should be filled by the customer 
    if(!name || !email || !phone || !flattype||!purpose || !message){
      alert("Please fill in all fields");
      setLoading(false);
    }

    try {

      const [dbResult, emailResult] = await Promise.all([
        supabase.from("enquiries").insert([{ name, email, phone, flattype, purpose, message }]),
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, flattype, purpose, message })
        })
      ]);


      const dbError = dbResult.error;

      if (dbError) {
        console.error(dbError);
        alert("Submission failed. Please try again.");
      } else {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Connection failed. Please check your internet or try again later.");
    } finally{
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>South Delhi Flat Wale</title>
        <meta name="description" content="South Delhi Flat Wale - Trusted real estate consultancy with over 10 years of experience in South Delhi. Find your dream flat today." />
        <meta name="keywords" content="South Delhi flats, real estate South Delhi, buy flat Delhi, rent flat Delhi, property consultant Delhi, luxury flats Delhi" />
        <meta name="author" content="South Delhi Flat Wale" />
        <meta property="og:title" content="South Delhi Flat Wale - Premium Flats in South Delhi" />
        <meta property="og:description" content="We are a renowned real estate consultancy with over 10 years of experience helping clients find their dream flats in South Delhi." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://southdelhiflatwale.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="relative z-10 flex flex-col min-h-screen justify-center items-center px-6 text-center text-white max-w-5xl mx-auto">
          <header className="w-full fixed top-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-sm shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
                <a href="#">South Delhi Flat Wale</a>
              </h1>

              <nav className="hidden md:flex space-x-10 font-semibold text-cyan-300">
                <a
                  href="#about"
                  className="hover:text-cyan-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-cyan-500 transition duration-300"
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  className="hover:text-cyan-500 transition duration-300"
                >
                  Gallery
                </a>
                <a
                  href="#highlight"
                  className="hover:text-cyan-500 transition duration-300"
                >
                  Highlight
                </a>
                <a
                  href="#contact"
                  className="hover:text-cyan-500 transition duration-300"
                >
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <div className="h-20" />

          <section className="max-w-3xl mx-auto py-24 px-6 sm:px-0">
            <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg leading-tight">
              Find Your Dream Flat in South Delhi
            </h2>
            <p className="text-xl mb-12 text-cyan-200 drop-shadow-md leading-relaxed">
              Premium flats, trusted consultancy, and personalized service
              tailored for you.
            </p>
            <div className="flex justify-center gap-8">
              <a
                href="#contact"
                //onClick={(e) => handleButtonClick('Enquiry Now',e)}

                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"


              >

                Enquiry Now
              </a>
              <a
                href="https://wa.me/918722409453"
                target="_blank"
                rel="noopener noreferrer"
                //onClick={()=> handleButtonClick('WhatsApp Us')}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg transition transform hover:scale-105 flex items-center justify-center"
              >
                WhatsApp Us
              </a>
            </div>
          </section>


          <section
            id="about"
            className="w-full bg-black bg-opacity-60 rounded-xl shadow-lg py-16 px-8 my-16 backdrop-blur-sm"
          >
            <h3 className="text-4xl font-semibold mb-6 text-cyan-400">
              About Us
            </h3>
            <p className="text-cyan-200 max-w-3xl mx-auto leading-relaxed text-lg">
              We are a 5-star rated real estate consultancy based in South Delhi,
              offering on-site services and online appointments to help you find
              your perfect flat.
            </p>
          </section>


          <section
            id="services"
            className="w-full bg-black bg-opacity-60 rounded-xl shadow-lg py-16 px-8 my-16 backdrop-blur-sm"
          >
            <h3 className="text-4xl font-semibold mb-12 text-cyan-400 text-center">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-cyan-200 text-lg font-semibold text-center">
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">✔</span>
                <span>On-site Property Visits</span>
              </li>
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">✔</span>
                <span>Online Appointments</span>
              </li>
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">✔</span>
                <span>Personalized Flat Recommendations</span>
              </li>
            </ul>
          </section>
          <section
            id="gallery"
            className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16"
          >
            <h2 className="text-4xl font-bold text-center text-cyan-600 mb-10">
              Property Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <img
                src="https://images.unsplash.com/photo-1599423300746-b62533397364"
                alt="Modern luxury home"
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Interior living room"
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Modern kitchen"
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                alt="Apartment building"
                className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
          </section>
          <section
            id="highlight"
            className="w-full bg-black bg-opacity-60 rounded-xl shadow-lg py-16 px-8 my-16 backdrop-blur-sm"
          >
            <h3 className="text-4xl font-semibold mb-6 text-cyan-400 text-center">
              Highlight
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-cyan-200 text-lg font-semibold text-center">
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">🏡</span>
                <span>10+ Years of Real Estate Excellence</span>
              </li>
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">📈</span>
                <span>500+ Properties Sold in South Delhi</span>
              </li>
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">⭐</span>
                <span>South Delhi’s Trusted Name for Premium Homes</span>
              </li>
              <li className="flex flex-col items-center space-y-3">
                <span className="text-green-400 text-5xl">🤝</span>
                <span>100% Customer Satisfaction Guaranteed</span>
              </li>
            </ul>
          </section>



          <section
            id="contact"
            className="w-full bg-black bg-opacity-60 rounded-xl shadow-lg py-16 px-8 my-16 backdrop-blur-sm max-w-7xl mx-auto"
          >
            <h3 className="text-4xl font-semibold mb-12 text-cyan-400 text-center">
              Contact Us
            </h3>


            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side: Contact Form */}
              <div className="w-full lg:w-1/2">
                {submitted && (
                  <div ref={thankYouRef} className="bg-green-900 bg-opacity-80 text-green-300 px-6 py-4 mb-8 rounded-lg text-center shadow">

                    Thank you! <strong>Abhishek Uzwal</strong> will reach out to you
                    soon with the best flats matching your needs.
                  </div>
                )}

                {submitted && (
                  <div ref={thankYouRef} className="mt-8 text-center">
                    {/* <h2 className="text-2xl font-bold text-green-500">Thank you for your enquiry!</h2>
      <p className="mt-2 text-gray-200">We’ll get back to you shortly.</p> */}
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setTimeout(() => {
                          formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 100); // short delay to ensure form is visible again
                      }}
                      className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded"
                    >
                      Back to Enquiry Form
                    </button>
                  </div>
                )}


                <div className="mb-12 text-cyan-200 text-lg text-center space-y-3">
                  <p>
                    📞 Phone:{" "}
                    <a href="tel:+917349743839" className="underline hover:text-cyan-400">
                      +91 73497 43839
                    </a>
                  </p>
                  <p>
                    📧 Email:{" "}
                    <a
                      href="mailto:deepankarkumar1995@gmail.com"
                      className="underline hover:text-cyan-400"
                    >
                      deepankarkumar1995@gmail.com
                    </a>
                  </p>
                </div>

                {!submitted && (
                  <form
                    ref={formRef}
                    method="POST"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <input type="hidden" name="_captcha" value="false" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-800 placeholder-cyan-400 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-800 placeholder-cyan-400 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      pattern="[0-9]{10}"
                      title="Please enter exactly 10 digits"
                      className="w-full px-4 py-3 rounded bg-gray-800 placeholder-cyan-400 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <select
                      name="flattype"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="" disabled>
                        Select Flat Type
                      </option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="4 BHK">4 BHK</option>
                      <option value="5 BHK">5 BHK</option>
                      <option value="Duplex or Apartment">Duplex or Apartment</option>
                    </select>
                    <select
                      name="purpose"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="" disabled>
                        Select Purpose
                      </option>
                      <option value="Buy">Buy</option>
                      <option value="Rent">Sale</option>
                      <option value="Rent">Rent</option>
                    </select>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Additional message..."
                      className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-cyan-700 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                    <button
                      type="submit"
                      disabled={submitted}
                      //onClick={() => handleButtonClick('Send Enquiry')}
                      className={`w-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold py-4 rounded shadow-md hover:scale-105 transform ${submitted ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                    >
                      {submitted ? "Submitted" : "Send Enquiry"}
                    </button>
                  </form>
                )}
              </div>

              {/*Google Map */}
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1800000000003!2d77.2436776!3d28.5472302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34afa98618d%3A0xe3c9defba2623fff!2sSouth%20Delhi%20Flat%20Wale%20-%20Real%20Estate%20Consultant!5e0!3m2!1sen!2sin!4v1720888264714!5m2!1sen!2sin"
                  width="100%"
                  height="670"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-xl"
                ></iframe>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=South+Delhi+Flat+Wale+-+Real+Estate+Consultant"
                  target="_blank"
                  rel="noopener noreferrer"
                  //onClick={() => handleButtonClick('Get Directions')}
                  className="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>
          </section>



          <footer className="text-center text-cyan-400 py-6 mb-6 select-none">
            &copy; 2025 South Delhi Flat Wale. All rights reserved.
          </footer>
        </div>

        <a
          href="https://wa.me/918722409453?text=Hi%2C%20I%20was%20exploring%20South%20Delhi%20Flat%20Wale%20and%20I%27m%20interested%20in%20learning%20more%20about%20your%20available%20properties.%20Can%20you%20help%20me%20find%20the%20right%20flat%20for%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          //onClick={() => handleButtonClick('Floating WhatsApp Icon')}
          className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-green-600 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-9 h-9 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.883 11.883 0 0012 0C5.37 0 0 5.37 0 12a11.83 11.83 0 001.64 6.01L0 24l6.18-1.6a11.84 11.84 0 005.82 1.48c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.4zM12 21.9a9.873 9.873 0 01-5.15-1.44l-.37-.22-3.66.95.98-3.56-.24-.38a9.913 9.913 0 01-1.52-5.32c0-5.45 4.45-9.9 9.9-9.9 2.64 0 5.12 1.03 6.97 2.9a9.77 9.77 0 012.9 6.94c0 5.44-4.45 9.9-9.9 9.9zm5.37-7.3c-.3-.15-1.76-.87-2.03-.96-.27-.1-.46-.15-.65.15s-.75.96-.92 1.16c-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.16-.24-.57-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.04 1.02-1.04 2.5 1.06 2.9 1.2 3.1c.15.2 2.07 3.2 5.03 4.48.7.3 1.25.48 1.68.62.7.23 1.34.2 1.85.12.57-.1 1.76-.72 2.01-1.42.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </a>
      </div>
    </>
  );
}
