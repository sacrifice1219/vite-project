import React from "react";

import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

import "./BestSellingBook.css";

import TreeShape from "../../assets/treeShape.png";

// import selling books data
import { sellingBooksData } from "../../Data/Data";

// import link from react
import { Link } from "react-router-dom";

// import icon
import { BsArrowRight } from "react-icons/bs";


const BestSellingBook = () => {
  return (
    <section className="BestSellingBook">
      <div className="treeshape">
        <img src={TreeShape} alt="" />
      </div>

      {sellingBooksData.map(
        ({ img,infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => {
          return (
            <div className="container bestselling-container" key={index}>
                {/* left */}
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>
              {/* right */}
              <div className="selling-book-right">
                <TitleTypeTwo Title={"Best selling book"} className='sellingBookTitle'/>
                <div><small>{infoTitleTop}</small></div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5><span>{price}</span></h5>
                <Link to={shopbtnLink} className='btn'>
                 <small>Shop it now</small>
                 <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default BestSellingBook;
