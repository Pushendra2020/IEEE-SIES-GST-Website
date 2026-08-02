import { InfiniteSlider } from '../components/ui/infinite-slider'
import { ProgressiveBlur } from '../components/ui/progressive-blur'
import IEEE1 from "../assets/IEEE1.webp"
import IEEE2 from "../assets/IEEE2.webp"
import IEEE3 from "../assets/IEEE3.webp"
import IEEE4 from "../assets/IEEE4.webp"
import IEEE5 from "../assets/IEEE5.webp"
//import IEEE6 from "../assets/IEEE6.webp"

export default function LogoCloud() {
    return (
        <section className="overflow-hidden py-10 bg-transparent">
            <div className="group relative mx-auto max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl px-2 sm:px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="relative py-6 px-2 sm:py-8 sm:px-10 border-2 sm:border-4 border-indigo-500 border-solid rounded-lg bg-gradient-to-r from-cyan-900 via-black to-pink-900 w-full shadow-xl">
                        <InfiniteSlider speedOnHover={20} speed={40} gap={32}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-32 sm:h-40 md:h-64 w-auto dark:invert"
                                    src={IEEE1}
                                    alt="Nvidia Logo"
                                    height="128"
                                    width="auto" />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-32 sm:h-40 md:h-64 w-auto dark:invert"
                                    src={IEEE2}
                                    alt="Column Logo"
                                    height="112"
                                    width="auto" />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-32 sm:h-40 md:h-64 w-auto dark:invert"
                                    src={IEEE3}
                                    alt="GitHub Logo"
                                    height="112"
                                    width="auto" />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-32 sm:h-40 md:h-64 w-auto dark:invert"
                                    src={IEEE4}
                                    alt="Nike Logo"
                                    height="128"
                                    width="auto" />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-32 sm:h-40 md:h-64 w-auto dark:invert"
                                    src={IEEE5}
                                    alt="Lemon Squeezy Logo"
                                    height="128"
                                    width="auto" />
                            </div>
                            {/* <div className="flex">
                                <img
                                    className="mx-auto h-32 sm:h-40 md:h-64 w-auto dark:invert"
                                    src={IEEE6}
                                    alt="Laravel Logo"
                                    height="112"
                                    width="auto" />
                            </div> */}
                        </InfiniteSlider>
                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-10 sm:w-20 pointer-events-none"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-10 sm:w-20 pointer-events-none"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-20"
                            direction="left"
                            blurIntensity={1} />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-20"
                            direction="right"
                            blurIntensity={1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
