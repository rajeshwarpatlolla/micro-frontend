import React, { useState } from 'react';

function App() {
  return (
    <div className=''>
      <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-4 text-center drop-shadow-md'>Welcome to Application Two</h1>
      <p className='text-gray-700 text-lg mb-8 text-center'>This micro frontend is designed for seamless integration and a delightful user experience. Explore the features and enjoy the modern UI!</p>
      <div className='bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl p-6 shadow-inner'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2 text-center'>Key Highlights</h2>
        <ul className='text-gray-700 text-base space-y-2 list-disc list-inside'>
          <li>Modular and independent architecture</li>
          <li>Effortless integration with the platform shell</li>
          <li>Modern, responsive design with Tailwind CSS</li>
          <li>Easy to extend and maintain</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
