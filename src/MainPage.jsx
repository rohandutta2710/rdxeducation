import React from "react";
import Header from "./Header.jsx";
import Slider from "./Slider.jsx";
import Review from "./Review.jsx";
import Footer from "./Footer.jsx";
import PageLoader from "./LoaderPage.jsx";
class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={loading:true};
    }
    componentDidMount(){    
        setTimeout(()=>{this.setState({loading:false});},2600)
    }
    render(){
        return(
            <>
                 {this.state.loading ? <PageLoader/>:<><Header/><Slider/><Review/><Footer/>
                 </> } 
            </>
        );
    }
}
export default MainPage;