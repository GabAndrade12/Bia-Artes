import React from "react";
import './WhatsappButton.css';

function WhatsappButton(){
    const phoneNumber = '5511964827497';
    const message = 'Olá, Bia Gostaria de saber mais sobre seus produtos.'
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="whatsapp-button">Fale conosco no WhatsApp</a>
    );
}

export default WhatsappButton;