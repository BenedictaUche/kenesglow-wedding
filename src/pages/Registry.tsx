import { Button } from '@/components/ui/button';
import { useState, useEffect, SetStateAction } from 'react';

const Registry = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = (text: string, field: SetStateAction<string>) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 relative overflow-hidden'>
      {/* Subtle background pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-br from-stone-300 to-stone-500 rounded-full blur-3xl'></div>
      </div>

      <div className={`relative z-10 max-w-2xl mx-auto px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Elegant Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8'></div>
            <h1 className='text-5xl font-light tracking-[0.2em] text-stone-800 mb-6'>
              WEDDING REGISTRY
            </h1>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mt-8'></div>
          </div>
        </div>

        {/* Refined Message */}
        <div className='text-center mb-20'>
          <p className='text-xl font-light leading-relaxed text-stone-700 tracking-wide max-w-xl mx-auto'>
            Your gracious presence at our celebration is the most treasured gift we could receive.
          </p>
          <p className='text-lg font-light text-stone-600 mt-6 tracking-wide'>
            Should you wish to honor us further, we have curated a selection of meaningful pieces.
          </p>
          <div className='mt-8 text-sm font-light tracking-[0.3em] text-amber-700'>
            WITH DEEPEST GRATITUDE
          </div>
        </div>

        {/* Premium Bank Details Card */}
        <div className='relative group mb-16'>
          <div className='absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500'></div>
          <div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-12 shadow-2xl border border-white/50'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-light tracking-[0.15em] text-stone-800 mb-2'>
                BANK PARTICULARS
              </h2>
              <div className='w-16 h-px bg-amber-600 mx-auto'></div>
            </div>

            <div className='space-y-6'>
              <div className='group/item'>
                <div className='flex justify-between items-center p-4 rounded-xl hover:bg-stone-50/50 transition-all duration-300 cursor-pointer'
                     onClick={() => copyToClipboard('XYZ Private Bank', 'bank')}>
                  <div>
                    <div className='text-sm font-light tracking-widest text-stone-500 mb-1'>INSTITUTION</div>
                    <div className='text-lg font-light text-stone-800'>XYZ Private Bank</div>
                  </div>
                  <div className='text-xs text-stone-400 opacity-0 group-hover/item:opacity-100 transition-opacity'>
                    {copied === 'bank' ? 'COPIED' : 'CLICK TO COPY'}
                  </div>
                </div>
              </div>

              <div className='group/item'>
                <div className='flex justify-between items-center p-4 rounded-xl hover:bg-stone-50/50 transition-all duration-300 cursor-pointer'
                     onClick={() => copyToClipboard("Ugo & Kene's Wedding", 'name')}>
                  <div>
                    <div className='text-sm font-light tracking-widest text-stone-500 mb-1'>ACCOUNT NAME</div>
                    <div className='text-lg font-light text-stone-800'>Ugo & Kene's Wedding</div>
                  </div>
                  <div className='text-xs text-stone-400 opacity-0 group-hover/item:opacity-100 transition-opacity'>
                    {copied === 'name' ? 'COPIED' : 'CLICK TO COPY'}
                  </div>
                </div>
              </div>

              <div className='group/item'>
                <div className='flex justify-between items-center p-4 rounded-xl hover:bg-stone-50/50 transition-all duration-300 cursor-pointer'
                     onClick={() => copyToClipboard('1234567890', 'number')}>
                  <div>
                    <div className='text-sm font-light tracking-widest text-stone-500 mb-1'>ACCOUNT NUMBER</div>
                    <div className='text-xl font-light tracking-[0.2em] text-stone-800'>1234 5678 90</div>
                  </div>
                  <div className='text-xs text-stone-400 opacity-0 group-hover/item:opacity-100 transition-opacity'>
                    {copied === 'number' ? 'COPIED' : 'CLICK TO COPY'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sophisticated Registry Button */}
        <div className='text-center'>
          <div className='relative inline-block group'>
            <div className='absolute -inset-2 bg-gradient-to-r from-stone-800 via-black to-stone-800 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500'></div>
            <Button asChild className='relative bg-black hover:bg-stone-900 text-white px-16 py-6 rounded-xl text-sm font-light tracking-[0.3em] transition-all duration-300 shadow-2xl border-0 hover:scale-105'>
              <a href="https://www.example.com/registry" target="_blank" rel="noopener noreferrer">
                <span>CURATED COLLECTION</span>
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
              </a>
            </Button>
          </div>

          <p className='text-xs font-light text-stone-500 mt-6 tracking-widest'>
            DISCOVER OUR SELECTED PIECES
          </p>
        </div>

        {/* Elegant Footer Accent */}
        <div className='text-center mt-20'>
          <div className='inline-flex items-center space-x-4'>
            <div className='w-8 h-px bg-gradient-to-r from-transparent to-amber-600'></div>
            <div className='w-2 h-2 bg-amber-600 rounded-full'></div>
            <div className='w-8 h-px bg-gradient-to-l from-transparent to-amber-600'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
