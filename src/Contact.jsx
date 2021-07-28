import React from "react";
import Header from "./Header.jsx";
import { Helmet } from "react-helmet";
import Footer from "./Footer.jsx";
import {Contactprop} from "./Prop.jsx";
import PageLoader from "./LoaderPage.jsx";
const contactarr=[{stateName:"U.P.",address:"A-75 Rajeev Nagar, Sangam Vihar, 201301 ",number:"+91 9811078851",hrefs:""},
{stateName:"Delhi",address:"12/87 Geeta Colony, East Delhi, Delhi,110031",number:"+91 9811078851",hrefs:""},
{stateName:"Gurgaon",address:"Golf View Corporate Tower, Gurugram, Haryana 122002",number:"+91 9811078851",hrefs:""}
];
const contactarrinternational=[{stateName:"Kenya",address:"Woodland rd, Nairobi, Kenya",number:"+91 9811078851",hrefs:""},
{stateName:"Dubai",address:"Edoxi Training Institute Dubai",number:"+91 9811078851",hrefs:""}];
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"",email:"",phoneno:"",course:"",country:"",loading:true};
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({loading:false})},2000)
    }
    formchange=()=>{
        // this.setState({name:document.getElementById("name").innerText,email:document.getElementById("email").innerText,phoneno:document.getElementById("phone").innerText,course:document.getElementById("course").innerText,country:document.getElementById("country").innerText});
    }
    render(){
        return(
            <>
            <Helmet>
                <title>RDX Education | Contact</title>
            </Helmet>
            {this.state.loading?<PageLoader></PageLoader>:<>
                <Header/>
                <div className="contact">
                    <h1>Contact us</h1>
                    <p>Fill up the form our team will get back to you back within 24 hours </p>
                </div>

                <div className="location">
                <h1>INDIA</h1>
                    <div className="loc">
                    
                        {contactarr.map((value)=>{return <Contactprop contact={value}/>})}
                    </div> 
                </div>
                <div className="location">
                <h1>INTERNATIONAL</h1>
                    <div className="loc">
                        {contactarrinternational.map((value)=>{return <Contactprop contact={value}/>})}
                    </div>
                </div>

                <div className="contact-form">
                    <span>Let us Help You</span>
                    <br/><br/>
                    <br/>
                    <form onSubmit="" className="forms">
                        Name: <input type="text" maxLength="20"  onChange={this.formchange} id="name" required/><br/>
                        Email: <input type="email" onChange={this.formchange} id="email"  required/><br/>
                        Phone No: <input type="tel"   onChange={this.formchange} id="phone" required/><br/>
                        Course: <select  onSelect={this.formchange} id="course">
                        <option>Select Course</option>
                            <option>Full Stack Web Development</option>
                            <option>Java Web Development</option>
                            <option>Python Programming</option>
                        </select>
                         <br/>
                        Country: <select onSelect={this.formchange} id="country">
                        <option>Select Country</option>
                            <option>India</option>
                            <option>Dubai</option>
                            <option>Kenya</option>
                        </select>
                         <br/>
                         <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <Footer/>
            </>}
            </>
        );

    }
}

export default Contact;