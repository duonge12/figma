import Image from "next/image";
import { Inter } from "next/font/google";
import Button from '../../components/eventComp'
import { FaSpinner } from 'react-icons/fa';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const icon={
      default:'+',
      loading:<FaSpinner className="spin"/>
    };
    const background={
      default:'rgba(255, 255, 255, 1)',
      MouseEnter:'rgba(171, 255, 195, 1)',
      MouseLeave:'rgba(255, 255, 255, 1)',
      MouseDown:'rgb(34,139,34,1)',
      MouseUp:'rgba(128, 128, 128, 1)'
    }
    const textcolor={
      default:'rgb(143,188,143,1)',
      MouseEnter:'rgba(98, 72, 72, 1)',
      MouseLeave:'rgba(25, 30, 255, 1)',
      MouseDown:'rgb(34,129,34,1)',
      MouseUp:'rgba(18,0,60, 1)'
    }
 
  return (
    
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
      
          <Button 
            icon={icon} 
            backgroundColor={background}
            textColor={textcolor}
            textSize='35px'
            width='300px' height='150px'
            border='0.5px solid black'
            background='#363636'
            alignIcon='right'
          >
            Click me 
          </Button>
    

      
    </main>
  );
}
