import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'
const Banner = () => {
    return (
        <div className="my-2">
              <Carousel infiniteLoop autoPlay >
                <div >
                    <img src={img1} className="rounded-2xl"/>

                </div>
                <div >
                    <img src={img2} className="rounded-2xl"/>

                </div>
                <div >
                    <img src={img3} className="rounded-2xl"/>

                </div>
                <div >
                    <img src={img4} className="rounded-2xl"/>

                </div>
                <div >
                    <img src={img5}  className="rounded-2xl"/>

                </div>
                <div >
                    <img src={img6} className="rounded-2xl" />  
                </div>  
               
                <div >
                    <img src="https://i.ibb.co/YfCfCXY/9a3fe0792d827c0f575ddbe741174a5d.jpg" className="rounded-2xl"/>
                    
                </div>
                <div >
                    <img src="https://i.ibb.co/zhQw2Z3/93c97e93345cf59563d53c632f417c0f.jpg" className="rounded-2xl"/>
                    
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;