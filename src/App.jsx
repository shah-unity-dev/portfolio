import Footer from './components/Footer'
import ShippedGames from './components/ShippedGames'
import Experience from './components/Experience'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Experience />
            <ShippedGames />
            <Footer />
        </>
    )
}