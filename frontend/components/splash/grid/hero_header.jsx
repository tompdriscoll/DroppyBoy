import React from 'react'

const HeroHeader = () => (
   <header>
       <h1 className="RebrandHero--title ob-title ob-title--1">Put your creative energy to work, with Dropbox</h1>
       <p className="RebrandHero--copy ob-copy ob-copy--standard">
           Dropbox is a modern workspace designed to reduce busywork—so you can focus on the things that matter.
        </p>
        <button className="RebrandHero--cta ob-button ob-button__cta ob-button--white">Sign up for free</button>
        <button aria-label="waypoint" className="RebrandHero--waypoint ob-button ob-button--waypoint"></button>
   </header>
)
export default HeroHeader;