
import DefaultVideoCard from './DefaultVideoCard'
import VideoCard from './VideoCard'

const VideoCardContainer = () => {
  return (
    <div className='flex flex-col gap-y-7 items-center md:justify-normal w-full md:flex md:flex-row md:my-20 md:gap-12 '>
    <DefaultVideoCard/>
    <VideoCard title='Around Hungry Wolves' shares={317} offered={75} raised={9510} imgUrl={'https://images.unsplash.com/photo-1616922446456-575069ed35b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></VideoCard>
    <VideoCard title='Mr Beast' shares={976} offered={200} raised={10808} imgUrl={'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></VideoCard>
  
  
  </div>
  )
}

export default VideoCardContainer