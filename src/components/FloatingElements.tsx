import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full animate-float-delayed opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-100 rounded-full animate-float-slow opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-orange-100 rounded-full animate-float opacity-20"></div>
      
      {/* Floating Squares */}
      <div className="absolute top-60 left-1/4 w-8 h-8 bg-blue-200 rotate-45 animate-float-delayed opacity-20"></div>
      <div className="absolute top-80 right-1/3 w-6 h-6 bg-purple-200 rotate-45 animate-float-slow opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse-slow opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-pulse-slow opacity-10"></div>
    </div>
  );
};

export default FloatingElements;