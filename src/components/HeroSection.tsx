import ProfileCard from './ProfileCard'
import ScrollBanner from './ScrollBanner'
import heroImage from '../assets/hero-image.png';
const HeroSection = () => {
  return (
    <div>
      <div className='relative'>
        <div className='h-[350px] '>
          <img src={heroImage} className='w-full h-full object-cover'/>
        </div>
        <ScrollBanner/>
        <div className='md:absolute flex  top-56 left-20 z-30 '>
        
            <ProfileCard/>
     
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
