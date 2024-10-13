
'use client'
import classNames from 'embla-carousel-class-names'
import autoPlay from 'embla-carousel-autoplay'
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    CarouselSlides,
} from 'keep-react'
import video from "../../assets/video.mp4"
import video2 from "../../assets/video2.mp4"
export const CarouselComponent = () => {
    const imgs = [
        video, video2, video
    ];
    return (
        <div data-aos="fade-up" className=' mt-[32px]'> 
            <Carousel options={{ loop: true }} plugins={[classNames(), autoPlay()]}>
                <CarouselSlides>
                    {imgs.map((img, slide) => (
                        <CarouselItem key={slide} className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
                            {/* <img className="rounded-xl w-full h-[200px] lg:h-[450px] object-cover" src={img} alt="Carousel Item" /> */}
                            <video controls muted autoPlay loop className="rounded-xl w-full h-[200px] lg:h-[450px] object-cover" src={img}></video>
                        </CarouselItem>
                    ))}
                </CarouselSlides>
                <CarouselControl>
                </CarouselControl>
            </Carousel>
        </div>
    )
}
