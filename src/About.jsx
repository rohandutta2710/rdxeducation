import React from "react";
import "./index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { IndustryAssociation } from "./Slider.jsx";
import PageLoader from "./LoaderPage";
import { Helmet } from "react-helmet";
class About extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={loading:true}
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({loading:false})},2500)
    }
    render(){
        return(
            <>
            <Helmet>
                <title>RDX Education | About</title>
            </Helmet>
            {this.state.loading?<PageLoader/>:<>
                <Header/>
                    <div className="about">
                        <h1>&nbsp;About us&nbsp;</h1>
                        <div className="about-paragraphs">
                        <div className="about-left">
                            <p>RDX Education is a trusted training provider and leading provider at high quality , innovative and industry relevant IT skills, empowering and building IT aspirants with across-the-board knowledge with a vision to create a fleet of the smarter workforce for global organizations. With a team of dedicated and knowledgeable learning professionals having profound subject-matter expertise, we provide blended IT training solutions to map all your IT learning needs.</p>
                        </div>
                        <div className="about-right">
                            <p>RDX Education brings forth an array of specialized and in-demand IT training courses in diverse domains including Data Science, Data Analytics, Project Management, Cloud Computing, Cyber Security, Development and Robotics and much more.<br/>RDX Education maintains strategic partnerships with top IT certification providers like IBM, Microsoft, CloudEra Connect , Blockchain Training Alliance and many more.</p>
                        </div>
                        </div>
                    </div>
                    <IndustryAssociation/>
                <Footer/>
            </>}
            </>
        );
    }
}
export default About;