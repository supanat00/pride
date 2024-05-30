
import { useRef } from 'react';
import { prideLogo, waitingLogo } from "../../utils";
import { TwinRing } from "../../utils";
import Texts from "./Texts";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
    const hero = useRef(null);

    // Gsap Animations
    useGSAP(() => {
        // Pride Logo        
        gsap.from('.prideLogo', {
            delay: 2,
            ease: 'power3.In',
            duration: 2,
            y: 80,
            opacity: 0,
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".prideLogo",
                start: "50% 15%",
                end: "50% 15%",
                scrub: 5,
                pin: false,
                pinSpacing: false,
                // markers: true,
                toggleActions: "play none none none",
            },
        });

        tl.to('.prideLogo', { opacity: 0, y: -30, ease: 'power3.Out', duration: 0.8 });

        // Waiting Logo
        gsap.from('.imglogo', {
            delay: 2.2,
            ease: 'power3.In',
            duration: 2,
            opacity: 0,
            y: 80,
        });

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".waitingLogo",
                start: "150% 80%",
                end: "250% 30%",
                scrub: 10,
                pin: true,
                // markers: true,
            }
        });

        tl2.to('.waitingLogo', { scale: 0, opacity: 0, });

        // Ring Present     
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".twinring",
                start: "top 80%",
                end: "50% 30%",
                scrub: 3,
                // pin: true,
                // markers: true,
            }
        });

        tl3.fromTo('.twinring',
            { opacity: 0, y: 0 }, // สถานะเริ่มต้น
            { opacity: 1, y: -150, duration: 1 } // สถานะสุดท้าย
        )
            .to('.twinring', { opacity: 1, duration: 1, y: -250, })

        // Texts 
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".ringtexts",
                start: "80% 80%",
                end: "20% 30%",
                scrub: 1,
                pin: true,
                // markers: true,
            }
        });

        tl4.fromTo('.ringtexts',
            { opacity: 0, x: -100, stagger: 0.2, }, // สถานะเริ่มต้น
            { opacity: 1, x: 0, duration: 1 } // สถานะสุดท้าย
        )
            .to('.ringtexts', { opacity: 0, duration: 1, y: -300, })

    }, { scope: hero });

    return (
        <div id={"hero"} className="hero relative w-full h-full flex flex-col" ref={hero}>
            {/* Logo */}
            <div style={{ width: '100vw', height: '100vh' }} className="relative flex flex-col w-full justify-center items-center z-20 p-6">
                <div style={{ height: '15vh' }} className="prideLogo absolute flex justify-center items-center w-full opacity-1 top-0" >
                    <img src={prideLogo} className="w-24" />
                </div>
                <div style={{ height: '30vh' }} className="waitingLogo absolute flex justify-center items-center w-full opacity-1 translate-y-0">
                    <img src={waitingLogo} className="imglogo w-80 md:w-96 z-80" />
                </div>
            </div>
            {/* Ring Present */}
            <div className="ringpresent relative flex flex-col w-full justify-center items-center z-10">
                <video
                    style={{ width: '100vw', height: '100vh', objectFit: 'cover', zIndex: "1" }}
                    className="twinring z-10 -translate-y-50 opacity-1"
                    src={TwinRing}
                    autoPlay
                    loop
                    muted
                >

                </video>

                <div className="ringtexts absolute w-full  -translate-y-0  z-20" >
                    <Texts />
                </div>
            </div>

        </div >
    );
}