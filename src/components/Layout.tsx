import Navbar from "./Navbar";
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.scss'

export default function Layout({ children }) {
    return (
        <body>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </body>
    )
}