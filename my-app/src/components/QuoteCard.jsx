import React from "react";

const QuoteCard = ({ quote, author, fontSize, theme, liked, onLike }) => {
    return (
        <div className={`quote-card ${theme}`} style={{ fontSize }}>
            <p className="quote-text">{quote}</p>
            <p className="quote-author">{author}</p>
            <button className="like-button" onClick={onLike}>
                {liked ? "❤️ Liked" : "♡ Like"}
            </button>
        </div>
    );
};

export default QuoteCard;
