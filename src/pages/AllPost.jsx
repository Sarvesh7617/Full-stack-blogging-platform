import React, { useState } from "react";
import { Container, PostCard } from "../components/index";
import databaseAuth from "../appwrite/Dataconfig";




const AllPost=()=>{

    const [posts,setPost]=useState([]);
    databaseAuth.getPosts([]).then((posts)=>{
        if(posts)
          setPost(posts.documents)
    })
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                       <div key={post.$id} className="px-5">
                        <PostCard {...post}/>                   {/*{...posts}-> post={posts*/}
                       </div> 
                    ))}
                </div>
            </Container>
        </div>
    )
}


export default AllPost