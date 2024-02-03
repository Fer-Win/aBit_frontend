
import './App.css'
import VideoCard from './components/VideoCard'

function App() {


  return (
    <>
      <h2 className='text-6xl font-medium font-mono'>aBit Project</h2>
      <VideoCard title='Mr.Beast' shares={317} offered={75} raised={9510} imgurl='https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></VideoCard>
    </>
  )
}

export default App
