import React, { useState, useEffect, createRef } from 'react'

import Card from '../../atoms/Card'
import CardsWrapper from './Cards.styled'

const Cards = ({ cards, mobile }) => {
  const [activeCard, setActiveCard] = useState(0)
  const cardsRef = createRef()
  const cardRefs = cards.map(() => {
    return createRef()
  })

  const scroll = () => {
    cardRefs.forEach((ref, i) => {
      if (
        ref.current.offsetLeft <
          cardsRef.current.scrollLeft + window.innerWidth / 2 &&
        cardsRef.current.scrollLeft + window.innerWidth / 2 <
          ref.current.offsetLeft + ref.current.offsetWidth
      ) {
        setActiveCard(i)
      }
    })
  }

  const scrollTo = delta => {
    if (cardsRef.current) {
      if (typeof cardsRef.current.scrollTo === 'function') {
        cardsRef.current.scrollTo({
          left:
            cardsRef.current.scrollLeft +
            cardRefs[activeCard].current.offsetWidth * delta,
        })
      } else {
        cardsRef.current.scrollLeft +=
          cardRefs[activeCard].current.offsetWidth * delta
      }
    }
  }

  useEffect(() => {
    cardsRef.current.scrollLeft = cardRefs[0].current.offsetWidth / 2
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CardsWrapper
      {...{ cards, activeCard }}
      lastCard={cards.length - 1}
      onScroll={scroll}
      ref={cardsRef}
    >
      <button
        onClick={() => {
          scrollTo(-1)
        }}
      ></button>
      <button
        onClick={() => {
          scrollTo(1)
        }}
      ></button>
      <div>
        {cards.map((card, i) => (
          <Card
            {...card}
            key={i}
            mobile={mobile}
            active={i === activeCard}
            ref={cardRefs[i]}
          />
        ))}
      </div>
    </CardsWrapper>
  )
}

export default Cards
