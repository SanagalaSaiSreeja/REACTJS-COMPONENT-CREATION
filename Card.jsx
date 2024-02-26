import React, { useState } from 'react';
import './card.css'; // Assuming CSS file exists

export const Card = ({ card }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="image-container">
        <img src={card.url} alt={card.title || 'Card Image'} />
      </div>
      <div className="content">
        <h3><b>{card.title}</b></h3>
        {isExpanded && <p>{card.description}</p>}
      </div>
      <Button
        onClick={handleButtonClick}
        text={isExpanded ? 'Back' : 'Click to view the Image and Description'}
      />
      
    </div>
  );
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);