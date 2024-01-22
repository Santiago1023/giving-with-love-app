import { FooterUI } from "@/components/Footer";
import { Navbar } from "@/components/Navbar"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return(
        <main>
            <Navbar/>
            {children}
            <FooterUI/>

        </main>
    )
}

export { Layout };