import React from "react";
import "./slider.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { Sliderprop,CourseSlider } from "./Prop";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import slider4 from "./images/slider4.jpg";
//industry assopciation
import industryimg1 from "./images/awsslider.png";
import industryimg2 from "./images/blockchainslider.png";
import industryimg3 from "./images/certnexusslider.png";
import industryimg4 from "./images/clouderaslider.png";
import industryimg5 from "./images/ibmslider.png";
import industryimg6 from "./images/intelslider.png";
import industryimg7 from "./images/maprslider.png";
import industryimg8 from "./images/microsoftslider.png";

//course cards
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
import coursecard22 from "./images/courses/ITIL.png";
import coursecard23 from "./images/courses/prince.png";

var coursecard=[{img:coursecard1,content:"Advance Excel Training Program",hrefs:"#"},{img:coursecard2,content:"Microsoft Azure Training",hrefs:"#"},
{img:coursecard3,content:"AWS Training and Certification courses",hrefs:"#"},{img:coursecard4,content:"Big Data Hadhoop Administration Training Course",hrefs:"#"},
{img:coursecard5,content:"Machine Learning",hrefs:"#"},{img:coursecard12,content:"AI and Deep Learning",hrefs:"#"},{img:coursecard6,content:"OpenCV Training Course",hrefs:"#"},
{img:coursecard7,content:"Microsoft Power BI Training Program",hrefs:"#"},{img:coursecard8,content:"Python Programming",hrefs:"#"},
{img:coursecard9,content:"R Using Python",hrefs:"#"},{img:coursecard10,content:"SAS Training Course",hrefs:"#"},
{img:coursecard11,content:"Tableau",hrefs:"#"},{img:coursecard13,content:"Certified Scrum Master Training",hrefs:"#"},
{img:coursecard14,content:"Java Web Development",hrefs:"#"},{img:coursecard15,content:"Full Stack Development Certification",hrefs:"#"},
{img:coursecard16,content:"Certified Blockchain Developer Hyperledger Fabric(CBDH) Training",hrefs:"#"},{img:coursecard17,content:"Certified Blockchain Developer-Ethereum",hrefs:"#"},
{img:coursecard18,content:"Certified Blockchain Foundation",hrefs:"#"},{img:coursecard19,content:"IOT Training Course",hrefs:"#"},
{img:coursecard20,content:"IBM - SPSS Training",hrefs:"#"},{img:coursecard21,content:"Certified Blockchain Solution Architect ( CBSA ) Training",hrefs:"#"},
{img:coursecard22,content:"ITIL V4 Training",hrefs:"#"},{img:coursecard23,content:"PRINCE2 Foundation & Practitioner Certification Training",hrefs:"#"}
];

var coursecardnew=[coursecard[0],coursecard[1],coursecard[2]];
var q=2,p=0;
var industry=[industryimg1,industryimg2,industryimg3,industryimg4,industryimg5,industryimg6,industryimg7,industryimg8];
var img=[slider1,slider2,slider3,slider4];
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={coursestate:coursecardnew.map((value)=>{return <CourseSlider courseimages={value} ref={this.myref}/>})
        };
        
    }
    SliderbtnsRight=()=>{
        if(q<coursecard.length-1){
            coursecardnew=[];
            p=0;
            for(var j=q+1;j<=q+3;j++){
                if(j<coursecard.length){
                    coursecardnew[p]=coursecard[j];
                    p++;
                }
            }
            q+=coursecardnew.length;
            this.setState({coursestate:coursecardnew.map((value)=>{return <CourseSlider courseimages={value}/>})})
        }
    }
    SliderbtnsLeft=()=>{
        if(q>coursecardnew.length){
            var len=coursecardnew.length;
            coursecardnew=[];
            p=0;
            for(var j=q-len-2;j<=q-len;j++){
                if(j>=0){
                    coursecardnew[p]=coursecard[j];
                    p++;
                }
            }
            q=q-len;
            this.setState({coursestate:coursecardnew.map((value)=>{return <CourseSlider courseimages={value}/>})})
        }
    }
    render(){
        return(
            <>
            <Carousel>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={img[0]} alt="Loading"/>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={img[1]} alt="Loading"/>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={img[2]} alt="Loading"/>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={img[3]} alt="Loading"/>
                    </Carousel.Item>
            </Carousel>


            {/* industry association */}
            <IndustryAssociation/>

            {/* courses in form of card*/}
            <div className="course-card">
                <div className="course" id="course">  
                    <button onClick={this.SliderbtnsLeft}><span><i class="fas fa-long-arrow-alt-left"></i></span></button> 
                         {this.state.coursestate}
                    <button onClick={this.SliderbtnsRight}><span><i class="fas fa-long-arrow-alt-right"></i></span></button> 
                </div>
            </div>
            </>
        );
    }
}
class IndustryAssociation extends React.Component{
    render(){
        return(
            <>
                <div className="industry-association">
                    <h1>Our Industry Association</h1>
                    <div className="industry-marquee">
                        <div className="industry-img">
                            <marquee Scrollamount="5">
                                {industry.map((value)=>{return <Sliderprop industryimages={value}/>})}
                            </marquee>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Slider;
export {IndustryAssociation};