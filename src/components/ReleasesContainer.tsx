
import Releases from './Releases'
import VideoCardContainer from './VideoCardContainer'

const ReleasesContainer = () => {
  return (
    <div className='flex flex-col mx-5 md:gap-0 gap-52 items-center md:mx-20 h-fit md:h-[60vh] mb-40 mt-44'>
        <Releases/>
        <VideoCardContainer></VideoCardContainer>
      </div>
  )
}

export default ReleasesContainer