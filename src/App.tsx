
import './App.css'
import VideoCard from './components/VideoCard'

function App() {


  return (
    <>
      <h2 className='text-6xl font-medium font-mono'>aBit Project</h2>
      <VideoCard title='Around Hungry Men' shares={317} offered={75} raised={9510} imgUrl={'https://images.unsplash.com/photo-1616922446456-575069ed35b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></VideoCard>
    </>
  )
}

export default App
