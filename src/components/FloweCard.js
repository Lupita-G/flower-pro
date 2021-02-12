import React from 'react';
import '../styles/App.css';

function FlowerCard () {
    return(
        <article class="flower-card">
          <div class="flower-image">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1548094967-e25a127d1f6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGJvdXF1ZXQlMjByb3NlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Ramo de Rosa Roja"
              />
            </figure>
          </div>
          <div class="flower-content">
            <h3>
              Rosa Roja
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </article>
    );
}


export default FlowerCard;