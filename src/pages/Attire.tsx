const Attire = () => {
    return (
        <div className='font-abhaya mx-auto px-4 py-10 text-[#130c0e] flex flex-col items-center max-w-4xl'>
            <div>
                <h1 className='tracking-[4px] text-[34px] uppercase font-normal text-center'>Dress Code Inspiration</h1>
                <div className='text-lg tracking-[1px] font-normal'>
                    <div className='my-6'>
                        <p><em>It's a Nigerian wedding! Come in your best outfit—something glamorous, elegant, and fit for a celebration.</em></p>
                        <p><em>We can't wait to capture everlasting moments with you in your fabulous attire!</em></p>
                    </div>
                    <div>
                        <p>- Ladies, wear long elegant dresses or elevated cocktail dresses, but any elegant ensemble is welcome.</p>
                        <p>- Gentlemen, wear a formal dark suit with a tie. Show up looking dapper!</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
                <img src='/images/jordan-suit.jpg' alt='Men Suit' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/dress1.jpg' alt='Dress Inspiration 1' className='w-[400px] h-[400px] object-cover' />
                <img src="/images/outfit-men4.jpg" alt="Men suit" className='w-[400px] h-[400px] object-cover' />
                <img src='/images/dress2.jpg' alt='Dress Inspiration 2' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/dress3.jpg' alt='Dress Inspiration 3' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/dress4.jpg' alt='Dress Inspiration 4' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/dress5.jpg' alt='Dress Inspiration 5' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/dress6.jpg' alt='Dress Inspiration 6' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit-men3.jpg' alt='Men Suit' className='w-[400px] h-[400px] object-cover' />
            </div>
        </div>
    )
}

export default Attire;
