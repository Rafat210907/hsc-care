import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton"; // adjust if needed
import { RippleButton } from "@/components/magicui/RippleButton";
import batchImage from "./../../assets/images/batch.jpg"; // adjust path
import batchImage2 from "./../../assets/images/batch-2.jpg"; // adjust path
import gP from "./../../assets/images/gp.jpg"; // adjust path
import gP2 from "./../../assets/images/gp2.JPG"; 
import batch23 from "./../../assets/images/hsc-care-hsc-23-batch.jpg"; // adjust path
import prize from "./../../assets/images/prize.png"; // adjust path

const EmblaCarousel = ({ options }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: false }),
  ]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000); // simulate loading
    return () => clearTimeout(timeout);
  }, []);

  // Single image slide
  const slides = [batchImage , batchImage2 ,gP ,gP2 , batch23,prize  ]; // ← from public folder

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4">
      <div
        className="overflow-hidden w-full sm:aspect-[5/2] md:aspect-[16/7] rounded-lg"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {isLoading
            ? [1].map((_, i) => (
                <div key={i} className="flex-none w-full p-2 h-full">
                  <Skeleton className="w-full h-full rounded-lg" />
                </div>
              ))
            : slides.map((src, index) => (
                <div key={index} className="flex-none w-full p-2 h-full">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}
        </div>
      </div>

      {!isLoading && (
        <div className="mt-4 flex justify-center space-x-4">
          <RippleButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            rippleColor="rgba(0, 0, 0, 0.2)"
            className="w-12 h-12 rounded-full border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 flex items-center justify-center
              disabled:text-gray-300 disabled:border-gray-200 dark:disabled:text-gray-700 dark:disabled:border-gray-700
              hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5" viewBox="0 0 532 532" fill="currentColor">
              <path d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" />
            </svg>
          </RippleButton>

          <RippleButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            rippleColor="rgba(0, 0, 0, 0.2)"
            className="w-12 h-12 rounded-full border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 flex items-center justify-center
              disabled:text-gray-300 disabled:border-gray-200 dark:disabled:text-gray-700 dark:disabled:border-gray-700
              hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5" viewBox="0 0 532 532" fill="currentColor">
              <path d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z" />
            </svg>
          </RippleButton>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
