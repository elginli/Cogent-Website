import './Projects.css'
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
import Bar from '../assets/images/Bar.jpeg'
import Boba from '../assets/images/Boba.jpeg'
import Burlingame from '../assets/images/Burlingame.jpeg'
import resturant from '../assets/images/resturant.jpeg'
import stair1 from '../assets/images/stair1.jpeg'
import stair2 from '../assets/images/stair2.jpeg'


import React, { useState } from 'react'

const imageSet1 = [interior1, interior2, interior3]
const imageSet2 = [interior4]
const imageSet3 = [interior5, interior7]
const imageSet4 = [interior9, interior8]
const imageSet5 = [interior16, house2, house1]
const imageSet6 = [interior11, interior12, interior13, interior14]
const imageSet7 = [interior15]
const imageSet8 = [interior20, interior21, interior6, interior10, interior17, interior18, interior19]
const imageSet9 = [Bar]
const imageSet10 = [Burlingame]
const imageSet11 = [Boba]
const imageSet12 = [resturant]
const imageSet13 = [stair1, stair2]

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


const Projects = () => {
    return (
        <div>
            <h1>Project Gallery</h1>
            <div className='project'>
                <Slide images={imageSet1} title="Kitchen Remodel"
                    description="Interior kitchen remodel in San Francisco, California." 
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet8} title="Basement Remodel"
                     description="Interior housing remodel in San Francisco California."
                     link = {<span> <a href="https://www.architecturaldigest.com/story/a-grungy-san-francisco-basement-became-a-contemporary-english-cottage" target="_blank" rel="noreferrer">
                                Read more here
                            </a>.
                        </span>
                    }
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet2} title="Boba Shop"
                    description="Interior Boba Shop remodel in San Carlos, California." 
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet3} title="Kitchen Remodel"
                    description="Interior kitchen remodel in Oakland, California."
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet4} title="Basement Remodel"
                    description="Interior basement remodel in San Francisco, California."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet5} title="Exterior Construction"
                    description="Exterior housing construction in Oakland, California"
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet6} title="Studio Remodel"
                    description="Interior building construction in San Francisco, California."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet7} title="Exterior Remodel"
                    description="Exterior house remodel in San Francisco, California."
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet9} title="Bar Remodel"
                    description="Bar remodel in San Francisco, California."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet10} title="Exterior remodel"
                    description="House exterior remodel in Burlingame, California."
                    category="Category: Residential"/>
            </div>
            <div className='project'>
                <Slide images={imageSet11} title="Boba Shop"
                    description="Boba shop constrcution in San Francisco, California."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet12} title="Interior Remodel"
                    description="Resturant interior remodel in San Francisco, California."
                    category="Category: Commercial"/>
            </div>
            <div className='project'>
                <Slide images={imageSet13} title="Stair Remodel"
                    description="SF City stair remodel for in San Francisco, California."
                    category="Category: Commercial"/>
            </div>

        </div>
    );
};

export default Projects;