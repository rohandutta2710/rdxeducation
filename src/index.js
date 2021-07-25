import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing.jsx";

ReactDOM.render(<>
                    <BrowserRouter>
                        <Routing/>
                    </BrowserRouter>
                </>
                ,document.getElementById("root"));