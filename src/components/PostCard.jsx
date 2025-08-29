import React from "react";
import databaseAuth from "../appwrite/Dataconfig";
import {Link} from 'react-router-dom';


const PostCard=({$id,title,featureImage})=>{

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div>
                    <img src={databaseAuth.getFileView(featureImage)} 
                    className="rounded-xl w-30 bg-white"/>
                </div>
                <h2 className="text-xl font-bold">
                    {title}
                </h2>
            </div>
        </Link>
    )
}




export default PostCard;