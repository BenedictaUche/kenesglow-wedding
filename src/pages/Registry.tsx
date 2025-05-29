
import { useState, useEffect, SetStateAction } from 'react';
import { Gift, MessageCircle, Phone, Mail,Heart, Copy, Check } from 'lucide-react';

const Registry = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState('');
  type GiftCategory = 'home' | 'kitchen' | 'experiences' | 'all';
  const [selectedCategory, setSelectedCategory] = useState<GiftCategory>('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = (text: string, field: SetStateAction<string>) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const giftCategories = {
    home: [
      { item: "Premium Blender Set", details: "Vitamix or similar high-performance blender", price: "₦85,000 - ₦120,000", priority: "high" },
      { item: "Fine China Dinnerware", details: "12-piece bone china set with serving pieces", price: "₦45,000 - ₦80,000", priority: "high" },
      { item: "Egyptian Cotton Bedding", details: "King size luxury sheet set with pillowcases", price: "₦35,000 - ₦60,000", priority: "medium" },
      { item: "Crystal Glassware Set", details: "Wine glasses, champagne flutes, and tumblers", price: "₦25,000 - ₦45,000", priority: "medium" },
      { item: "Smart Coffee Machine", details: "Programmable espresso/coffee maker", price: "₦75,000 - ₦100,000", priority: "low" }
    ],
    kitchen: [
      { item: "Stand Mixer", details: "KitchenAid or similar professional mixer", price: "₦95,000 - ₦130,000", priority: "high" },
      { item: "Cookware Set", details: "Non-stick premium pots and pans collection", price: "₦40,000 - ₦70,000", priority: "high" },
      { item: "Air Fryer", details: "Large capacity digital air fryer", price: "₦35,000 - ₦55,000", priority: "medium" },
      { item: "Food Processor", details: "Multi-function food preparation system", price: "₦45,000 - ₦65,000", priority: "medium" }
    ],
    experiences: [
      { item: "Honeymoon Fund", details: "Contribution toward our romantic getaway", price: "Any amount welcome", priority: "high" },
      { item: "Date Night Fund", details: "Monthly romantic dinner experiences", price: "₦15,000 - ₦30,000", priority: "medium" },
      { item: "Home Spa Package", details: "Luxury spa treatments for two", price: "₦25,000 - ₦50,000", priority: "low" }
    ]
  };

  const getAllGifts = () => {
    return Object.values(giftCategories).flat();
  };

  const getFilteredGifts = () => {
    return selectedCategory === 'all' ? getAllGifts() : giftCategories[selectedCategory as keyof typeof giftCategories] || [];
  };

  const getPriorityColor = (priority: any) => {
    switch (priority) {
      case 'high': return 'text-amber-600 bg-amber-50';
      case 'medium': return 'text-blue-600 bg-blue-50';
      case 'low': return 'text-stone-600 bg-stone-50';
      default: return 'text-stone-600 bg-stone-50';
    }
  };

  const contactMethods = [
    {
      type: "WhatsApp",
      icon: MessageCircle,
      text: "Message us directly",
      action: () => window.open("https://wa.me/2348012345678?text=Hello!%20I%20would%20like%20to%20discuss%20a%20wedding%20gift%20for%20your%20special%20day.", "_blank"),
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      type: "Call",
      icon: Phone,
      text: "Speak with us",
      action: () => window.open("tel:+2348012345678"),
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      type: "Email",
      icon: Mail,
      text: "Send us an email",
      action: () => window.open("mailto:ugokene.wedding@gmail.com?subject=Wedding%20Gift%20Inquiry"),
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-br from-stone-300 to-stone-500 rounded-full blur-3xl'></div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-6 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-block'>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8'></div>
            <h1 className='text-5xl font-light tracking-[0.2em] text-stone-800 mb-4'>
              WEDDING REGISTRY
            </h1>
            <p className='text-xl font-light text-stone-600 tracking-wide max-w-2xl mx-auto mb-6'>
              Your presence is the greatest gift we could receive. Should you wish to celebrate us further,
              we've curated these meaningful pieces for our new journey together.
            </p>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mt-8'></div>
          </div>
        </div>

        {/* Gift Categories Filter */}
        <div className='flex justify-center mb-12'>
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/50'>
            <div className='flex space-x-2'>
              {[
                { key: 'all', label: 'All Items' },
                { key: 'home', label: 'Home & Living' },
                { key: 'kitchen', label: 'Kitchen' },
                { key: 'experiences', label: 'Experiences' }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as GiftCategory)}
                  className={`px-6 py-3 rounded-xl text-sm font-light tracking-wide transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-stone-800 text-white shadow-lg'
                      : 'text-stone-600 hover:bg-stone-100/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gift Items Grid */}
        <div className='grid md:grid-cols-2 gap-6 mb-16'>
          {getFilteredGifts().map((gift: any, index: any) => (
            <div key={index} className='group relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-amber-600/20 via-amber-400/20 to-amber-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500'></div>
              <div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/50 h-full'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex-1'>
                    <h3 className='text-xl font-light text-stone-800 mb-2 tracking-wide'>{gift.item}</h3>
                    <p className='text-stone-600 text-sm leading-relaxed'>{gift.details}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-light tracking-wider ${getPriorityColor(gift.priority)}`}>
                    {gift.priority === 'high' ? 'PRIORITY' : gift.priority.toUpperCase()}
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='text-lg font-light text-stone-700 tracking-wide'>{gift.price}</div>
                  <Gift className='w-5 h-5 text-amber-600' />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Give Section */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-light tracking-[0.15em] text-stone-800 mb-8'>HOW TO GIVE</h2>
          <div className='w-16 h-px bg-amber-600 mx-auto mb-12'></div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className='group'>
                  <div className='relative'>
                    <div className='absolute -inset-2 bg-gradient-to-r from-stone-800/20 via-black/20 to-stone-800/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500'></div>
                    <button
                      onClick={method.action}
                      className={`relative w-full ${method.color} text-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      <IconComponent className='w-8 h-8 mx-auto mb-4' />
                      <h3 className='text-lg font-light tracking-wide mb-2'>{method.type}</h3>
                      <p className='text-sm opacity-90'>{method.text}</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='bg-stone-50/50 rounded-2xl p-8 max-w-2xl mx-auto'>
            <p className='text-stone-700 text-lg font-light leading-relaxed'>
              <strong>Personal Touch:</strong> We believe the most meaningful gifts come with a personal connection.
              Reach out to us directly to discuss your gift choice, coordinate delivery, or contribute to our future together.
              We'll ensure every gesture is acknowledged with heartfelt gratitude.
            </p>
          </div>
        </div>

        {/* Bank Details - Elegant Version */}
        <div className='relative group mb-16'>
          <div className='absolute -inset-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500'></div>
          <div className='relative bg-white/90 backdrop-blur-xl rounded-2xl p-12 shadow-2xl border border-white/50'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-light tracking-[0.15em] text-stone-800 mb-2'>
                DIRECT CONTRIBUTION
              </h2>
              <div className='w-16 h-px bg-amber-600 mx-auto mb-4'></div>
              <p className='text-stone-600 font-light'>For monetary gifts and honeymoon fund contributions</p>
            </div>

            <div className='space-y-6 max-w-md mx-auto'>
              <div className='group/item'>
                <div className='flex justify-between items-center p-4 rounded-xl hover:bg-stone-50/50 transition-all duration-300 cursor-pointer'
                     onClick={() => copyToClipboard('XYZ Bank', 'bank')}>
                  <div>
                    <div className='text-sm font-light tracking-widest text-stone-500 mb-1'>BANK NAME</div>
                    <div className='text-lg font-light text-stone-800'>XYZ Bank</div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    {copied === 'bank' ? <Check className='w-4 h-4 text-green-600' /> : <Copy className='w-4 h-4 text-stone-400' />}
                    <div className='text-xs text-stone-400 opacity-0 group-hover/item:opacity-100 transition-opacity'>
                      {copied === 'bank' ? 'COPIED' : 'COPY'}
                    </div>
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
                  <div className='flex items-center space-x-2'>
                    {copied === 'name' ? <Check className='w-4 h-4 text-green-600' /> : <Copy className='w-4 h-4 text-stone-400' />}
                    <div className='text-xs text-stone-400 opacity-0 group-hover/item:opacity-100 transition-opacity'>
                      {copied === 'name' ? 'COPIED' : 'COPY'}
                    </div>
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
                  <div className='flex items-center space-x-2'>
                    {copied === 'number' ? <Check className='w-4 h-4 text-green-600' /> : <Copy className='w-4 h-4 text-stone-400' />}
                    <div className='text-xs text-stone-400 opacity-0 group-hover/item:opacity-100 transition-opacity'>
                      {copied === 'number' ? 'COPIED' : 'COPY'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-center mt-8 text-sm font-light text-stone-500 tracking-wide'>
              Please include your name in the transfer reference
            </div>
          </div>
        </div>

        {/* Gratitude Section */}
        <div className='text-center'>
          <div className='inline-flex items-center space-x-4 mb-8'>
            <div className='w-8 h-px bg-gradient-to-r from-transparent to-amber-600'></div>
            <Heart className='w-6 h-6 text-amber-600' />
            <div className='w-8 h-px bg-gradient-to-l from-transparent to-amber-600'></div>
          </div>

          <p className='text-xl font-light text-stone-700 tracking-wide max-w-xl mx-auto mb-6'>
            Every gift, every gesture, every moment of your time is treasured beyond measure.
          </p>

          <div className='text-sm font-light tracking-[0.3em] text-amber-700'>
            WITH ENDLESS LOVE & GRATITUDE
          </div>
          <div className='text-xs font-light tracking-[0.2em] text-stone-500 mt-2'>
            UGO & KENE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
