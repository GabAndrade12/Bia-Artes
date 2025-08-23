import React from "react";
import './TestimonialCard.css';

function TestimonialCard ({quote, author}){
    return (
        <div className="testimonial-card">
            <p className="quote">"{quote}"</p>
            <p className="author">- {author}</p>
        </div>
    );
}

export default TestimonialCard;