import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BsPersonWorkspace} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
<a href="#"><AiOutlineHome/></a>
<a href="#about"><BiUser/></a>
<a href="#experience"><BiBook/></a>
<a href="#portfolio"><BsPersonWorkspace/></a>
<a href="#contact"><AiFillPhone/></a>
    </nav>
  )
}

export default Nav