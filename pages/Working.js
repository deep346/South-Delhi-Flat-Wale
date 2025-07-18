// import React, { useState } from 'react';
// import Head from 'next/head';

// export default function Home() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 

//     const form = e.target;
//     const formData = new FormData(form);

//     const name = formData.get('name').trim();
//     const email = formData.get('email').trim();
//     const phone = formData.get('phone').trim();

//     // Validate Name: only letters and spaces
//     const nameRegex = /^[A-Za-z\s]+$/;
//     if (!nameRegex.test(name)) {
//       alert('Name should contain only letters and spaces.');
//       return;
//     }

//     // Validate Email: must include '@'
//     if (!email.includes('@')) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     // Validate Phone: exactly 10 digits numeric
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phone)) {
//       alert('Phone number should be exactly 10 digits.');
//       return;
//     }

//     // If all validations pass, submit the form
//     const response = await fetch('https://formsubmit.co/ajax/deepankarkumar1995@gmail.com', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//       },
//       body: formData,
//     });

//     if (response.ok) {
//       setSubmitted(true);
//       form.reset();
//     } else {
//       alert('Oops! Something went wrong. Please try again.');
//     }
//   };
  

//   return (
//     <div className="font-sans text-gray-800 bg-white min-h-screen">
     

//       {/* Header */}
//       <header className="fixed w-full bg-white shadow-md z-30">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-extrabold text-blue-700">South Delhi Flat Wale</h1>
//           <nav className="space-x-6 text-sm font-semibold text-blue-600">
//             <a href="#about" className="hover:text-blue-800 transition">About</a>
//             <a href="#services" className="hover:text-blue-800 transition">Services</a>
//             <a href="#contact" className="hover:text-blue-800 transition">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="pt-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6">
//         <div className="max-w-4xl mx-auto py-20">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
//             Find Premium Flats in South Delhi
//           </h2>
//           <p className="text-xl md:text-2xl mb-10 drop-shadow-md">
//             Trusted Real Estate Consultant, Making Your Dream Home a Reality
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
//             <a
//               href="#contact"
//               className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition"
//             >
//               Enquiry Now
//             </a>
//             <a
//               href="https://wa.me/918722409453"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition flex items-center justify-center"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section
//   id="about"
//   className="max-w-5xl mx-auto px-6 py-16 text-center md:text-left rounded-lg shadow-lg"
//   style={{
//     background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
//   }}
// >
//   <h3 className="text-3xl font-bold mb-6 text-blue-700">About Us</h3>
//   <p className="text-lg max-w-3xl mx-auto md:mx-0 leading-relaxed">
//     We are a 5-star rated real estate consultancy based in South Delhi (R-276 LGF), offering on-site services and online appointments to help you find your perfect flat.
//   </p>
// </section>

//       {/* Services */}
//       <section
//         id="services"
//         className="relative max-w-5xl mx-auto px-6 py-20 rounded-lg shadow-inner overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1560448070-18a1a0e007d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center text-white">
//           <h3 className="text-3xl font-bold mb-10">Our Services</h3>
//           <ul className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-lg">
//             <li className="flex items-center space-x-4">
//               <span className="text-green-400 text-3xl">✔</span>
//               <span>On-site Property Visits</span>
//             </li>
//             <li className="flex items-center space-x-4">
//               <span className="text-green-400 text-3xl">✔</span>
//               <span>Online Appointments</span>
//             </li>
//             <li className="flex items-center space-x-4">
//               <span className="text-green-400 text-3xl">✔</span>
//               <span>Personalized Flat Recommendations</span>
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//   id="contact"
//   className="max-w-4xl mx-auto px-6 py-16 rounded-lg shadow-lg"
//   style={{
//     background: 'linear-gradient(135deg, #f0f9ff 0%, #cfe8ff 100%)',
//   }}
// >
//         <h3 className="text-3xl font-bold mb-8 text-blue-700 text-center">Contact Us</h3>

//         <div className="mb-10 text-center space-y-3 text-blue-700 text-lg">
//           <p>
//             📞 Phone:{' '}
//             <a href="tel:+917349743839" className="underline hover:text-blue-900">+91 73497 43839</a>
//           </p>
//           <p>
//             📧 Email:{' '}
//             <a href="mailto:deepankarkumar1995@gmail.com" className="underline hover:text-blue-900">deepankarkumar1995@gmail.com</a>
//           </p>
//         </div>

//         {submitted ? (
//           // Thank you message after submit
//           <div className="bg-blue-50 p-10 rounded shadow max-w-xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4 text-blue-700">Thank you!</h2>
//             <p className="text-lg">
//               Abhishek Uzwal will reach out to you soon with the best flats matching your needs.
//             </p>
//           </div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-lg rounded-lg p-10 max-w-xl mx-auto"
//             noValidate
//           >
//             <div className="mb-6">
//               <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* New Phone Number Field */}
//             <div className="mb-6">
//               <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 placeholder="Your Phone Number"
//                 pattern="[0-9+]{7,15}"
//                 title="Please enter a valid phone number"
//                 className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="flatType" className="block mb-2 font-semibold text-gray-700">Flat Type</label>
//               <select
//                 id="flatType"
//                 name="flatType"
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Flat Type</option>
//                 <option value="1 BHK">1 BHK</option>
//                 <option value="2 BHK">2 BHK</option>
//                 <option value="3 BHK">3 BHK</option>
//               </select>
//             </div>

//             <div className="mb-6">
//               <label htmlFor="purpose" className="block mb-2 font-semibold text-gray-700">Purpose</label>
//               <select
//                 id="purpose"
//                 name="purpose"
//                 required
//                 className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Purpose</option>
//                 <option value="Buy">Buy</option>
//                 <option value="Rent">Rent</option>
//               </select>
//             </div>

//             <div className="mb-6">
//               <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Additional Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 placeholder="Tell us any other preferences..."
//                 className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//             </div>

//             {/* Hidden inputs for FormSubmit.co */}
//             <input type="hidden" name="_captcha" value="false" />
//             <input type="hidden" name="_template" value="table" />
//             <input
//               type="hidden"
//               name="_autoresponse"
//               value="Thank you! Abhishek Uzwal will reach out to you soon with the best flats matching your needs."
//             />

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white font-semibold py-4 rounded hover:bg-blue-700 transition"
//             >
//               Send Enquiry
//             </button>
//           </form>
//         )}
//       </section>

//       <footer className="text-center py-6 text-sm text-gray-500 border-t mt-16">
//         &copy; 2025 South Delhi Flat Wale. All rights reserved.
//       </footer>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/918722409453?text=Hi%2C%20I%27m%20interested%20in%20flats%20in%20South%20Delhi"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
//         aria-label="Chat on WhatsApp"
//       >
//         <svg
//           className="w-9 h-9 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path d="M20.52 3.48A11.883 11.883 0 0012 0C5.37 0 0 5.37 0 12a11.83 11.83 0 001.64 6.01L0 24l6.18-1.6a11.84 11.84 0 005.82 1.48c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.4zM12 21.9a9.873 9.873 0 01-5.15-1.44l-.37-.22-3.66.95.98-3.56-.24-.38a9.913 9.913 0 01-1.52-5.32c0-5.45 4.45-9.9 9.9-9.9 2.64 0 5.12 1.03 6.97 2.9a9.77 9.77 0 012.9 6.94c0 5.44-4.45 9.9-9.9 9.9zm5.37-7.3c-.3-.15-1.76-.87-2.03-.96-.27-.1-.46-.15-.65.15s-.75.96-.92 1.16c-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.16-.24-.57-.48-.5-.65-.5h-.56c-.2 0-.52.07-.8.37s-1.04 1.02-1.04 2.5 1.06 2.9 1.2 3.1c.15.2 2.07 3.2 5.03 4.48.7.3 1.25.48 1.68.62.7.23 1.34.2 1.85.12.57-.1 1.76-.72 2.01-1.42.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
//         </svg>
//       </a>
//     </div>
//   );
// }
