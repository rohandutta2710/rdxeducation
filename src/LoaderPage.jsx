import React from "react";
// import ReactLoading from "react-loading";
// import { WaveLoading } from "react-loadingg";
class PageLoader extends React.Component{
    render(){
        return(
            <>
              <div class="bodies">
                <h1>Loading<span></span><span></span><span></span></h1>
                    <div class="outer-ring">
                        <div class="inner-ring">       
                        </div>
                    </div>
                </div>
            {/* <div className="pageLoader">
                  <WaveLoading color="#33308b"/>
            </div> */}
            </>

        );
    }
}
export default PageLoader;