import React from "react";
import { Link } from "react-router-dom";
import rdxeducation_logo from "./images/rdxeducation_logo.jpg";
import { FooterProp} from "./Prop";
const iconarr=[{icon:<i className="fab fa-facebook-square"></i>,hrefs:"https://www.facebook.com/rohandutta2710/"},{icon:<i className="fab fa-linkedin"></i>,hrefs:"#"},{icon:<i className="fab fa-twitter"></i>,hrefs:"https://twitter.com/RohanDu16382942?s=09"},{icon:<i className="fab fa-instagram"></i>,hrefs:"https://www.instagram.com/rohandutta2000/"}]
class Footer extends React.Component{
    render(){
         return(
             <>
             <div className="footer">
                 <div className="footer-left">
                        <h1>LOCATION</h1>
                        <p>12/87 Geeta Colony, East Delhi, Delhi,110031</p>
                        <div className="number">
                        <i className="fas fa-phone-volume"></i>
                            <a href="tel:9811078851" className="phone-number1"><p className="footer-phone1">+91 9811078851</p></a>
                            <a href="tel:9811827044" className="phone-number2"><p className="footer-phone2">+91 9811827044</p></a>
                        </div>
                        <div className="mail">
                            <i className="fas fa-envelope"></i>
                             <a href="mailto:rohandutta27102000@gmail.com" className="footer-mail">rohandutta27102000@gmail.com</a>
                        </div>
                 </div>
                 <div className="footer-right">
                 <Link to="/"><img src={rdxeducation_logo} className="header-rdxeducation-logo" alt="Loading"/></Link>
                 <div className="footericon">
                     {iconarr.map((value,index)=>{return <FooterProp footer={value} index={index}/>})}
                 </div>
                 </div>
             </div>
             </>
         );
    }
}
export default Footer;