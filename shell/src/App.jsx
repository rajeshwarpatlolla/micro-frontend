import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineCube, HiOutlinePuzzle, HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import appsConfig from './config/apps.json';

// Lazy load micro frontends
const App1 = lazy(() => import('app1/App'));
const App2 = lazy(() => import('app2/App'));

const getAppIcon = (id) => {
  if (id === 'app1') return <HiOutlineCube className='w-7 h-7 text-blue-500' />;
  if (id === 'app2') return <HiOutlinePuzzle className='w-7 h-7 text-pink-500' />;
  return <HiOutlineQuestionMarkCircle className='w-7 h-7 text-gray-400 mr-3 inline-block align-middle' />;
};

const AppSwitcher = ({ apps, onAppSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer'
        aria-label='Open application switcher'
      >
        <HiOutlineViewGrid className='w-7 h-7 text-white cursor-pointer transition-transform hover:scale-110' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in'>
          <div className='p-5'>
            <h3 className='text-lg font-semibold mb-4 text-gray-800 text-center'>Applications</h3>
            <div className='grid grid-cols-2 gap-4'>
              {apps.map((app) => (
                <div
                  key={app.id}
                  onClick={() => {
                    onAppSelect(app);
                    setIsOpen(false);
                  }}
                  className='flex flex-col items-center justify-center p-4 border border-gray-200 rounded-xl cursor-pointer bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group'
                >
                  <div className='mb-2 m-auto'>{getAppIcon(app.id)}</div>
                  <span className='text-sm font-semibold text-gray-800 group-hover:text-blue-600 text-center'>{app.name.replace('Application ', 'App ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ apps, onAppSelect }) => {
  const navigate = useNavigate();
  return (
    <header className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50 transition-all'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <span
            className='text-2xl font-bold text-white drop-shadow-lg transition-transform transform hover:scale-105 cursor-pointer'
            onClick={() => navigate('/')}
            tabIndex={0}
            role='button'
            aria-label='Go to home page'
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate('/');
            }}
          >
            {appsConfig.branding.name}
          </span>
          <AppSwitcher apps={apps} onAppSelect={onAppSelect} />
        </div>
      </div>
    </header>
  );
};

function App() {
  const handleAppSelect = (app) => {
    window.location.href = app.path;
  };

  return (
    <Router>
      <div className='min-h-screen bg-gray-50'>
        <Routes>
          <Route path='*' element={<Header apps={appsConfig.apps} onAppSelect={handleAppSelect} />} />
        </Routes>
        <main className='max-w-7xl mx-auto py-6'>
          <Suspense fallback={<div className='flex justify-center items-center h-64'>Loading...</div>}>
            <Routes>
              <Route
                path='/'
                element={
                  <div className='flex flex-col items-center'>
                    <h2 className='text-2xl font-bold mb-4'>Welcome to Micro Frontend Platform</h2>
                    <p className='text-gray-600 mb-8'>Select an application below to get started</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl'>
                      {appsConfig.apps.map((app) => (
                        <div
                          key={app.id}
                          onClick={() => handleAppSelect(app)}
                          className='cursor-pointer bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col items-start group'
                        >
                          <div className='flex items-center mb-3'>
                            {getAppIcon(app.id)}
                            <h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>{app.name}</h3>
                          </div>
                          <p className='text-gray-500'>{app.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
              <Route path='/app1/*' element={<App1 />} />
              <Route path='/app2/*' element={<App2 />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
