import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
    <div class="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" class="sr-only">Follow us on social media</h3>
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
    </div>
    <hr class="footer-break" />
    <ul class="footer-links" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" class="sr-only">Important Links</h3>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
    </ul>
    <p class="copyright">© 2024 CodeCircuit. Rights Reserved</p>
</footer>

    </div>
  )
}

export default Footer