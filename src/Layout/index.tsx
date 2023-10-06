import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/index';
import image from '../images/man.jpg'
import 'tailwindcss/tailwind.css';


type LayoutProps = {
  children: ReactNode;
};


const backgroundImageStyle = {
    backgroundImage: `url(${image})`,  
    backgroundSize: 'cover', 
  backgroundPosition: 'center center',
  backgroundHeight: '100 vh',
  };

export default function index({ children }: LayoutProps) {

  return (
   
    <div style={backgroundImageStyle} className='min-h-screen	'>
      <Navbar />
      {children}
      <Footer />
    </div >
  
  )
}
