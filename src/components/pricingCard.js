import '../CSS/landing.css';

import checkMarkGreen from '../assets/Landing/checkMarkGreen.svg';
import checkMarkBlack from '../assets/Landing/checkMarkBlack.svg';

const PricingCard = ({titleImage, mainTitle, badgeShow}) => {
  return (
    <div className='pricingCard_container'>
      <div className='pricingCard_title'>
        <img src={titleImage}/>
        <p>{mainTitle}</p>
      </div>
      <div className='pricingCard_startingFrom'>
        <p>Starting From</p>
        <h5>$1.50/GB</h5>
      </div>

      <div className='pricingCard_detail'>
        <div className='pricingCard_detail_container'>
          <img src={checkMarkGreen}/>
          <p>120+ Counties</p>
        </div>
        <div className='pricingCard_detail_container'>
          <img src={checkMarkBlack}/>
          <p>Unlimited Data</p>
        </div>
        <div className='pricingCard_detail_container'>
          <img src={checkMarkGreen}/>
          <p>Data Tracking</p>
        </div>
        <div className='pricingCard_detail_container'>
          <img src={checkMarkBlack}/>
          <p>24/7 Support</p>
        </div>
      </div>

      <button>Purchase Now</button>

      <div className={`pricingCard_badge`} style={badgeShow}>
        <p>Most</p>
        <p>Popular</p>
      </div>
    </div>
  )
}

export default PricingCard;