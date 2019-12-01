import React from 'react'
import CardWrapper from './Card.styled'

const Card = ({ mobile, name, logo, description, links }) => {
  return (
    <CardWrapper {...{ mobile, name, logo, description, links }}>
      <div>
        <div className="images">
          <div className="logo">
            <img src={require(`../../../static/logo/${name}.svg`)} alt="" />
          </div>
        </div>
        <div className="description">
          <h1>{name}</h1>
          <span>{description}</span>
        </div>
      </div>
      <div>
        {links
          ? links.map(link =>
              link.name && link.link ? (
                <span key={link.name}>
                  {link.name} <a href={link.link}>{link.link}</a>
                </span>
              ) : null
            )
          : null}
      </div>
    </CardWrapper>
  )
}

export default Card
