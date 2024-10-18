import React from 'react';
import './Brands.css';

// import brands data
import { brandsData } from '../../Data/Data';

const Brands = () => {
  return (
    <div className='Brands'>
        <div className="container brands-container">
            {
                brandsData.map(({img}, index) =>{
                    return (
                        <div className="brand" key={index}>
                            <img src={img} alt="brandImage" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Brands;