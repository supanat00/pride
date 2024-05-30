import { useRef } from 'react';
import SceneTwo from "./SceneTwo"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Freedom() {
    const freedom = useRef(null);

    // Gsap Animations
    useGSAP(() => {
        // Scenetwo
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scenetwo",
                start: "top 15%",
                end: "bottom bottom",
                scrub: 1,
                pin: false,
                pinSpacing: false,
                // markers: true,
                toggleActions: "play none none none",
            },
        });

        tl.from('.scenetwo',
            { opacity: 0, duration: 1.5 }, // สถานะเริ่มต้น    

        )

        // texts

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".texts",
                start: "top 15%",
                end: "bottom bottom",
                scrub: 3,
                pin: false,
                pinSpacing: false,
                // markers: true,
                toggleActions: "play none none none",
            },
        });

        tl2.from('.texts',
            { opacity: 0, x: 50, }, // สถานะเริ่มต้น    

        )






    }, { scope: freedom });
    return (
        <div style={{ width: '100vw', height: '100vh' }} className="freedom flex flex-row" ref={freedom}>
            {/* box 2 */}
            <div className='w-full flex flex-row '>
                <div className="scenetwo w-1/2 flex flex-row justify-center items-center">
                    <SceneTwo />
                </div>

                <div className="texts w-1/2 flex flex-col justify-center items-left pl-2 tablet:pl-20">
                    <h1 className="text-xl tablet:text-4xl labtop:text-6xl font-semibold font-Playfair leading-normal">FREEDOM <br />
                        COMMITMENT</h1>
                    <p className="text-base tablet:text-2xl font-normal">Incomplete by design.</p>
                </div>
            </div>

        </div>


    )
}

