import { Link } from "react-router"
export const Navbar =()=>{
    return(
       <nav>
        <div>
<Link to={"/"}> Social <span>.media</span></Link>
{/** desktop links */}
<div>
<Link to={"/"}>Home</Link>
<Link to={"/create"}>Create Post</Link>
<Link to={"/communities"}>communities</Link>
<Link to={"/community/create"}>Create Community </Link>
</div>
        </div>
       </nav>
    )
}