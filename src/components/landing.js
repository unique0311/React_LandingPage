import '../CSS/landing.css';
import Accordion from './accordion';
import PricingCard from './pricingCard';
import ProductsCard from './productsCard';

import lightImage from '../assets/Landing/Light.svg';
import databaseImage from '../assets/Landing/Database.svg';
import homeImage from '../assets/Landing/Home.svg';
import dotImage from '../assets/Landing/Dot.svg';
import mapImage from '../assets/Landing/map.png';
import searchImage from '../assets/Landing/search.svg';
import tickImage from '../assets/Landing/Tick.svg';
import cancelImage from '../assets/Landing/cancel.svg';

const Landing = () => {
  return (
    <div className="landing_container">
      <div className='landing_mainPage' id="home">
        <div className='mainPage_title'>
          <p className='landing_public_Open' >Public Beta Now <span style={{color: "#7AC58D", cursor: 'pointer'}}>Open</span></p>
          <h5>Meet an <span style={{color: "#6FB756"}}>ultra</span> fast & easy proxy service</h5>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h4>
          <div className='mainPage_title_button'>
            <button className='explore_button_setting'>Explore Now</button>
            <button className='mainPage_login_buttonSetting'>Log in</button>
          </div>
        </div>
        <img src={dotImage} className='dotImage_setting_One' alt='dot'/>
        <img src={dotImage} className='dotImage_setting_Two' alt='dotTwo'/>
        <img src={mapImage} className='mapImage_setting' alt='mapI'/>
        <div className='mainPage_search'>
          <input type= "text" placeholder='Search Location' />
          <button><img src={searchImage} alt='searchi'/></button>
        </div>
      </div>
      <div className='landing_ourProducts' id="ourProducts">
        <p className='products_title'>Our Products</p>
        <div className='ourProducts_card'>
          <ProductsCard productCardImage={lightImage} productTitleOne="Static Residential" productTitleTwo="Proxies" productBadge={{display: 'flex'}} productCardDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
          <ProductsCard productCardImage={databaseImage} productTitleOne="Datacenter" productTitleTwo="Proxies" productCardDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
          <ProductsCard productCardImage={homeImage} productTitleOne="Rotating" productTitleTwo="Residential Proxies" productCardDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
        </div>
        <button>Try it Out</button>
      </div>
      <div className='landing_howWeCompare' id='howWeCompare'>
        <div className='howWeCompare_title'>
          <h5>How we compare</h5>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing elit, sed</p>
        </div>
        <div className='howwecompare_main'>
          <table className='table_title'>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Logo</th>
              <th>Logo</th>
              <th>Logo</th>
              <th>Logo</th>
            </tr>
          </table>
          <table className='table_detail'>
            <tr>
              <td>Money-Back</td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={tickImage} alt='tick'/></td>
            </tr>
            <tr>
              <td>Ultra Fast Service</td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
            </tr>
            <tr>
              <td>Flexible Pricing</td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={tickImage} alt='tick'/></td>
            </tr>
            <tr>
              <td>24/7 Support Team</td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
            </tr>
            <tr>
              <td>Data Never Expires</td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={tickImage} alt='tick'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
              <td><img src={cancelImage} alt='cancel'/></td>
            </tr>
            <tr>
              <td>Prices Start From</td>
              <td>$1.50/GB</td>
              <td>$12/GB</td>
              <td>$12/GB</td>
              <td>$12/GB</td>
            </tr>
          </table>
        </div>
        <div className='howwecompare_selected'>
          <p>Logo</p>
          <button>Order Now</button>
        </div>
      </div>
      <div className='landing_pricingPlans' id='pricingPlans'>
        <div className='pricingPlans_title'>
          <h5>Simple & <span style={{color: "#6FB756"}}>Transparent</span> Pricing</h5>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing elit, sed</p>
        </div>
        <div className='pricingPlans_card'>
          <PricingCard mainTitle="Static Residential" titleImage={lightImage}/>
        <PricingCard mainTitle="Datacenter Proxy" titleImage={databaseImage} badgeShow={{display: 'flex'}}/>
          <PricingCard mainTitle="Rotating Residential" titleImage={homeImage}/>
        </div>     
        <p className='pricingPlans_contactUs'>Looking for custom plans? <span style={{color: '#6FB756', cursor: 'pointer'}}>Contact US</span></p>   
      </div>
      <div className='landing_faq' id='faq'>
        <div className='faq_title'>
          <h5>Frequently Asked Questions</h5>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing elit, sed</p>
        </div>
        <div className='faq_main'>
          <div className='accordion_landing_main'>
            <Accordion />
          </div>
          <button className='faqmain_button'>Try Pinpoint</button>
        </div>
      </div>
    </div>
  )
}

export default Landing;