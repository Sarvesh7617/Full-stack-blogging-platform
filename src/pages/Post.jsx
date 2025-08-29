import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseAuth from "../appwrite/Dataconfig";
import { Button, Container } from "../components/index";
import { useSelector } from "react-redux";
import parse from 'html-react-parser'


const Post=()=>{

    const [post,setPost]=useState(null);
    const {postId}=useParams();
    const navigate=useNavigate();
    const userData=useSelector((state)=>state.auth.userData)

    const isAuther=post && userData? post.userId===userData.$id:false;
    useEffect(()=>{
        if(postId)
        {
            databaseAuth.getPost(postId).then((post)=>{
                if(post)
                  setPost(post)
                else
                  navigate('/')
            })
        }
        else
          navigate('/')
    },[postId,navigate])


    const deletePsot=()=>{
        databaseAuth.deletePost(post.$id).then((status)=>{
            if (status)
            {
                databaseAuth.deleteFile(post.featureImage)
                navigate('/')
            }
        })
    }
    return post?(
        <div className="py-8">
            <Container>
                <div className="m-auto w-fit flex flex-col items-center mb-4 border border-2 rounded-xl p-4">
                    <img
                        src={databaseAuth.getFileView(post.featureImage)}
                        alt={post.tittle}
                        className="rounded-xl w-1/2 mb-4"
                    />

                    {isAuther && (
                        <div className="flex space-x-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500">
                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={deletePsot} bgColor="bg-red-500">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <h1 className="text-2xl font-bold">{post.tittle}</h1>
                </div>
                <div>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ):null
}



export default Post;