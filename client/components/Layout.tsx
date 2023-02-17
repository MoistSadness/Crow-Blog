import Navbar from './Navbar/Navbar'

export default function Layout({ children }: {children: any}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}