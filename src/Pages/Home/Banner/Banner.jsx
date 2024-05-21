import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/m4d4kD8/tim-toomey-h-s-U3-LASp-JY-unsplash.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/DztMG15/mgg-vitchakorn-g-JSq-KRZdrwo-unsplash.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/qFK4TJ7/tim-toomey-pe9dv-M1r-Qk-M-unsplash.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/cwsSL0R/edward-franklin-Nb-Q-M3-Cdzg-unsplash.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/RBR97vV/lightscape-0-Bhs-N70-JVA8-unsplash.jpg" />

            </div>
            <div>
                <img src="https://i.ibb.co/t4DGfd3/ella-olsson-fx-JTl-g-Dh28-unsplash.jpg" />

            </div>
        </Carousel>
    );
};

export default Banner;