import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Image from "next/image";

import 'bootstrap/scss/bootstrap.scss'
import "@/styles/Slide.module.scss";
import iphone from './../../assets/img/iphone/iphone14_medium.jpg';
import iphonepro from './../../assets/img/iphone/pro/iphone14pro_medium.jpg';
import macbookpro from './../../assets/img/mac/macbookpro_large.jpg';
import homepod from './../../assets/img/homepod/homepod_large.jpg';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1500}>
                <Image
                    className="d-block w-100"
                    src={iphone}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="col">First slide label</h3>
                    <p className="col">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src={iphonepro}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Image
                    className="d-block w-100"
                    src={macbookpro}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={homepod}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;