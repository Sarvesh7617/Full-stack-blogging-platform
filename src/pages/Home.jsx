import React, { useEffect, useState } from "react";
import databaseAuth from "../appwrite/Dataconfig";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components/index";
import { current } from "@reduxjs/toolkit";



const Home=()=>{

    const [posts,setPost]=useState([]);
    const [user, setUser] = useState(null);
    useEffect(()=>{
            databaseAuth.getPosts().then((posts)=>{
                if(posts)
                  setPost(posts.documents)
            })


            authService.getCurrentUser().then((currentUser)=>{
                setUser(currentUser)
            })
    },[])

    if (posts.length===0)
    {
        return (
            <div className="w-full py-8 mt-4 text-center mt-15.5 mb-15">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {user?"No public posts available yet.":"Please Login to see all Post"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full p-6">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key={post.$id}>
                            <PostCard {...post}
                             className='p-2 w-1/4'/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}


export default Home;