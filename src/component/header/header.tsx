import React from 'react'
import './header.scss';
import { Button } from 'antd';
import { Link } from "react-scroll";

function HeaderLayout() {
  return (
    <div className='header'>
 <Link to="profile" spy={true} smooth={true} duration={300} offset={-50}>
        <Button className='header__button'>Profile</Button>
 </Link>
      
 <Link to="about" spy={true} smooth={true} duration={300} offset={-120}>
        <Button className='header__button'>About</Button>
 </Link>
        <Link to="skill" spy={true} smooth={true} duration={600} offset={-120}>
        <Button className='header__button'>Skill</Button>
      </Link>
        <Link to="experience" spy={true} smooth={true} duration={600} offset={-120}>
        <Button className='header__button'>Learning</Button>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={600} offset={-120}>
        <Button className='header__button'>Contact</Button>
        </Link>
    </div>
  )
}

export default HeaderLayout
