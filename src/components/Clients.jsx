import { useEffect, useRef } from "react";
import gsap from "gsap";
import { clients } from "../constants/index.js";

const Clients = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const track = marquee.querySelector(".clients-track");

        // Clone items for seamless loop
        gsap.to(track, {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1,
        });
    }, []);

    return (
        <section id="clients" className="clients-section py-20">
            <div className="container mx-auto px-5 mb-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-ash-black text-center">
                    Our <span className="text-gradient">CLIENTS</span>
                </h2>
            </div>

            <div ref={marqueeRef} className="clients-marquee overflow-hidden py-10">
                <div className="clients-track flex gap-6 items-center">
                    {[...clients, ...clients].map((client, index) => (
                        <a
                            key={index}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="client-logo flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <img
                                src={`/${(index % 6) + 1}.png`}
                                alt={client.name}
                                className="h-20 lg:h-28 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
