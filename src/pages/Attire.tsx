const Attire = () => {
    return (
        <div className='font-abhaya mx-auto px-4 py-10 text-[#130c0e] flex flex-col items-center max-w-4xl'>
            <div>
                <h1 className='tracking-[4px] text-[34px] uppercase font-normal text-center'>Dress Code Inspiration</h1>
                <p className='text-center tracking-[1px] text-lg font-normal mb-4 '><a href="" className='underline '>Nigerian Glamour</a></p>
                <div className='text-lg tracking-[1px] font-normal'>
                    <div className='my-6'>
                        <p><em>It's a Nigerian wedding! Come in your best outfit—something glamorous, elegant, and fit for a celebration.</em></p>
                        <p><em>We can't wait to capture everlasting moments with you in your fabulous attire!</em></p>
                    </div>
                    <div>
                        <p>- Ladies, wear your most stunning and colorful outfits. Traditional Nigerian attire is encouraged, but any elegant ensemble is welcome.</p>
                        <p>- Gentlemen, come in a sharp formal suit or traditional Nigerian wear. Show up looking dapper!</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
                <img src='/images/outfit-men1.jpg' alt='Men Suit' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit1.jpg' alt='Dress Inspiration 1' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit2.jpg' alt='Dress Inspiration 2' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit3.jpg' alt='Dress Inspiration 3' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit4.jpg' alt='Dress Inspiration 4' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit5.jpg' alt='Dress Inspiration 5' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit6.jpg' alt='Dress Inspiration 6' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit7.jpg' alt='Dress Inspiration 7' className='w-[400px] h-[400px] object-cover' />
                <img src='/images/outfit-men2.jpg' alt='Men Suit' className='w-[400px] h-[400px] object-cover' />
            </div>
        </div>
    )
}

export default Attire;
