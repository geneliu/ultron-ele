/**
 * @2019/02/21
 */
import React from 'react'
import {Link} from 'gatsby'
import Image from 'gatsby-image'

import look from '../style/tutitem.module.css'

const TutorialItem = ({coverImg, title, excerpt, date, slug, tags, category}) => (
  <div className={`${look.tutoitem} tuto-item-resp`}>
    <div className={`${look.leftImage} left-image-resp`}>
      <Image fluid={coverImg.childImageSharp.fluid} />
      <div className={look.coverOnBotm}></div>
      <div className={look.coverText}>{date}</div>
    </div>
    <div className={`${look.rightIntro} right-intro-resp`}>
      <h4 className={look.tutoTitle}>{title}</h4>
      <p className={look.excerpt}>
        {excerpt}
      </p>
      <div className={look.tutoFooter}>
        <div className={look.tutoFooterTags}>
          {tags &&
            tags.map(
              (t,i) => 
                <span className={look.tutoTag} key={i}>
                  {t}
                </span>
            )
          }
        </div>
        <div className={`${look.tutoFooterMore} visible`}>
          <Link to={slug} state={{category}}>Learn More...</Link>
        </div>
      </div>
    </div>
  </div>
)

export default TutorialItem