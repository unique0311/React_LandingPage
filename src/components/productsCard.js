import '../CSS/landing.css';

const ProductsCard = ({productCardImage, productTitleOne, productTitleTwo, productCardDetail, productBadge}) => {
  return (
    <div className="productCard_container">
      <div className="productCard_title">
        <img src={productCardImage}/>
        <div className='productCard_title_text'>
          <p>{productTitleOne}</p>
          <p>{productTitleTwo}</p>
        </div>
      </div>
      <div className="productCard_detail">
        {productCardDetail}
      </div>

      <div className='productCard_badge' style={productBadge}>
        <p>25%</p>
        <p>Off</p>
      </div>
    </div>
  )
}

export default ProductsCard;