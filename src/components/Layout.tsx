import Navbar from "./Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
    return (
        <div className='md:container'>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </div>
    )
}