import './App.css';
import Router from "./components/Router"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <Router />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
