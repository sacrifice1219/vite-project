import './Footer.css';

// import footer data

import { FootersLinksData } from '../../Data/Data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Footer>
      <div className="container footer-container">
        {/* about us */}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {
              FootersLinksData.Aboutus.map(({link, linkname}, index) =>{
                <li key={index}> <Link to={link}>{linkname}</Link> </li>
              })
            }
          </ul>
        </div>

        {/*discover  */}
        <div>
          <h4>Discover Us</h4>
          <ul className="Discover-params param-links">
            {
              FootersLinksData.Discover.map(({link, linkname}, index) =>{
                <li key={index}> <Link to={link}>{linkname}</Link> </li>
              })
            }
          </ul>
        </div>

        {/* ACCUUNT  */}
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {
              FootersLinksData.Myaccount.map(({link, linkname}, index) =>{
                <li key={index}> <Link to={link}>{linkname}</Link> </li>
              })
            }
          </ul>
        </div>

        {/*help */}
        <div>
          <h4>Help </h4>
          <ul className="help-params param-links">
            {
              FootersLinksData.Help.map(({link, linkname}, index) =>{
                <li key={index}> <Link to={link}>{linkname}</Link> </li>
              })
            }
          </ul>
        </div>
      </div>
    </Footer>
  )
}

export default Footer;