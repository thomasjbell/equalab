import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-16 bg-accent flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M16 7h.01"/>
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
              <path d="m20 7 2 .5-2 .5"/>
              <path d="M10 18v3"/>
              <path d="M14 17.75V21"/>
              <path d="M7 18a6 6 0 0 0 3.84-10.61"/>
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">EquaLab</h1>
        <p className="text-light text-xl mb-8">Comprehensive tools for scientists and engineers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <a 
          href="https://materials.equalab.uk" 
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-8 text-center group"
        >
          <div className="mb-4 w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/>
              <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/>
              <path d="M8 12h8"/>
              <path d="M12 16V8"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Materials</h2>
          <p className="text-secondary mb-4">Access our comprehensive database of material properties</p>
          <span className="inline-block px-4 py-2 bg-accent text-white rounded-full font-medium">Explore Materials</span>
        </a>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 font-medium rounded-bl-lg">
            Coming Soon
          </div>
          <div className="mb-4 w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/>
              <path d="M14 2v6h6"/>
              <path d="m9 18 3-3-3-3"/>
              <path d="m5 12-3 3 3 3"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Equations</h2>
          <p className="text-secondary mb-4">Calculate and visualize scientific and engineering equations</p>
          <span className="inline-block px-4 py-2 bg-gray-200 text-gray-500 rounded-full font-medium cursor-not-allowed">Coming Soon</span>
        </div>
      </div>

      <footer className="mt-16 text-light text-center">
        <p>&copy; {new Date().getFullYear()} EquaLab | Created by Thomas Bell</p>
      </footer>
    </div>
  );
};

export default LandingPage;