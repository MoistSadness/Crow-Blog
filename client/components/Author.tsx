export default function Author({author}:any){
    //console.log(author)
    return(
        <div className="flex flex-row items-center space-x-2 mb-4 py-2">
            <img src={author.profilePhoto.url} width='80rem' height='80rem' />
            <span className="text-lg">{author.name}</span>
        </div>
    )
}