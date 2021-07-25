import React from "react";
import { ReviewProp } from "./Prop.jsx";
import RDX from "./images/review/rdx.jpg";
import Divya from "./images/review/divya.jpg";
import Divyafrnd from "./images/review/divyafrnd1.jpg";
import Gaurav from "./images/review/gaurav.jpg";
import Swati from "./images/review/swatisingh.jpg";
import Shewta from "./images/review/shewta.jpg";
import Amrita from "./images/review/amrita.jfif";
import Kunal from "./images/review/kunal.jfif";
import Imtiyaz from "./images/review/imtiyaz.jfif";

var reviewarr1=[{img:RDX,name:"Rohan Dutta",course:"Full Stack Web Development",description:"Course was too tough but teacher makes it too easy for us. The pace of teaching was slow so that everyone could grasp. Projects, in the end, helped alot to polish our skills and made our CV impressive...",icon:<i class="fab fa-linkedin"></i>,hrefs:"#"},
{img:Divya,name:"Divya Dutta",course:"Microsoft Power BI Training Program",description:"Group case studies really give a sense of teamwork, as it happens in regular classroom studies. It teaches us coordination and right attitude as a team. Apart from this there were so many project works...",icon:<i class="fab fa-quora"></i>,hrefs:"#"},
{img:Gaurav,name:"Gaurav",course:"AI & Deep Learning",description:"Course was too tough but teacher makes it too easy for us. The pace of teaching was slow so that everyone could grasp. Projects, in the end, helped alot to polish our skills and made our CV impressive.",icon:<i class="fab fa-linkedin"></i>,hrefs:"#"},
];

var reviewarr2=[{img:Divyafrnd,name:"Swati Jha",course:"Advance Excel Training Program",description:"Course was too tough but teacher makes it too easy for us. The pace of teaching was slow so that everyone could grasp. Projects, in the end, helped alot to polish our skills and made our CV impressive...",icon:<i class="fab fa-quora"></i>,hrefs:"#"},
{img:Swati,name:"Swati Singh",course:"Microsoft Azure Training",description:"Group case studies really give a sense of teamwork, as it happens in regular classroom studies. It teaches us coordination and right attitude as a team. Apart from this there were so many project works...",icon:<i class="fab fa-quora"></i>,hrefs:"#"},
{img:Shewta,name:"Shewta",course:"Python Programming",description:"Course was too tough but teacher makes it too easy for us. The pace of teaching was slow so that everyone could grasp. Projects, in the end, helped alot to polish our skills and made our CV impressive.",icon:<i class="fab fa-linkedin"></i>,hrefs:"#"},
];

var reviewarr3=[{img:Amrita,name:"Amrita Prajapati",course:"Machine Learning",description:"Course was too tough but teacher makes it too easy for us. The pace of teaching was slow so that everyone could grasp. Projects, in the end, helped alot to polish our skills and made our CV impressive...",icon:<i class="fab fa-linkedin"></i>,hrefs:"#"},
{img:Kunal,name:"Kunal",course:"Certified Blockchain Foundation",description:"Group case studies really give a sense of teamwork, as it happens in regular classroom studies. It teaches us coordination and right attitude as a team. Apart from this there were so many project works...",icon:<i class="fab fa-linkedin"></i>,hrefs:"#"},
{img:Imtiyaz,name:"Imtiyaz Ali",course:"SAS Training Course",description:"Course was too tough but teacher makes it too easy for us. The pace of teaching was slow so that everyone could grasp. Projects, in the end, helped alot to polish our skills and made our CV impressive.",icon:<i class="fab fa-quora"></i>,hrefs:"#"},
];
class Review extends React.Component{
    render(){
         return(
             <>
             <div className="review-main">
             <div className="review">
             <h1 className="reviewh1">Reviews & Ratings</h1>
             <h1 className="learners">What our learners have to say about us!</h1>
              <div className="review-block">
                <div className="reviewflex">
                    {reviewarr1.map((value)=>{return <ReviewProp review={value}/>})}
                    </div>
                </div>
                </div>
                </div>
                <div className="review-main">
             <div className="review">
             <div className="review-block">
                <div className="reviewflex">
                    {reviewarr2.map((value)=>{return <ReviewProp review={value}/>})}
                    </div>
                </div>
                </div>
                </div>
                <div className="review-main">
             <div className="review">
              <div className="review-block">
                <div className="reviewflex">
                    {reviewarr3.map((value)=>{return <ReviewProp review={value}/>})}
                    </div>
                </div>
                </div>
                </div>
             </>
         );
    }
}
export default Review;