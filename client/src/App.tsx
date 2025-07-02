import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ShoppingCarousel from "./components/ShoppingCarousel";


function App() {
  return (
    <>
      <Banner />

      <div className='relative md:hidden'>
        <Hero />
        <div className='absolute top-0 left-0 w-full z-50'>
          <Nav />
        </div>
      </div>

      <div className='hidden md:block'>
        <Nav />
        <Hero />
      </div>

      <div className='bg-[#faf7f0]'>
        <ShoppingCarousel />
      </div>
    </>
  );
}

export default App;
