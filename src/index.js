import React, { state } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing.jsx";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import PageLoader from "./LoaderPage.jsx";

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }
    render() {
        return (
            <>
                {this.state.loading === true ? <PageLoader /> :
                    <BrowserRouter>
                        <Header />
                        <Routing />
                        <Footer />
                    </BrowserRouter>
                }
            </>
        );
    };
}

ReactDOM.render(<Index />, document.getElementById("root"));