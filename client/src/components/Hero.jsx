import React from "react";
import WhatsappButton from "./WhatsappButton";

function Hero(){
    return(
        <section className="hero-section">
            <h1>Arte em cada ponto, carinho em cada peça.</h1>
            <p>Descubra produtos únicos de crochê para você e sua casa.</p>
            <button>Explore a coleção</button>
            <WhatsappButton />
        </section>
    );
}

export default Hero;