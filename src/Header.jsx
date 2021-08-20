import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import rdxeducation_logo from "./images/rdxeducation_logo.jpg";
import HeaderProp from "./Prop.jsx";
import ModalForm from "./ModalPopup.jsx";
import MenuHeader from "./MenuHeader";
// images in dropdown
import coursecard1 from "./images/courses/advanceexcelcourse.jpg";
import coursecard2 from "./images/courses/azurecourse.png";
import coursecard3 from "./images/courses/awscourse.png";
import coursecard4 from "./images/courses/hadhoopcourse.png";
import coursecard5 from "./images/courses/machinecourse.png";
import coursecard6 from "./images/courses/opencvcourse.png";
import coursecard7 from "./images/courses/powerBIcourse.png";
import coursecard8 from "./images/courses/pythoncourse.png";
import coursecard9 from "./images/courses/rpythoncourse.png";
import coursecard10 from "./images/courses/SAScourse.png";
import coursecard11 from "./images/courses/tableaucourse.png";
import coursecard12 from "./images/courses/AIcourse.png";
import coursecard13 from "./images/courses/scrum.png";
import coursecard14 from "./images/courses/java.png";
import coursecard15 from "./images/courses/fullstackweb.png";
import coursecard16 from "./images/courses/hyperledger.png";
import coursecard17 from "./images/courses/ehtereum.png";
import coursecard18 from "./images/courses/blockchain.png";
import coursecard19 from "./images/courses/IOT.png";
import coursecard20 from "./images/courses/spss.png";
import coursecard21 from "./images/courses/blockchainarchitect.png";

const datascience=[{name:"Python Programming",hrefs:"#",imgs:coursecard8,months:3,trending:"Trending"},
{name:"Machine Learning using Python",hrefs:"#",imgs:coursecard5,months:3,new:"New"},
{name:"AI and Deep Learning",hrefs:"#",imgs:coursecard12,months:3,trending:"Trending"},
{name:"OpenCV Training",hrefs:"#",imgs:coursecard6,months:3,}];

const data_analytics=[{name:"Python Language",hrefs:"#",imgs:coursecard9,months:3,trending:"Trending"},
{name:"R Language",hrefs:"#",imgs:coursecard9,months:3,},
{name:"SAS Training Course",hrefs:"#",imgs:coursecard10,months:3,new:"New"},
{name:"Tableau",hrefs:"#",imgs:coursecard11,months:3,},
{name:"Microsoft Power BI Training Program",hrefs:"#",imgs:coursecard7,months:3,},
{name:"Advance Excel Training Program",hrefs:"#",imgs:coursecard1,months:3,trending:"Trending"},
{name:"Big Data Handoop Administration Training Course",hrefs:"#",imgs:coursecard4,months:3,}];

const cloud_computing=[{name:"AWS Training and Certification Course",hrefs:"#",imgs:coursecard3,months:3,},
{name:"Microsoft Azure Training",hrefs:"#",imgs:coursecard2,months:3,}];

const agile=[{name:"Certified Scrum Master Training",hrefs:"#",imgs:coursecard13,months:3,}];

const development=[{name:"Java Development",hrefs:"#",imgs:coursecard14,months:3,},
{name:"Full Stack Web Development",hrefs:"#",imgs:coursecard15,months:3,trending:"Trending"}];

const specialised=[{name:"Certified Blockchain Developer-Ethereum",hrefs:"#",imgs:coursecard17,months:3,},
{name:"Certified Blockchain Developer Hyperledger Fabric Training",hrefs:"#",imgs:coursecard16,months:3,},
{name:"Certified Blockchain Foundation",hrefs:"#",imgs:coursecard18,months:3,new:"New"},
{name:"Certified Blockchain Solution Architect (CBSA) Training",hrefs:"#",imgs:coursecard21,months:3},
{name:"Microsoft Power BI Training Program",hrefs:"#",imgs:coursecard7,months:3,trending:"Trending"},
{name:"IBM - SPSS Training1",hrefs:"#",imgs:coursecard20,months:3,new:"New"},
{name:"IOT Training Course",hrefs:"#",imgs:coursecard19,months:3}];


class Header extends React.Component{
    render(){
        return(
            <>
            <div className="header-main">
                <div className="header">
                <div className="header-left">
                    <MenuHeader/>
                    <Link to="/"><img src={rdxeducation_logo} className="header-rdxeducation-logo" alt="Loading"/></Link>
                    <button className="header-course1">COURSES<div className="course-i"><i className="fas fa-angle-down"></i></div>
                    <div className="header-course-dropdown">
                            <Link to="/services">Our Services</Link>
                            
                            <a href="#" className="data-science">Data Science Training Program <i className="fas fa-caret-down"></i>
                                <div className="dropdownss">
                                    {datascience.map((value)=>{return <HeaderProp headerdata={value}/>})}
                                </div>
                            </a>
                            
                            <a href="#" className="data-analytics">Data Analytics Training Program <i className="fas fa-caret-down"></i>
                            <div className="dropdownss">
                                    {data_analytics.map((value)=>{return <HeaderProp headerdata={value}/>})}
                                </div>
                            </a>
                            
                            <a href="#" className="cloud-computing">Cloud Computing <i className="fas fa-caret-down"></i>
                            <div className="dropdownss">
                                     {cloud_computing.map((value)=>{return <HeaderProp headerdata={value}/>})}
                                </div>

                            </a>
                            
                            <a href="#" className="agile">Agile and Scrum <i className="fas fa-caret-down"></i>
                            <div className="dropdownss">
                                    {agile.map((value)=>{return <HeaderProp headerdata={value}/>})}
                            </div>
                            </a>
                            
                            <a href="#" className="development">Development <i className="fas fa-caret-down"></i>
                            <div className="dropdownss">
                                     {development.map((value)=>{return <HeaderProp headerdata={value}/>})}
                                </div>
                            </a>
                            <a href="#" className="specialised">Specialised Training <i className="fas fa-caret-down"></i>
                            <div className="dropdownss">
                                    {specialised.map((value)=>{return <HeaderProp headerdata={value}/>})}
                                </div>
                            </a>
                            <a href="#">Cyber Security <i className="fas fa-caret-down"></i></a>
                    
                    </div>
                    </button>
                    </div>
                    <div className="header-right">
                        <Link to="/about"><p>About Us</p></Link>
                        <Link to="/contact"><p>Contact Us</p></Link>
                        <Link to="/services"><p>Our Services</p></Link>
                        <button className="header-button header-more">MORE  <div className="course-i"><i className="fas fa-angle-down"></i></div>
                        <div className="header-more-list">
                            <a href="https://p.paytm.me/xCTH/18d23e1f" target="_blank">Pay Online</a>
                            <Link to="#">Blog</Link>
                        </div>
                        </button> 
                        <ModalForm></ModalForm>
                    </div>
                </div>
                </div>
            </>
        );
    }
}
export default Header;