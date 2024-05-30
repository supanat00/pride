import { useEffect, useState, useRef } from 'react';
import { waitingLogo, Mirror1, Mirror2 } from "../../utils"

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function WaitingRing() {
    const [count, setCount] = useState(0);
    const [played, setPlayed] = useState(false);
    const [started, setStarted] = useState(false);
    const [reverse, setReverse] = useState(false);
    const sequenceRef = useRef(null);

    useEffect(() => {
        let intervalId;

        if (!started) {
            setCount(0);
        } else {
            if (!played) {
                intervalId = setInterval(() => {
                    if (count < 51) {
                        setCount((prevCount) => prevCount + 1);
                    } else {
                        setCount(51);
                        setPlayed(false);
                        clearInterval(intervalId);
                    }
                }, 120);
            } else if (reverse) {
                intervalId = setInterval(() => {
                    if (count > 0) {
                        setCount((prevCount) => prevCount - 1);
                    } else {
                        setCount(0);
                        setReverse(false);
                        clearInterval(intervalId);
                    }
                }, 120);
            }
        }

        return () => clearInterval(intervalId);
    }, [count, played, reverse, started]);

    useGSAP(() => {
        const handleSequenceAnimation = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.waiting-ring',
                    start: '80% 60%',
                    end: '80% 60%',
                    // markers: true,
                    toggleActions: "play none none reset",

                    onEnter: () => {
                        console.log('onEnter');
                        setPlayed(false);
                        setStarted(true);
                    },

                    onEnterBack: () => {
                        console.log('onEnterBack');
                        setPlayed(true);
                        setReverse(true);
                    },
                },
            });

            tl.to(sequenceRef.current, {});
        };

        // Waiting Logo    
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".waitingLogo2",
                start: "-60% 15%",
                end: "-60% 15%",
                scrub: 5,
                pin: false,
                pinSpacing: false,
                // markers: true,
                toggleActions: "play none none none",
            },
        });

        tl.from('.waitingLogo2', { opacity: 0, y: 30, duration: 0.8 });
        tl.from('.wait-text', { opacity: 0, y: 30, duration: 0.8 });
        tl.from('.album-mirror', { opacity: 0, y: 30, duration: 0.8, });
        tl.from('.waiting-ring', { opacity: 0, y: 30, duration: 0.8 });

        // Waiting Logo    
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".album-mirror",
                start: "-20% 15%",
                end: "-20% 15%",
                pin: false,
                pinSpacing: false,
                // markers: true,
                toggleActions: "play none none play",
                onEnter: () => {
                    tl2.to('.Mirror1', { x: 340, rotate: 16 });
                },
                onEnterBack: () => {
                    tl2.to('.Mirror1', { x: 0, rotate: 0, });


                },
            },
        });

        handleSequenceAnimation();
    }, []);

    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <div className='relative w-full' >
                {/* Show Hand */}
                <div className="relative flex flex-col w-full justify-center items-center">
                    {/* Texts */}
                    <div className="flex relative w-full justify-center items-center">
                        <img src={waitingLogo} alt="waitingLogo" className="waitingLogo2 w-44" />
                    </div>
                    <div className="flex relative mt-12 -mb-6">
                        <p className="wait-text">
                            the wait is always warth it.
                        </p>
                    </div>
                    {/* Animate Ring */}
                    <div className="waiting-ring w-full flex flex-row justify-center"
                        ref={sequenceRef}>
                        <img
                            src={`/hand-anim-mobile/${count.toString().padStart(4, '0000')}.png`}
                            width={450}
                            height={450}
                            className="img-sequence w-60 relative z-1"
                            alt="img sequence"
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                </div>
            </div>
            <div className='album-mirror relative w-full h-96'>
                {/* Mirror 1*/}
                <div className="Mirror2 absolute flex w-full -mt-2 z-20 ">
                    <img src={Mirror1} alt="Mirror1" className="Mirror1 w-full " />

                </div>
                {/* Mirror 2*/}
                <div className="Mirror2 absolute flex w-full -mt-2 z-10">
                    <img src={Mirror2} alt="Mirror2" className="Mirror2 w-full " />
                </div>
            </div>
        </div>
    )
}