import Link from "next/link";
import dynamic from "next/dynamic";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
    ssr: false,
});

/** The navbar component contains three sections:
 *   - The title that links to the homepage
 *   - Categories creates a dropdown of categories when it is clicked and closes it when it clicked again. 
 *     Each category has a link to the category page that shows the posts within that category.
 *   - Darkmode toggle button
 */
export default function Navbar() {
    return (
        <nav className=" bg-[color:var(--color-bg-secondary)] mx-auto p-3 flex flex-row items-center space-x-3">
            <h2 className="text-3xl ">Raccoon Country</h2>
            <div className="flex-grow flex flex-row">
                <h3 className="hidden md:block">Categories</h3>
                <ArrowDropDownIcon fontSize="medium"/>
            </div>
            <ThemeToggle />
        </nav>
    )
}