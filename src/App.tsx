
import './App.css'

import ReleasesContainer from './components/ReleasesContainer';
import HeroSection from './components/HeroSection';
import ShareButton from './components/ShareButton';


function App() {


  return (
  <div className='relative'>
      <HeroSection/>
  {/* <div className='bg-red-400'>
             <div className='h-[350px] '>
        <img src='https://s3-alpha-sig.figma.com/img/476d/21b6/b66d780a7fbb10091dc98cfc3c3974b4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOLFGBWgO7o7xtyUWi78HlhehDSr2qpDvGXjNaNzO~BjdmAu~ZfVUiaFPrh6WWi7nfn88vbAazOYERqxqCaPvo1v31riwj9qINM~ZaCiyxj9-eSOXod9YzpxEyGM0icddt-xjd0VMaHK4FH9VqJKCjpG4W4laY1ir9PZ9GCv-GpyLKTQNZ-hrBFlvaJ2qtnTvc5v6VOgtM-X4koEgzJKkkDE2kwXRM8mh9QXP8~wn0CwH3Leph9LUXvHyQBB~EOwajo2TTd4QMc22wbDUtl2l2LCaJ349vaPshvIAOeCbuq4OxuK~uX1JBqt0OKq1ln4lLxU5P-BMn8iIQX4auuFSg__' alt='hero' className='w-full h-full object-cover'/>
      </div>
      <ScrollBanner/>
      
        <ProfileCard/>

     
        </div> */}
      
      <ReleasesContainer/>

  <ShareButton/>
  </div>
     

  )
}

export default App
