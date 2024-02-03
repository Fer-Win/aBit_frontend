
import './App.css'
import VideoCard from './components/VideoCard'

function App() {


  return (
    <>
      <h2 className='text-6xl font-medium font-mono'>aBit Project</h2>
      <VideoCard title='Mr.Beast' shares={317} offered={75} raised={9510}></VideoCard>
    </>
  )
}

export default App
