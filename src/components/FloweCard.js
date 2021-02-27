import React from 'react';
import '../styles/FlowerCard.css';

function FlowerCard (props) {
    return(
        <article className="flower-card">
          <div className="flower-image">
            <figure>
              <img
                src={props.src}
                alt={props.name}
              />
            </figure>
          </div>
          <div className="flower-content">
            <h3>
              {props.name}
            </h3>
            <p>
              {props.description}
            </p>
          </div>
        </article>
    );
}


export default FlowerCard;