import './Testing.css'
import house1 from '../assets/images/house1.jpeg'
import house2 from '../assets/images/house2.jpeg'
import interior1 from '../assets/images/interior1.jpeg'
import interior2 from '../assets/images/interior2.jpeg'
import interior3 from '../assets/images/interior3.jpeg'
import interior4 from '../assets/images/interior4.jpeg'
import interior5 from '../assets/images/interior5.jpeg'
import interior6 from '../assets/images/interior6.jpeg'
import interior7 from '../assets/images/interior7.jpeg'
import interior8 from '../assets/images/interior8.jpeg'
import interior9 from '../assets/images/interior9.jpeg'
import interior10 from '../assets/images/interior10.jpeg'
import interior11 from '../assets/images/interior11.jpeg'
import interior12 from '../assets/images/interior12.jpeg'
import interior13 from '../assets/images/interior13.jpeg'
import interior14 from '../assets/images/interior14.jpeg'
import interior15 from '../assets/images/interior15.jpeg'
import interior16 from '../assets/images/interior16.jpeg'
import interior17 from '../assets/images/interior17.jpeg'
import interior18 from '../assets/images/interior18.jpeg'
import interior19 from '../assets/images/interior19.jpeg'
import interior20 from '../assets/images/interior20.jpeg'
import interior21 from '../assets/images/interior21.jpeg'

import React, { useState } from 'react'

const imageSet1 = [interior1, interior2, interior3]
const imageSet2 = [interior4]
const imageSet3 = [interior5, interior7]
const imageSet4 = [interior9, interior8]
const imageSet5 = [interior16, house2, house1]
const imageSet6 = [interior11, interior12, interior13, interior14]
const imageSet7 = [interior15]
const imageSet8 = [interior20, interior21, interior6, interior10, interior17, interior18, interior19]

const Slide = ({ images, title, description, link, category }) => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }
  

  return (
    <div className="project-container">
        <div className="description-box">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{link}</p>
            <div className="details">
                <p>{category}</p>
            </div>
            <div className="navigation">
                <button onClick={prevSlide} className='left-arrow'>&lt;</button>
                <button onClick={nextSlide} className='right-arrow'>&gt;</button>
            </div>
        </div>
        <div className="slider">
            {images.map((image, index) => (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                <img src={image} alt={`Project ${index + 1}`} className='image' />
                )}
            </div>
            ))}
        </div>
    </div>
    );
};


const Testing = () => {
    return (
        <div>
            <h1>Project Gallery</h1>
            <div className='project'>
                <Slide images={imageSet1} title="Project 1"
                    description="Interior kitchen remodel." 
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet8} title="Project 8"
                     description="Interior housing remodel."
                     link = {<span> <a href="https://www.architecturaldigest.com/story/a-grungy-san-francisco-basement-became-a-contemporary-english-cottage" target="_blank" rel="noreferrer">
                                Read more here
                            </a>.
                        </span>
                    }
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet2} title="Project 2"
                    description="Interior Boba Shop remodel." 
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet3} title="Project 3"
                    description="Interior kitchen remodel."
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet4} title="Project 4"
                    description="Interior basement remodel."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet5} title="Project 5"
                    description="Exterior housing construction."
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet6} title="Project 6"
                    description="Interior building construction."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet7} title="Project 7"
                    description="Exterior housing remodel"
                    category="Category: Residential"/>
            </div>

        </div>
    );
};

export default Testing;