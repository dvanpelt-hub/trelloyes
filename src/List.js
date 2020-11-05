import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  //Is props.header and props.cards the 2 props List accepts?
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
        //Is cards a custom prop?
        //Is this this Card component being rendered? Where is the array generated?
        <Card
          key={card.id}
        //Are these the two instances of Card component where title, content, and key are passed into?
          title={card.title}
          content={card.content}
          />
        )}
        <button 
        type='button'
        className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}