export default function Author({author}:any){
    //console.log(author)
    return(
        <div className="flex flex-row">
            <img src={author.profilePhoto.url} width='80rem' height='80rem' />
            <span>{author.name}</span>
        </div>
    )
}