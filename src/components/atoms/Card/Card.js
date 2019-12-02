import React, { forwardRef } from 'react'
import CardWrapper from './Card.styled'

const Card = forwardRef(
  ({ mobile, name, logo, description, links, active }, ref) => {
    return (
      <CardWrapper
        {...{ mobile, name, logo, description, links, active }}
        ref={ref}
      >
        <div className="plane">
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
        <div className="links">
          {links
            ? links.map(link =>
                link.name && link.link ? (
                  <div className="link" key={link.link}>
                    <a href={link.link}>
                      <span>{link.name}</span>
                    </a>
                  </div>
                ) : null
              )
            : null}
        </div>
      </CardWrapper>
    )
  }
)

export default Card
