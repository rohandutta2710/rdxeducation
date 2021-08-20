import React from "react";
import { ServicesProp } from "./Prop.jsx";
import { Helmet } from "react-helmet";
const servicesarr = [{ title: "Technology Tranining", para: "Learn Highly demanded IT Training Programs with us.ONLINE | OFFLINE both modes available.", hrefs: "#" },
{ title: "Web and App Development Services", para: "RDX Education provides design and technology services to help companies create a great, cohesive experience across complex systeams.", hrefs: "#" },
{ title: "Recruitment Services", para: "Make your future part of ours. Join the RDX Education today.", hrefs: "/" },
{ title: "Internship", para: "Get IT Internships and Work Experience Guidance by Experts and work on live projects.", hrefs: "#" },
{ title: "Faculty Development Program", para: "Faculty Development Program is a skill development program specially designed for academic educators.", hrefs: "#" }];
class Services extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>RDX Education | Services</title>
                </Helmet>
                <div className="services-block">
                    <div className="services-outer">
                        {servicesarr.map((value) => { return <ServicesProp services={value} /> })}
                    </div>
                </div>
            </>
        );
    }
}
export default Services;