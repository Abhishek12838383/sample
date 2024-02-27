import React from 'react'
import './Hero.css'
import trophy from '../assets/trophy.png'
import award from '../assets/award.png'

const Hero = () => {
  return (
    <div className='hero'>
      
<div className="hero-left">
    <img src={trophy} alt="" />
</div>

<div className="hero-right">

    <div className="hero-title">
        C.R.I PUMPS WIN THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
    </div>

<div className="hero-para">
    <ul>
        <li>
C.R.I's energy efficient products are well orgainized by various Goverments Institutions as trust worthy products for various products across the globe  to save energy.
	</li>
        <li>
    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	</li>
    </ul>
</div>

<div className="award">
    <img src={award} alt="" />
</div>

<div className="award-line">
    Goverment of India has awarded the <strong>"National Energy Conservation Award 2018".</strong>Mr G Selvraj Joint managing director
    of C.R.I  Group recieved the award from from smt. Sumitra Mahajan Speaker of Lok Sabha & Shri Raj Kumar Singh Honorable Minister of State.
</div>
</div>

    </div>
  )
}

export default Hero
