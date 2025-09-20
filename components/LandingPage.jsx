import React from 'react';

export default function LandingPage() {
  return (
      <div className="relative min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {/* Content overlay */}
                  <div className="relative z-10 min-h-screen flex flex-col">
                          <header className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-800">
                                    <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">CamModelsDaily.com</h1>
                                              <nav className="flex space-x-4 text-sm sm:text-base">
                                                          <a href="#models" className="hover:text-pink-400">For Models</a>
                                                                      <a href="#affiliates" className="hover:text-pink-400">Affiliates</a>
                                                                                  <a href="#about" className="hover:text-pink-400">About</a>
                                                                                            </nav>
                                                                                                    </header>

                                                                                                            <section className="text-center py-16 sm:py-24 px-4 sm:px-6 flex-grow flex flex-col justify-center">
                                                                                                                      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">
                                                                                                                                  Get Paid Daily. Stream Smarter. <span className="text-pink-400">CamModelsDaily.com</span>
                                                                                                                                            </h2>
                                                                                                                                                      <p className="text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
                                                                                                                                                                  Join the #1 daily-pay cam network built for independent creators. 
                                                                                                                                                                              Keep more of your earnings, withdraw when you want, and stay in control.
                                                                                                                                                                                        </p>
                                                                                                                                                                                                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                                                                                                                                                                                              <a href="#apply" className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-600 shadow-lg text-white font-medium">
                                                                                                                                                                                                                            Apply as a Model
                                                                                                                                                                                                                                        </a>
                                                                                                                                                                                                                                                    <a href="#affiliates" className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 shadow-lg font-medium">
                                                                                                                                                                                                                                                                  Become an Affiliate
                                                                                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                </section>

                                                                                                                                                                                                                                                                                                        <footer className="p-4 sm:p-6 text-center text-gray-300 border-t border-gray-800 text-sm sm:text-base">
                                                                                                                                                                                                                                                                                                                  © {new Date().getFullYear()} CamModelsDaily.com. All rights reserved.
                                                                                                                                                                                                                                                                                                                          </footer>
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                      }