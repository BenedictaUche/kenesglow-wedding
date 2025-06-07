import { useState } from 'react';

const Registry = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('NGN');

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        {/* Elegant Header */}
        <div className='text-center mb-12'>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-auto mb-8'></div>
          <h1 className='text-4xl font-light text-slate-900 mb-6 tracking-[0.2em] uppercase'>
            Wedding Registry
          </h1>
          <div className='w-12 h-0.5 bg-slate-800 mx-auto'></div>
        </div>

        {/* Main Content Card */}
        <div className='backdrop-blur-sm bg-white/80 shadow-2xl border border-white/20 rounded-none p-12 mb-8'>
          {/* Message */}
          <div className='text-center mb-12'>
            <p className='text-lg text-slate-700 leading-relaxed font-light tracking-wide mb-6'>
              Your presence at our celebration is the most precious gift we could receive.
            </p>
            <p className='text-lg text-slate-700 leading-relaxed font-light tracking-wide mb-8'>
              Should you wish to honor us with a gift, we would be deeply grateful for your generosity.
            </p>
            <div className='flex items-center justify-center space-x-4 text-sm tracking-[0.3em] text-slate-600'>
              <span>THANK YOU</span>
              <div className='w-8 h-px bg-slate-400'></div>
              <span>MERCI</span>
            </div>
          </div>

          {/* Currency Toggle */}
          <div className='flex justify-center mb-10'>
            <div className='bg-slate-100 p-1 rounded-none flex'>
              <button
                onClick={() => setSelectedCurrency('NGN')}
                className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 ${
                  selectedCurrency === 'NGN'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NGN ACCOUNT
              </button>
              <button
                onClick={() => setSelectedCurrency('USD')}
                className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 ${
                  selectedCurrency === 'USD'
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ACCOUNT
              </button>
            </div>
          </div>

          {/* Bank Details */}
          <div className='bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 p-10 shadow-inner'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-light text-slate-900 tracking-[0.15em] uppercase mb-2'>
                Banking Details
              </h2>
              <div className='w-16 h-px bg-slate-800 mx-auto'></div>
            </div>

            <div className='space-y-6 max-w-md mx-auto'>
              <div className='flex justify-between items-center py-3 border-b border-slate-200/50'>
                <span className='text-slate-600 font-light tracking-wide'>Bank Name</span>
                <span className='text-slate-900 font-medium'>GT Bank</span>
              </div>

              <div className='flex justify-between items-center py-3 border-b border-slate-200/50'>
                <span className='text-slate-600 font-light tracking-wide'>Account Name</span>
                <span className='text-slate-900 font-medium'>Kenechukwu OBIEJESI</span>
              </div>

              <div className='flex justify-between items-center py-3 border-b border-slate-200/50'>
                <span className='text-slate-600 font-light tracking-wide'>Account Number</span>
                <span className='text-slate-900 font-medium font-mono'>0248391206</span>
              </div>

              <div className='flex justify-between items-center py-3'>
                <span className='text-slate-600 font-light tracking-wide'>Currency</span>
                <span className='text-slate-900 font-medium text-lg'>{selectedCurrency}</span>
              </div>
            </div>
          </div>
        </div>



        {/* Elegant Footer */}
        <div className='text-center mt-12'>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto'></div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
