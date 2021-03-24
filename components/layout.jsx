import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout(props){
    return (
        <main>
            <Navbar/>
            {props.children}
            <Footer/>
        </main>
    )
}