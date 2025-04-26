import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Hardik.</div>
<div>
  <Link to={'https://github.com/hardikj2003'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/hardikj/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'www.linkedin.com/in/hardikj2003'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
</div>
      
    </footer>
  )
}

export default Footer