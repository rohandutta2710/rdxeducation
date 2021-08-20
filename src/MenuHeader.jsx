import React from "react";
import ModalForm from "./ModalPopup.jsx";
import {Link} from "react-router-dom";
class MenuHeader extends React.Component{
  render(){
    return(
      <>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">menu</button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="menu-list">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact" >Contact us</Link></li>
                  <li><Link to="/services" >Our Services</Link></li>
                  <li><Link to="https://p.paytm.me/xCTH/18d23e1f" >Pay Online</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#"><ModalForm/></Link></li>
              </ul>
            </div>
        </div>
      </>
    );
  }
}

export default MenuHeader;
