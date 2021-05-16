import help1 from '../images/help1.jpg';
import help2 from '../images/help2.jpg';
import help3 from '../images/help3.jpg';
import help4 from '../images/help4.jpg';
import help5 from '../images/help5.jpg';
import help7 from '../images/help7.jpg';
import "../Components/Gallery.css"


const Gallery = () => {
    return ( 
        <div className="gallery-section">
            <section className="gallery">
                    <div class="container text-center">
                        <h1>GALLERY</h1>
                        <div class="row text-center">
                            <div class="col-md-4 making-fluid">
                                <img src={help1} alt="Web images" class="web"/>
                                <h4> Helped in Hospital</h4>
                                <p class="par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus, repudiandae iure molestiae, sint eaque optio
                                totam ad, quo minima dolore. Culpa id minima distinctio, aut soluta laudantium nam, molestias dignissimos debitis repellat
                                qui error facere fugit sit neque.</p>
                            </div>
                            <div class="col-md-4 making-fluid">
                                <img src={help2} alt="app images" class="web"/>
                                <h4>Helped in villages</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus, repudiandae iure molestiae, sint eaque optio
                                totam ad, quo minima dolore. Culpa id minima distinctio, aut soluta laudantium nam, molestias dignissimos debitis repellat
                                qui error facere fugit sit neque.</p>
                            </div>
                            <div class="col-md-4 making-fluid">
                                <img src={help3} alt="machine images" class="web"/>
                                <h4>Helped in street </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus, repudiandae iure molestiae, sint eaque optio
                                totam ad, quo minima dolore. Culpa id minima distinctio, aut soluta laudantium nam, molestias dignissimos debitis repellat
                                qui error facere fugit sit neque.</p>
                            </div>
                            <div class="col-md-4 making-fluid">
                                <img src={help4} alt="dp images" class="web"/>
                                <h4>Helped in villages</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus, repudiandae iure molestiae, sint eaque optio
                                totam ad, quo minima dolore. Culpa id minima distinctio, aut soluta laudantium nam, molestias dignissimos debitis repellat
                                qui error facere fugit sit neque.</p>
                            </div>
                            <div class="col-md-4 making-fluid">
                                <img src={help5}alt="Ai images" class="web"/>
                                <h4>Helped in Schools </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus, repudiandae iure molestiae, sint eaque optio
                                totam ad, quo minima dolore. Culpa id minima distinctio, aut soluta laudantium nam, molestias dignissimos debitis repellat
                                qui error facere fugit sit neque.</p>
                            </div>
                            <div class="col-md-4 making-fluid">
                                <img src={help7} alt="Ethical images" class="web"/>
                                <h4>Helped in villages</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minus, repudiandae iure molestiae, sint eaque optio
                                totam ad, quo minima dolore. Culpa id minima distinctio, aut soluta laudantium nam, molestias dignissimos debitis repellat
                                qui error facere fugit sit neque.</p>
                            </div>
                        </div>
                        <button type="button" class="btn">know More</button>
                    </div>
            
                </section>
            </div>
     );
}
 
export default Gallery;