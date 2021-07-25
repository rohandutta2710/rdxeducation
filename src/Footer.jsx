import React from "react";
import Brillica_logo from "./images/BRILLICA_LOGO.png";
import { FooterProp} from "./Prop";
const iconarr=[{icon:<i class="fab fa-facebook-square"></i>,hrefs:"https://www.facebook.com/rohandutta2710/"},{icon:<i class="fab fa-linkedin"></i>,hrefs:"#"},{icon:<i class="fab fa-twitter"></i>,hrefs:"https://twitter.com/RohanDu16382942?s=09"},{icon:<i class="fab fa-instagram"></i>,hrefs:"https://www.instagram.com/rohandutta2000/"}]
class Footer extends React.Component{
    render(){
         return(
             <>
             <div className="footer">
                 <div className="footer-left">
                        <h1>LOCATION</h1>
                        <p>12/87 Geeta Colony, East Delhi, Delhi,110031</p>
                        <div className="number">
                        <i class="fas fa-phone-volume"></i>
                            <a href="tel:9811078851" className="phone-number1"><p className="footer-phone1">+91 9811078851</p></a>
                            <a href="tel:9811827044" className="phone-number2"><p className="footer-phone2">+91 9811827044</p></a>
                        </div>
                        <div className="mail">
                            <i class="fas fa-envelope"></i>
                             <a href="mailto:rohandutta27102000@gmail.com" className="footer-mail">rohandutta27102000@gmail.com</a>
                        </div>
                 </div>
                 <div className="footer-right">
                 <a href="/"><img src={Brillica_logo} className="header-brillica-logo"/></a>
                 <div className="footericon">
                     {iconarr.map((value)=>{return <FooterProp footer={value}/>})}
                 </div>
                 </div>
             </div>
             </>
         );
    }
}
export default Footer;