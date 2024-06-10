import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar.jsx'
function HomePage() {
  return (
    <div className='homePage'>
        <div className="textContainer">
<div className="wrapper">
    <h1 className='title'>
        Find Real Estate & Get Your Dream Place
    </h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint architecto accusamus ad omnis veritatis, doloribus ducimus nostrum, itaque libero at impedit aspernatur obcaecati non assumenda dolore similique voluptatibus odio voluptatem?
    </p>
    <SearchBar/>
    <div className="boxes">
        <div className="box">
            <h1>16+</h1>
            <h2>Years of Experience</h2>
        </div>
        <div className="box">
        <h1>200</h1>
        <h2>Award Gained</h2>
        </div>
        <div className="box">
        <h1>1200+</h1>
        <h2>Property Ready</h2>
        </div>
    </div>
</div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage