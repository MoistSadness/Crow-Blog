import { useState, useEffect } from "react"
import { getCategories } from "../services"
import Link from "next/link"

interface Category {
    title: String,
    slug: String
}

export default function Categories(){
    const [categories, setCategories] = useState<any[]>([])
    //console.log(categories)

    useEffect(() => {
        getCategories().then((data:any) => setCategories(data))
    },[])

    function viewCategories(){
        return categories.map((category: Category, index: any) => (
            <div key={index}>
                <Link href={`/categories/${category.slug}`}>{category.title}</Link>
            </div>
        ))
    }

    return(
        <div className="bg-[color:var(--color-bg-secondary)] p-0 lg:p-8 mb-8 pb-12 rounded">
            <h3 className="text-xl mb-4">Categories</h3>
            {viewCategories()}
        </div>
    )
}