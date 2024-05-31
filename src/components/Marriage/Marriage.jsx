import { LineRGB } from "../../utils";
import CountUp from 'react-countup';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marriage() {

    const numberRef = useRef(null);

    const [counterState, setCounterState] = useState(false);

    useGSAP(() => {
        const handleNumberAnimation = () => {
            // Number Random
            gsap.from(
                numberRef.current,

                {
                    duration: 0,
                    ease: 'power2.inOut',

                },
                0,
            );

            gsap.from('.over', { opacity: 0, ease: 'power3.Out', duration: 0.8, y: -10, });
            gsap.from('.signature', { opacity: 0, ease: 'power3.Out', duration: 0.8, y: 10, });


            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.number-div',
                    start: '50% 50%',
                    end: '50% 50%',
                    scrub: 5,
                    markers: false,
                    pinSpacing: false,
                    toggleActions: "play none none play",

                },
            });

            tl.fromTo(
                numberRef.current,
                {
                    opacity: 0,
                    y: 10,

                },
                {
                    onEnter: () => {
                        console.log('onEnter');
                        setCounterState(true);
                    },

                    opacity: 1,
                    ease: 'power2.inOut',
                    duration: 0.8,
                    y: 0,
                },
                0
            );
            tl.to('.over', { opacity: 1, ease: 'power3.Out', duration: 0.8, y: 0, });
            tl.to('.signature', { opacity: 1, ease: 'power3.Out', duration: 0.8, y: 0, });


        };

        handleNumberAnimation();
    }, []);






    return (
        <div className="w-full flex flex-col px-8 bg-black justify-center items-center py-12">
            {/* Header */}
            <div className="w-full justify-center items-center px-12 py-12">
                <p className="text-center text-white">Marriage equality is waiting...</p>
            </div>
            <div>
                <img src={LineRGB} className="w-full" />
            </div>
            {/* Number */}
            <div className="number-div w-18 justify-center items-center px-12 py-10">
                <p className="over text-left text-white leading-none opacity-0">over</p>
                <p ref={numberRef} className="random-number text-center text-white text-6xl leading-none opacity-0">
                    {counterState && <CountUp start={200000} end={300000} duration={2}></CountUp>}
                </p>
                <p className="signature text-right text-white leading-none opacity-0">signatures</p>
            </div>
            <div>
                <img src={LineRGB} className="w-full" />
            </div>
            {/* Year */}
            <div className="w-full justify-center items-center py-24">
                <p className="text-center text-white text-4xl">2012 - 2024</p>
            </div>
            <div>
                <img src={LineRGB} className="w-full" />
            </div>
            {/* Note */}
            <div className="w-full justify-center items-center py-12">
                <p className="text-xs text-center text-white font-Prompt "><span className="">“พ.ร.บ. สมรสเท่าเทียม” </span><br /> คือ ความหวังของประชาชนทุกอัตลักษณ์ <br /> คือ สิทธิและสวัสดิการที่ประชาชนทุกคนพึงได้ <br /> จากจุดเริ่มต้นที่ทุกคนเรียกว่า “ความรัก”</p>
            </div>
            {/* Button */}
            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-xs text-center text-white font-Prompt">ร่วมทำความเข้าใจการ<span className="">สมรสอย่างเท่าเทียม</span></p>

                {/* Button */}
                <div className="rgb-btn justify-center items-center mt-16 mb-12 rounded-lg px-0.5 py-0.5 ">
                    <a href="https://www.support1448.org/documents/support-1448-draft.pdf" target="_blank">

                        <button className="text-xs text-center text-white font-Prompt bg-black px-8 py-2 rounded-lg">อ่านร่างเนื้อหาฉบับเต็ม</button>

                    </a>
                </div>
            </div>
        </div>


    );
}