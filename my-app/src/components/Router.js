import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Projects from "../pages/Projects"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'


function Router(){
    const Layout = () =>{
        return(
          <>
          </>
        )
    }

    const BrowserRoutes = () => {
        return(
            <BrowserRoutes>
                <Routes>
                    <Route path="/" element={<Home />} /> //home page
                    <Route path="/about" element={<About />} /> //about us page
                    <Route path="/contact" element={<Contact />} /> //contact page
                    <Route path="/projects" element={<Projects />} /> //projects
                </Routes>
            </BrowserRoutes>
        )
    }

    return(
        <BrowserRoutes />
    )
}

    
export default Router;
