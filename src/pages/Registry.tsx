import React from 'react';
import { Button } from '@/components/ui/button';

const Registry = () => {
  return (
    <div className='font-abhaya mx-auto px-4 py-10 text-[#130c0e] flex flex-col items-center max-w-[700px] text-center'>
      {/* Registry Message */}
      <p className='text-lg tracking-wide font-normal mb-8'>
        Your presence is the greatest gift, but we'd be grateful for anything from our registry to celebrate our special day.
        <br />
        <strong>THANK YOU / GRACIAS!!</strong>
      </p>

      {/* Bank Account Details */}
      <div className='bg-[#f9f9f9] shadow-md rounded-lg p-6 w-full max-w-md text-left'>
        <h2 className='text-xl font-semibold mb-2 uppercase'>Bank Details</h2>
        <p className='text-lg'><strong>Bank Name:</strong> XYZ Bank</p>
        <p className='text-lg'><strong>Account Name:</strong> John & Kene Wedding</p>
        <p className='text-lg'><strong>Account Number:</strong> 1234567890</p>
      </div>

      {/* External Registry Link */}
      <div className='mt-6'>
        <Button asChild className='bg-black text-white px-6 py-6 uppercase rounded-none text-lg font-[18px] tracking-[2px] hover:bg-gray-800 transition cursor-pointer'>
          <a href="https://www.example.com/registry" target="_blank" rel="noopener noreferrer">
            Visit Our Registry
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Registry;
