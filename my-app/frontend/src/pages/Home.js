import "./Home.css"
import materialPicking from '../assets/images/materialPicking.jpeg'
import projectMangement from '../assets/images/projectMangement.jpeg'
import stockBluePrint from '../assets/images/stockBluePrint.jpeg'

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="headline">Construction & Consulting Expertise</h1>
            <p className="subtext">We engineer robust construction solutions and insightful consulting to enhance your projects from the ground up.</p>

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
        </div>
    )
}

export default Home;