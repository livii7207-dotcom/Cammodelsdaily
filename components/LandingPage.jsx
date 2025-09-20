import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1950&q=80'
];

export default function LandingPage() {
  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    // Pick a random image on load
    const randomIndex = Math.floor(Math.random() * images.length);
    setBgImage(images[randomIndex]);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
          filter: "brightness(0.5)"
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 bg-black bg-opacity-40 min-h-screen flex flex-col">
        <header className="p-6 flex justify-between items-center border-b border-gray-800">
          <h1 className="text-2xl font-bold">CamModelsDaily.com</h1>
          <nav className="space-x-6">
            <a href="#models" className="hover:text-pink-400">For Models</a>
            <a href="#affiliates" className="hover:text-pink-400">Affiliates</a>
            <a href="#about" className="hover:text-pink-400">About</a>
          </nav>
        </header>

        <section className="text-center py-24 px-6 flex-grow flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Get Paid Daily. Stream Smarter. <span className="text-pink-400">CamModelsDaily.com</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join the #1 daily-pay cam network built for independent creators. 
            Keep more of your earnings, withdraw when you want, and stay in control.
          </p>
          <div className="space-x-4">
            <a href="#apply" className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 shadow-lg text-white font-medium">
              Apply as a Model
            </a>
            <a href="#affiliates" className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 shadow-lg font-medium">
              Become an Affiliate
            </a>
          </div>
        </section>

        <footer className="p-6 text-center text-gray-300 border-t border-gray-800">
          © {new Date().getFullYear()} CamModelsDaily.com. All rights reserved.
        </footer>
      </div>
    </div>
  );
}