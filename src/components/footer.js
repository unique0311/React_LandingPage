import '../CSS/footer.css';

import PhoneImage from '../assets/Landing/phone.svg';
import EmailImage from '../assets/Landing/email.svg';
import LocationImage from '../assets/Landing/location.svg';
import facebookImage from '../assets/Landing/facebook.svg';
import twitterImage from '../assets/Landing/Twitter.svg';
import linkedinImage from '../assets/Landing/linkedin.svg';
import instagramImage from '../assets/Landing/instagram.svg';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className='footer_logo'>
        <h4>Logo</h4>
        <div>
          <p>Found in 2023, Pinpoint Proxies has focused itself on ultra-tast speeds.</p>
          <p>All right reserved, Pinpoint Proxies</p>
        </div>
      </div>
      <div className='footer_info'>
        <div className='footer_main_setting'>
          <h5>Menu</h5>
          <a href='/#ourProducts' >Our Products</a>
          <a href='/#howWeCompare' >How We Compare</a>
          <a href='/#pricingPlans' >Pricing Plans</a>
          <a href='/#faq' >FAQ</a>
        </div>
        <div className='footer_main_setting'>
          <h5>More</h5>
          <a href='/privacyPolicy' >Privacy Policy</a>
          <a href='/termsAndConditions' >Terms & Conditions</a>
          <a href='/refundPolicy' >Refund Policy</a>
        </div>
        <div className='footer_main_setting'>
          <h5>Contact</h5>
          <div className='footer_contact_setting'>
            <img src={PhoneImage}/>
            <p>(000) 000-0000</p>
          </div>
          <div className='footer_contact_setting'>
            <img src={EmailImage}/>
            <p>email@pinpointproxies.com</p>
          </div>
          <div className='footer_contact_setting'>
            <img src={LocationImage}/>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
        </div>
      </div>
      <div className='footer_socialMedia'>
        <h5>Social media</h5>
        <div className='socialMedia_image'>
          <a href='https://facebook.com'><img src={facebookImage}/></a>
          <a href='https://twitter.com'><img src={twitterImage}/></a>
          <a href='https://linkedin.com'><img src={linkedinImage}/></a>
          <a href='https://instagram.com'><img src={instagramImage}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;