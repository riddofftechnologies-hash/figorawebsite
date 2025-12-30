import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div className="hero-media">
                <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline loop />
                <div className="hero-mask">
                    <img src="/figora.svg" alt="Figora" />
                </div>
            </div>

            <div className="hero-bottom-content">
                <h2 className="hero-tagline text-2xl lg:text-4xl text-ash-black">
                    Marketing is <span className="text-gradient">Clarity</span> <span className="text-gradient">Conversion</span> <span className="text-gradient">Capital</span>
                </h2>
                <button>Begin Your Journey</button>
                <p>Your Digital Growth Partner</p>
            </div>
        </section>
    )
}
export default Hero
