import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../assets/img/carousal/korea.png'
import Slide2 from '../../assets/img/carousal/jeju.png'
import Slide3 from '../../assets/img/carousal/dj.png'
import ScrollDown from '../scroll-down/scroll-down.component'

import './my-carousal.style.css'

const MyCarousal = () => {
    return (
        <div Id="home">
            <Carousel controls={false} indicators interval={3000} pauseOnHover={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Student</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Programmer</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Producer</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default MyCarousal