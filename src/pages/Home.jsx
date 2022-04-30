import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


function Home() {
  return (
    <div>
      {/* Announcements */}
      <Announcements />
        {/* Nav */}
        <Navbar />

        {/* Slider */}
        <Slider />

        {/* Categories */}
    </div>
  )
}



export default Home