import React, { forwardRef } from 'react'
import CardWrapper from './Card.styled'

const Card = forwardRef(
  ({ mobile, name, meta, description, date, logo, bg, links, active }, ref) => {
    let logo_img
    try {
      logo_img = require(`static/logo/DevContent/${logo}`)
    } catch (e) {
      logo_img = false
    }

    let background
    try {
      background = require(`static/images/DevContent/${bg}`)
    } catch (e) {
      background = require(`static/images/DevContent/no_img.png`)
    }

    return (
      <CardWrapper {...{ mobile, name, active, background }} ref={ref}>
        <div className="plane">
          <div className="images">
            {logo_img ? (
              <div className="logo">
                <img src={logo_img} alt="" />
              </div>
            ) : null}
          </div>
          <div className="description">
            <h1>{name}</h1>
            <h4>{meta}</h4>
            <span>{description}</span>
            <hr />
            <span>{date}</span>
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
