import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import ModalForm from "./ModalPopup.jsx";
class MenuHeader extends React.Component{
  render(){
    return(
      <>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">menu</button>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul className="menu-list">
                  <li><a href="/about" target="_blank">About Brillica</a></li>
                  <li><a href="/contact" target="_blank">Contact us</a></li>
                  <li><a href="/services" target="_blank">Our Services</a></li>
                  <li><a href="https://p.paytm.me/xCTH/18d23e1f" target="_blank">Pay Online</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#"><ModalForm/></a></li>
              </ul>
            </div>
        </div>
      </>
    );
  }
}

export default MenuHeader;
