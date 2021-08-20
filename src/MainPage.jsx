import React from "react";
import Slider from "./Slider.jsx";
import Review from "./Review.jsx";
import { Helmet } from "react-helmet";
class MainPage extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>RDX Education</title>
                </Helmet>
                <Slider />
                <Review />
            </>
        );
    }
}
export default MainPage;