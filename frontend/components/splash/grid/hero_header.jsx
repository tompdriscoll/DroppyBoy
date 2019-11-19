import React from 'react'

class HeroHeader extends React.Component {
   
   arrowScroll(){
      let app = document.getElementById('grid2')
      window.scrollTo({
        top: (app.offsetTop + 50),
        behavior: 'smooth'
      })
    }

   render (){
      return(
      <header>
         <h1 className="hero-title">Put your creative energy to work, with Droppyboy</h1>
         <p className="hero-copy">
            Droppyboy is a modern workspace designed to reduce busywork—so you can focus on the things that matter.
         </p>
         <button id='arrow' className="arrow" onClick={this.arrowScroll}></button>
      </header>)}
}
export default HeroHeader;