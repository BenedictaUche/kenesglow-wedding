
const TravelInfo = () => {
    return (
        <div className='font-abhaya mx-auto px-4 py-10 text-[#130c0e] flex flex-col items-center max-w-4xl'>
            {/* Heading */}
            <h1 className='tracking-[4px] text-[34px] uppercase font-normal text-center'>Travel Reminders</h1>

            <p className='text-center tracking-[1px] text-[18px] mb-6 max-w-lg'>
                Friendly reminder to check your passport's expiration date!{' '}
                <a href="#" className='font-semibold underline'>More Information here</a>
            </p>

            <div className='flex flex-col gap-12 w-full'>
                <div className='text-center'>
                    <h2 className='tracking-[4px] text-[30px] font-normal uppercase mb-4'>Murtala Muhammed Airport (MMA)</h2>
                    <div className='flex justify-center'>
                        <img src="/images/airport.webp" alt="Airport" className='w-full max-w-[550px]' />
                    </div>
                    <p className='tracking-[1px] text-[18px] mt-4'>We recommend flying into Murtala Muhammed Airport (MMA)</p>
                </div>

                <div className='text-center'>
                    <h2 className='tracking-[4px] text-[30px] font-normal uppercase mb-4'>Airport Transportation</h2>
                    <div className='flex justify-center'>
                        <img src="/images/transport.webp" alt="Airport transport" className='w-full max-w-[550px]' />
                    </div>
                    <p className='tracking-[1px] text-[18px] mt-4'>We recommend ordering a taxi service on Uber, Bolt, or InDrive.</p>
                </div>
            </div>
        </div>
    );
}

export default TravelInfo;
