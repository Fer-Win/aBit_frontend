
import './App.css'
import VideoCard from './components/VideoCard'
import DefaultVideoCard from './components/DefaultVideoCard';
import ScrollBanner from './components/Scrollbanner';
import ProfileCard from './components/ProfileCard';

function App() {


  return (
  <div>

      <div className='h-[350px]'>
        <img src='https://s3-alpha-sig.figma.com/img/476d/21b6/b66d780a7fbb10091dc98cfc3c3974b4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOLFGBWgO7o7xtyUWi78HlhehDSr2qpDvGXjNaNzO~BjdmAu~ZfVUiaFPrh6WWi7nfn88vbAazOYERqxqCaPvo1v31riwj9qINM~ZaCiyxj9-eSOXod9YzpxEyGM0icddt-xjd0VMaHK4FH9VqJKCjpG4W4laY1ir9PZ9GCv-GpyLKTQNZ-hrBFlvaJ2qtnTvc5v6VOgtM-X4koEgzJKkkDE2kwXRM8mh9QXP8~wn0CwH3Leph9LUXvHyQBB~EOwajo2TTd4QMc22wbDUtl2l2LCaJ349vaPshvIAOeCbuq4OxuK~uX1JBqt0OKq1ln4lLxU5P-BMn8iIQX4auuFSg__' alt='hero' className='w-full h-full object-cover'/>
      </div>

      <ScrollBanner/>
      <ProfileCard/>
      
      <div className='flex my-20 gap-12 mx-20'>
        <DefaultVideoCard/>
        <VideoCard title='Around Hungry Men' shares={317} offered={75} raised={9510} imgUrl={'https://images.unsplash.com/photo-1616922446456-575069ed35b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></VideoCard>
      
      
      </div>
  </div>
     

  )
}

export default App
