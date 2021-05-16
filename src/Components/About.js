import pic from '../images/react.png';
import "../Components/About.css";

const About = () => {
    return ( 
        <div className="about-component">
            <section className="about-us">

                <div class="container">
                    <h1 class="titles">About US</h1>
                    <div class="about-content">
                        <div class="col-md-5">
                            <h3>Why we're different</h3>
                            <p>
                                A donation is a gift for charity, humanitarian aid, or to benefit a cause. 
                                A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles. A donation may satisfy medical needs such as blood or organs for transplant. Wikipedia
                                The sparks foundation is working to bring parity in education, making sure children have equal opportunity at success, irrespective of the financial background.
                            </p>
                        </div>
                        <div class="col-md-7 text-center">
                            <div class="video">
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/wi_M1Fb4SaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="project-container">
                <div className="project">
                   <div className="title">
                        <img src ={pic}  alt="Web images"/>
                        <h2>A REACT BASED PROJECT</h2>
                   </div>
                    <div className="project-content">
                        <h3>Functionalities:</h3>
                        <p>The website aims for the purpose of demonstration of Payment Gateway. It is capable of:</p>
                        <ul>
                            <li>Accepting donation amounts.</li>
                            <li>Sending confirmation receipt to the donor through email instantly</li>
                            <li>Notifying the amount of donation to the organisation</li> 
                        </ul>
                        <p>The payment gateway used in RazorPay.</p>
                    </div>                  
                </div>
            </div>
 
            </section> 
                   
           
        </div>
     );
}
 
export default About;