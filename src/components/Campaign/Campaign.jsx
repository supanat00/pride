import { useRef } from 'react';
import { Necklace, handShow2 } from "../../utils";

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Campaign() {
    const campaign = useRef(null);

    // Gsap Animations
    useGSAP(() => {
        // Pride Logo              

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".campaign",
                start: "50% 15%",
                end: "50% 15%",
                scrub: 5,
                pin: false,
                pinSpacing: false,
                markers: true,
                toggleActions: "play none none none",
            },
        });

        tl.from('.our-campaign', { opacity: 0, y: 30, ease: 'power3.In', duration: 0.1 });
        tl.from('.box1', { opacity: 0, y: 30, ease: 'power3.In', duration: 0.1 });
        tl.from('.box2', { opacity: 0, y: 30, ease: 'power3.In', duration: 0.1 });
        tl.from('.box3', { opacity: 0, y: 30, ease: 'power3.In', duration: 0.1 });



    }, { scope: campaign });

    return (
        <div id={"campaign"} className="campaign relative flex flex-col w-full p-8 bg-white-100 items-center justify-center" ref={campaign}>
            {/* Header */}
            <div className="our-campaign w-full flex flex-col">
                <h1 className="text-left text-2xl font-bold leading-mono">SUPPORT <br />
                    OUR <br />
                    CAMPAIGN </h1>
            </div>

            {/* Contents */}
            {/* box 1 */}
            <div style={{ height: '35vh', width: '45vh' }}
                className="box1 relative flex flex-row justify-center mt-8 border rounded-2xl">
                {/* Number */}
                <div className="absolute top-1.5 right-1.5 bg-black text-white rounded-2xl px-2">
                    1
                </div>
                {/* Nackless */}
                <div className="relative flex flex-row w-full items-center justify-center">
                    <div className="absolute top-0">
                        <img src={Necklace} className="w-full" />
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-col w-1/2 items-left justify-center mx-4">
                    <h1 className="text-left mb-2 leading-normal text-xl">Pre-order now <br /> at LINE</h1>
                    <p className="text-sm pt-2">@mirrormirror</p>

                    {/* button */}
                    <div className="mt-6">
                        <button className="mt-2 w-32 bg-black text-white rounded-2xl py-0.5">click here</button>
                    </div>

                </div>

            </div>


            {/* box 2 */}
            <div style={{ height: '35vh', width: '45vh' }}
                className="box2 relative flex flex-row justify-center mt-6 border rounded-2xl">
                {/* Number */}
                <div
                    className="absolute top-1.5 right-1.5 bg-black text-white rounded-2xl px-2">
                    2
                </div>
                {/* Details */}
                <div className="flex flex-col py-8">
                    <h1 className="leading-mono text-xl py-2 pr-16">share our voice <br />
                        on social media <br />
                        by hashtag</h1>
                    <h1 className="text-2xl leading-normal font-bold font-Prompt py-2 pr-16">#waitingring<br />#แหวนรอแต่งงาน<br />#สมรสเท่าเทียม</h1>
                </div>

            </div>

            {/* box 3 */}
            <div style={{ height: '35vh', width: '45vh' }}
                className="box3 relative flex flex-row justify-center mt-8 border rounded-2xl pt-12">
                {/* Number */}
                <div className="absolute top-1.5 right-1.5 bg-black text-white rounded-2xl px-2">
                    3
                </div>
                {/* Hand&RING */}
                <div className="relative flex flex-row w-full items-center justify-center">
                    <div className="absolute bottom-0">
                        <img src={handShow2} className="w-full" />
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-col w-full  items-left justify-center">
                    {/* Details */}
                    <div className="flex flex-col">
                        <h1 className="text-left leading-normal text-lg">wait until the day<br />we all have the<br />right to marry</h1>

                    </div>

                </div>

            </div>
        </div>
    );
}