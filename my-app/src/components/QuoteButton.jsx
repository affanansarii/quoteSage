import React from "react";

const QuoteButton = ({ onClick, label }) => {
    return (
        <button className="quote-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default QuoteButton;
