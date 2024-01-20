import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import data from '../Shared/Constant/constantdata'

function MyCarouselComp() {
    return (
        <div>
            {/* <h2>This is carousel </h2>
            <Button variant='outline-dark' >Button</Button> */}
            <Carousel fade>
                <Carousel.Item>
                    <img src={data.Tree} alt='tree' style={{ height: "400px", width: "400px" }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={data.Naruto} alt='Naturo' style={{ height: "400px", width: "400px" }} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={data.Aizen} alt='Aizen' style={{ height: "400px", width: "400px" }} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarouselComp
