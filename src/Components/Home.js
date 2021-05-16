import img from '../images/logo.png';
import "../Components/Home.css";
import Gallery from './Gallery';
import About from './About';

const Home = () => {
    return ( 
        <div className="home-component">
            <div className="main-container">
                    <img src={img} alt=""/>
                    <div className="content">
                        <h1>Arch Foundation</h1>
                        <h3>We Connect People</h3>          
                        <p>A donation is a gift for charity, humanitarian aid, or to benefit a cause. A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles. A donation may satisfy medical needs such as blood or organs for transplant. Wikipedia</p>
                        <div class="razorpay-embed-btn" 
                            data-url="https://pages.razorpay.com/pl_Gxg8OSiq4ukB4Q/view" 
                            data-text="Donate Now" 
                            data-color="#22161C" 
                            data-size="medium"
                            style={{
                            position:"absolute",
                            top:"470px",
                            left:"940px",                
                        }}>
                        </div>            
                    </div>
            </div>
            <Gallery />  
            <About />                   
        </div>
     );
}
 
export default Home;