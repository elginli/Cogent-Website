import "./Home.css"
import materialPicking from '../assets/images/materialPicking.jpeg'
import projectMangement from '../assets/images/projectMangement.jpeg'
import stockBluePrint from '../assets/images/stockBluePrint.jpeg'

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="headline">Construction & Consulting Expertise</h1>
            <p className="subtext">We engineer construction solutions and insightful consulting to create your projects from the ground up.</p>

            <div className="services-container">
                <div className="service">
                    <img src={materialPicking} alt="Layout Design" />
                    <p>Material Selection</p>
                </div>
                <div className="service">
                    <img src={projectMangement} alt="3D Renderings and Animations" />
                    <p>Project Mangement</p>
                </div>
                <div className="service">
                    <img src={stockBluePrint} alt="Material Selections" />
                    <p>Layout Design</p>
                </div>
            </div>

            <div className="image-background"></div>

            <div className="our-work-container">
                <h1 className="our-work-header">OUR PAST WORKS</h1>
                <p className="description">
                Want to see more of our previous designs and works?
                </p>
                <button onClick={() => window.location.href = '/projects'}>View Projects</button>
            </div>

        </div>
    )
}

export default Home;