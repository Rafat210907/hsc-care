import React, { useState, useEffect } from 'react'
import EmblaCarousel from '../components/carousel/EmblaCarousel'

import { BoxReveal } from "@/components/magicui/BoxReveal"
import { AuroraText } from "@/components/magicui/AuroraText"
import { Skeleton } from "@/components/ui/skeleton"

const SLIDES = Array.from(Array(5).keys())
const OPTIONS = { loop: true }

const CarouselPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='min-h-[calc(90vh-7rem)] overflow-hidden max-md:mt-20'>
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#4D4DFF] -rotate-[30deg] -z-10"></div>

      <div className="flex flex-col items-center justify-center space-y-3">
        {isLoading ? (
          <Skeleton className="h-10 w-[200px] sm:w-[240px] md:w-[300px] lg:w-[400px] mb-4" />
        ) : (
          <BoxReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mb-4 text-center">
              <AuroraText>Carousel</AuroraText>
            </h1>
          </BoxReveal>
        )}
{isLoading ? (
  <div className="w-full max-w-[1500px] px-4">
    <div className="w-full aspect-[3/1] rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full rounded-lg" />
    </div>
  </div>
) : (
  <EmblaCarousel slides={SLIDES} options={OPTIONS} />
)}
      </div>
    </main>
  )
}

export default CarouselPage
