import {     PurpleFlower,
    NeonFlower,
    HeroImage1,
    HeroImage1Text,
    HeroImage1Mobile,
    HeroImage2,} from '@/data/heroImageData'

function Hero() {
  return (
    <div className='relative bg-[#faf7f0]'>
      {/* Mobile Layout - Single Image */}
      <div className='block md:hidden relative'>
        <div className='hidden relative xxs:block xxs:h-[510px] xs:h-[600px] overflow-hidden -mt-[60px]'>
          <img
            src={HeroImage1}
            alt='Hero Image 1'
            className='object-cover w-full h-full'
            id='hero-left'
          />
        </div>
        <div className='relative h-[540px] xxs:hidden overflow-hidden -mt-[60px]'>
          <img
            src={HeroImage1Mobile}
            alt='Hero Mobile Image'
            className='object-cover w-full h-full '
            id='hero-mobile-image'
          />
        </div>

        <div className='absolute top-8 xs:top-6 right-12 z-[100]'>
          <div className='relative'>
            <img
              className='w-28 h-28 xs:w-36 xs:h-36 animate-spin-slow'
              src={NeonFlower}
              alt='Neon Flower'
              id='neon-flower-mobile'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span
                id='send-flowers-text'
                className={`text-[15px] xs:text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}
              >
                Send
                <br />
                Flowers
              </span>
            </div>
          </div>
        </div>

        <div className='absolute bottom-[-40px] left-12 z-[100]'>
          <div className='relative'>
            <img
              className='w-28 h-28 xs:w-36 xs:h-36 animate-spin-reverse'
              src={PurpleFlower}
              alt='Purple Flower'
              id='purple-flower-mobile'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span
                id='the-birthday-send-text'
                className={` text-[15px] xs:text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}
              >
                The
                <br />
                Birthday
                <br />
                Send
              </span>
            </div>
          </div>
        </div>

        <div className='hidden relative h-[600px] overflow-hidden'>
          <img
            src={HeroImage2}
            alt='Hero Image 2'
            className='object-cover w-full h-full'
            id='hero-right'
          />
          <div className='absolute top-6 left-12 z-[100]'>
            <div className='relative'>
              <img
                className='xs:w-36 xs:h-36 animate-spin-reverse'
                src={PurpleFlower}
                alt='Purple Flower'
                id='purple-flower-mobile'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span
                  id='the-birthday-send-text'
                  className={` text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}
                >
                  The
                  <br />
                  Birthday
                  <br />
                  Send
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout - Two Images Side by Side */}
      <div className='hidden md:block lg:hidden relative'>
        <div className='flex h-[430px] overflow-visible'>
          {/* Left Image */}
          <div className='flex-1 relative overflow-visible'>
            <img
              src={HeroImage1}
              alt='Hero Image 1, tablet'
              className='object-cover w-full h-full'
              id='hero-left-tablet'
            />
            <div className='absolute bottom-[-72px] left-12 z-[100]'>
              <div className='relative'>
                <img
                  className='w-36 h-36 animate-spin-slow'
                  src={NeonFlower}
                  alt='Neon Flower'
                  id='neon-flower-mobile'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span
                    id='send-flowers-text'
                    className={` text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}
                  >
                    Send
                    <br />
                    Flowers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='flex-1 relative overflow-hidden'>
            <img
              src={HeroImage2}
              alt='Hero Image 2, tablet'
              id='hero-right-tablet'
              className='object-cover h-full w-full'
            />
            <div className='absolute top-2 left-12 z-[100]'>
              <div className='relative'>
                <img
                  className='w-36 h-36 animate-spin-reverse'
                  src={PurpleFlower}
                  alt='Purple Flower'
                  id='purple-flower-tablet'
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <span
                    id='the-birthday-send-text'
                    className={` text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}
                  >
                    The
                    <br />
                    Birthday
                    <br />
                    Send
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two Images Side by Side */}
      <div className='hidden lg:block relative overflow-visible'>
        <div className='flex h-[600px] overflow-visible'>
          {/* Left Image */}
          <div className='flex-1 relative overflow-visible'>
            <img
              src={HeroImage1}
              alt='Hero Image 1, desktop'
              className='object-cover w-full h-full'
              id='hero-left-desktop'
            />
            <div className='absolute bottom-[-70px] right-24 z-[100]'>
              <div className='relative'>
                <img
                  className='w-36 h-36 animate-spin-slow'
                  src={NeonFlower}
                  alt='Neon Flower'
                  id='neon-flower-mobile'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span
                    id='send-flowers-text'
                    className={`text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[15deg]`}
                  >
                    Send
                    <br />
                    Flowers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='flex-1 relative overflow-visible'>
            <img
              src={HeroImage2}
              alt='Hero Image 2, desktop'
              id='hero-right-desktop'
              className='object-cover h-full w-full'
            />
            <div className='absolute top-[-36px] left-12 z-[9999]'>
              <div className='relative'>
                <img
                  className='w-36 h-36 animate-spin-reverse'
                  src={PurpleFlower}
                  alt='Purple Flower'
                  id='purple-flower-desktop'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span
                    id='the-birthday-send-text'
                    className={` text-[17px] font-medium text-black text-center leading-tight italic transform -rotate-[-15deg]`}
                  >
                    The
                    <br />
                    Birthday
                    <br />
                    Send
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
