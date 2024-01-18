import { Navbar } from "@/components/Navbar"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return(
        <main>
            <Navbar/>
            {children}
        </main>
    )
}

export { Layout };