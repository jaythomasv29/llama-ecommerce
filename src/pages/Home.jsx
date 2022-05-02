import Announcements from '../components/Announcements/Announcements'
import Categories from '../components/Category/Categories'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import Products from '../components/Products/Products'
import Slider from '../components/Slider'


function Home() {
  return (
    <div>
      {/* Announcements */}
      <Announcements />
        {/* Nav */}
        {/* <Navbar /> */}

        {/* Slider */}
        <Slider />

        {/* Categories */}
        <Categories></Categories>

        {/* Popular Products */}
        <Products/>
        {/* Newsletter */}
        <Newsletter />
        {/* Footer */}
        <Footer />
    </div>
  )
}



export default Home