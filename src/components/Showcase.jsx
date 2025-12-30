import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const content = sectionRef.current.querySelectorAll('.animate-showcase');
        
        gsap.fromTo(content, 
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, [])

    return (
        <section id="showcase" ref={sectionRef}>
            <div className="content" style={{ fontFamily: "'Alika Misely', cursive" }}>
                <div className="wrapper">
                    <div className="showcase-content animate-showcase">
                        <h2 style={{ fontFamily: "'Alika Misely', cursive" }}>Creative Excellence</h2>

                        <div className="space-y-5 mt-7">
                            <p style={{ fontFamily: "'Alika Misely', cursive" }}>
                                Introducing {" "}
                                <span className="text-ash-black font-bold" style={{ fontFamily: "'Alika Misely', cursive" }}>
                                    Figora, your partner in digital innovation
                                </span>
                                . Figora delivers
                            </p>
                            <p style={{ fontFamily: "'Alika Misely', cursive" }}>
                                We craft stunning digital experiences that captivate your audience and drive results. Our designs are bold, intuitive, and built for impact.
                            </p>
                            <p style={{ fontFamily: "'Alika Misely', cursive" }}>
                                From concept to launch, we bring precision, creativity, and cutting-edge technology to every project we touch.
                            </p>
                            <p className="text-primary cursor-pointer hover:underline" style={{ fontFamily: "'Alika Misely', cursive" }}>Learn more about our services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
