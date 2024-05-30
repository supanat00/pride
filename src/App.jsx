// React
import { useEffect } from 'react';
// Preloader
// import Preloader from './components/Preloader/Preloader';
// Style
import "./App.css";


// Components
import Hero from './components/Hero/Hero';
import Freedom from './components/Freedom/Freedom';
import WaitingRing from './components/WaitingRing/WaitingRing';
import Campaign from "./components/Campaign/Campaign"
import Marriage from "./components/Marriage/Marriage"
import Album from "./components/Album/Album"

export default function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <main className="relativew-full h-full bg-white-100 overflow-hidden">
      <Hero />
      <Freedom />
      <WaitingRing />
      <Campaign />
      <Marriage />
      <Album />
    </main>
  )
}
