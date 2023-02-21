import Head from 'next/head'
import Navbar from './Navbar/Navbar'

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Navbar />
            <div className='container mx-auto px-40 mb-8'>
                <Head>
                    <title>Raccoon Country</title>
                </Head>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

                {children}
                </div>
            </div>
        </>
    )
}