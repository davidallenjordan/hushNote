import React from 'react';

// Just some social links
const Footer = () => {
  return (

    <footer>

      <p><i class="far fa-copyright"></i> 2020 David Allen-Jordan</p>
      
      <div className="socialLinks">
        <a aria-label="git hub" href="https://github.com/davidallenjordan"><i class="fab fa-github"></i></a>
        <a aria-label="twitter" href="https://twitter.com/davidaj416"><i class="fab fa-twitter"></i></a>
        <a aria-label="linkedin" href="https://www.linkedin.com/in/david-allen-jordan-3475151b1/"><i class="fab fa-linkedin-in"></i></a>
      </div>      

    </footer>

  )
}

export default Footer;