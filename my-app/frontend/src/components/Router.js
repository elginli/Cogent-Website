import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Projects from "../pages/Projects"
import Testing from '../pages/Testing'
import Header from "./Header"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'


function Router(){
    const Layout = () =>{
        return(
          <>
            <Header />
            <Outlet />
          </>
        )
    }

    const BrowserRoutes = () =>{
        return(
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element={<Layout />} >
                        <Route index element={<Home />} /> 
                        <Route path="/about" element={<About />} /> 
                        <Route path="/contact" element={<Contact />} /> 
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/testing" element={<Testing />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return(
        <BrowserRoutes />
    )
}

    
export default Router;
