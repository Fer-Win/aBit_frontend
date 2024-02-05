
import Releases from './Releases'
import VideoCardContainer from './VideoCardContainer'

const ReleasesContainer = () => {
  return (
    <div className='flex flex-col mx-20 w-full h-[60vh] mb-40 mt-44'>
        <Releases/>
        <VideoCardContainer></VideoCardContainer>
      </div>
  )
}

export default ReleasesContainer