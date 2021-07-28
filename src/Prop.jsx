import React from "react";
import Tilt from "react-vanilla-tilt";
import Blink from "react-blink-text";
class HeaderProp extends React.Component{
    render(){
        return(
        <>
            <a href={this.props.headerdata.hrefs}>
            <div className="header-inner-drop">
                    <div className="header-inner-left">
                        <img src={this.props.headerdata.imgs} alt="Loading"/>
                    </div>
                    <div className="header-inner-right">
                        <h5>{this.props.headerdata.name}</h5>
                        <p className="months">{this.props.headerdata.months} months</p>
                        {this.props.headerdata.trending ==="Trending" ?<p className="blink-trending"> <Blink className="blink-trending" text={this.props.headerdata.trending} color="red"></Blink></p>:<span></span>}
                        {this.props.headerdata.new === "New" ?<p className="blink-new"> <Blink className="blink-new" text={this.props.headerdata.new} color="white"></Blink></p>:<span></span>}
                    </div>
            </div>

            </a>

        </>);
    }
}
class Sliderprop extends React.Component{
    render(){
        return(
            <img src={this.props.industryimages} alt="Loading"/>
        );
    }
}

class CourseSlider extends React.Component{
    render(){
        return(
            <>
            <a href={this.props.courseimages.hrefs}>
                <div className="course-block">
                    <div className="course-slider">
                        <img src={this.props.courseimages.img} alt="Loading"/>
                        <p>{this.props.courseimages.content}</p>
                    </div>
                </div>
            </a>
            </>
        );
    }
}
class ReviewProp extends React.Component{
    render(){
         return(
             <>
             <Tilt className="tilt-review">
                <div className="reviewer-name">
                    <img src={this.props.review.img} alt="Loading"/>
                    <p className="name">{this.props.review.name}</p>
                    <p className="course-completed">{this.props.review.course}</p>
                </div>
                <div className="description">
                    <p className="description-p">{this.props.review.description}</p>
                    <a href={this.props.review.hrefs}><p>{this.props.review.icon}<span className="profile">Detailed Review</span></p></a>
                </div>
                </Tilt>
             </>

         );
    }
}

class FooterProp extends React.Component{
    render(){
        return(
            <>
            <a href={this.props.footer.hrefs} target="_blank">{this.props.footer.icon}</a>
            </>
        );
    }
}

class ServicesProp extends React.Component{
     render(){
          return(
              <>
              <Tilt className="tiltcss" options={{scale:4,max:200,speed:4000,glare:true}}>
                <div className="title">
                    <h1>{this.props.services.title}</h1>
                </div>
                <div className="para">
                    <p>{this.props.services.para}</p>
                    </div>
                    <a href={this.props.services.hrefs}>Know More   &gt;</a>
                </Tilt>
              </>
          );
     }
}

class Contactprop extends React.Component{
    render(){
        return(
            <>
                <div className="location-inner">
                    <h1>{this.props.contact.stateName}</h1>
                    <p>{this.props.contact.address}</p>
                    <p className="loc-number"><i class="fas fa-phone-square-alt"></i> {this.props.contact.number}</p>
                    <a href={this.props.contact.hrefs}><i class="fas fa-map-marker"></i> View Map</a>
                </div>
            </>
        );
    }
}

export default HeaderProp;
export {Sliderprop,CourseSlider,ReviewProp,FooterProp,ServicesProp,Contactprop};