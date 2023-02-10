import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
    ssr: false,
  });

export default function Navbar() {
    return (
        <nav> 
            Navbar
            <ThemeToggle />
        </nav>
    )
}