import React from 'react'
import { Link } from 'react-router-dom'

const CarIndexItem = (props) => (
  <li className="car-index-item">
    <Link to={`/cars/${props.car.id}`}>
      <div className="car-index-image" style={{backgroundImage: `url(${props.car.image_url})`}}>
        <svg viewBox="0 0 32 32" id="heart">
          <path id="heart-path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
            C30,20.335,16,28.261,16,28.261z"/>
        </svg>
      </div>
      <span className='index-item-make'>{props.car.make}</span> {props.car.model}
      <div className="car-index-item-text">
        <p>
          <span className='index-item-year'>{props.car.year}</span> <span className='index-mileage'>{props.car.mileage.toLocaleString()} miles</span>
        </p>
        <p className="car-index-item-price" id='idx-item-price' >${props.car.price.toLocaleString()}</p>
      </div>
    </Link>
  </li>
)

export default CarIndexItem;
