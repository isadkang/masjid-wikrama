import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DataView from "../components/DataView"
import Banner from "../components/Banner"
import FirstContent from "../components/FirstContent"
import SecondContent from "../components/SecondContent"
import ThirdContent from "../components/ThirdContent"
import GalleryItem from "../components/GalleryItem"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <DataView />
            <Banner />
            <FirstContent />
            <SecondContent />
            <ThirdContent />
            <GalleryItem />
            <Footer />
        </>
    )
}

export default Home