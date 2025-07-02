"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";
import {
  Bouquet1,
  Bouquet2,
  Bouquet3,
  Bouquet4,
  Bouquet5,
  Bouquet6,
  Bouquet7,
  Bouquet8,
  Bouquet9,
} from "@/data/bouquetsData";

const products = [
  {
    id: 1,
    title: "The Pasta Night Send",
    description: "Includes Graza olive oil + more.",
    price: "$113",
    image: Bouquet1,
    options: ["Regular", "Full"],
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    title: "The Birthday Send",
    description: "Includes four fresh-baked cookies.",
    price: "$107",
    image: Bouquet2,
    options: ["Regular", "Full"],
    bgColor: "bg-pink-100",
  },
  {
    id: 3,
    title: "The Fresh Set",
    description: "Includes our signature candle & hand cream.",
    price: "$74.50",
    image: Bouquet3,
    options: ["Mini", "Regular", "Full"],
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    title: "Tulips Collection",
    description: "FS Favorite spring blooms.",
    price: "$89",
    image: Bouquet4,
    options: ["Mini", "Regular", "Full"],
    bgColor: "bg-green-50",
  },
  {
    id: 5,
    title: "The Wellness Send",
    description: "Curated self-care essentials.",
    price: "$95",
    image: Bouquet5,
    options: ["Mini", "Regular", "Full"],
    bgColor: "bg-purple-50",
  },
  {
    id: 6,
    title: "The Pasta Night Send",
    description: "Includes Graza olive oil + more.",
    price: "$113",
    image: Bouquet6,
    options: ["Regular", "Full"],
    bgColor: "bg-amber-50",
  },
  {
    id: 7,
    title: "The Birthday Send",
    description: "Includes four fresh-baked cookies.",
    price: "$107",
    image: Bouquet7,
    options: ["Mini", "Regular", "Full"],
    bgColor: "bg-pink-100",
  },
  {
    id: 8,
    title: "The Fresh Set",
    description: "Includes our signature perfume, & hand cream.",
    price: "$74.50",
    image: Bouquet8,
    options: ["Regular", "Full"],
    bgColor: "bg-orange-50",
  },
  {
    id: 9,
    title: "Tulips Collection",
    description: "FS Favorite spring blooms.",
    price: "$89",
    image: Bouquet9,
    options: ["Mini", "Regular", "Full"],
    bgColor: "bg-green-50",
  },
];

function ShoppingCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSliderChange = (value: number[]) => {
    if (!api) return;
    const slideIndex = Math.floor((value[0] / 100) * (count - 1));
    api.scrollTo(slideIndex);
  };

  const handlePrevClick = () => {
    if (!api) return;
    api.scrollPrev();
  };

  const handleNextClick = () => {
    if (!api) return;
    api.scrollNext();
  };

  return (
    <div className="bg-[#faf7f0] w-full max-w-7xl mx-auto py-8 md:py-0 md:pt-[80px] md:pb-[75px] relative z-10">
      <Carousel setApi={setApi} className="max-w-5xl mx-auto">
        <CarouselContent className="pl-4">
          {products.map((product, index) => (
            <div key={index} id="carousel-slide" className="min-w-[36vw]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full relative"
                style={{ paddingBottom: "calc(100% * (100/56))" }}
              >
                <img
                  alt={product.title}
                  src={product.image}
                  className="absolute inset-0 w-full h-full object-cover border-[1px] border-black"
                />
              </motion.div>
              <div className="">
                <h3 className={`text-[16px] font-bold text-gray-900 mt-6 mb-2`}>
                  {product.title}
                </h3>
                <p className={`text-gray-900 italic mb-4 text-[12px]`}>
                  {product.description}
                </p>

                {/* Size Options */}
                <div className="flex mb-4">
                  {product.options.map((option, index) => (
                    <button
                      key={index}
                      className="px-[15px] border border-gray-300 text-[14px] italic hover:bg-gray-50 transition-colors duration-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  id="add-to-cart"
                  className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 text-white font-semibold py-3 px-1 flex items-center border-[1px] border-black justify-between transition-colors duration-200"
                >
                  <span className={`pl-[16px] text-[16px]`}>Add to cart</span>
                  <span className={` font-bold pr-[16px]`}>
                    {product.price}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Progress Indicators */}
      <div className="p-4 flex gap-2 mt-6 max-w-5xl mx-auto overflow-hidden">
        <Slider
          defaultValue={[0]}
          max={100}
          step={100 / (count - 1)}
          value={[current * (100 / (count - 1))]}
          onValueChange={handleSliderChange}
          className="flex-1"
        />
        <div className="cursor-pointer" onClick={handlePrevClick}>
          <IoIosArrowDropleft size={24} className="text-gray-800" />
        </div>
        <div className="cursor-pointer" onClick={handleNextClick}>
          <IoIosArrowDropright size={24} className="text-gray-800" />
        </div>
      </div>
    </div>
  );
}
export default ShoppingCarousel;
