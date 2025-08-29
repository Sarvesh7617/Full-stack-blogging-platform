import React, { useCallback, useEffect,useState } from "react";
import {useForm} from 'react-hook-form';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import databaseAuth from '../../appwrite/Dataconfig'
import {Button, Input,RTE,Select} from '../index'

const PostForm=({post})=>{

    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
        defaultValues:{
            title:post?.title || "",
            postId:post?.$id || "",
            content:post?.content || "",
            status:post?.status || "active"
        },
    })
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate();
    const userData=useSelector((state)=>state.auth.userData)

    const submit=async(data)=>{
        setLoading(true);
        try {
            if(post)
            {
                const file=data.image[0]?await databaseAuth.uploadFile(data.image[0]):null
                if(file)
                    databaseAuth.deleteFile(post.featuredImage);
                const dbPost=await databaseAuth.updatePost(post.$id,{
                    ...data,
                    featureImage:file? file.$id:undefined,
                });
                if(dbPost)
                    navigate(`/post/${dbPost.$id}`);
            }
            else
            {
                const file=await databaseAuth.uploadFile(data.image[0]);
                if(file)
                {
                  data.featureImage=file.$id
                  const dbPost=await databaseAuth.createPost({...data,userId:userData.$id});
    
                  if(dbPost)
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        } catch (error) {
            onsole.error("Error submitting post:", error);
        } finally {
            setLoading(false); // End loading
            }

    }

    const slugTranform=useCallback((value)=>{
        if(value && typeof value ==='string')
          return value
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z\d\s]+/g, '-')
          .replace(/\s/g,"-")
        return "";
    },[])
    
    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if(name==='title')
              setValue('slug',slugTranform(value.title),{showValidation:true});
        });

        return () => subscription.unsubscribe();
    },[watch,slugTranform,setValue])


    useEffect(() => {
    if (post?.title) {
        const generatedSlug = slugTranform(post.title);
        setValue("slug", generatedSlug, { shouldValidate: true });
    }
    }, [post?.title, setValue, slugTranform]);

    
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label='Title:'
                    placeholder="Enter title"
                    {...register('title',{required:true})}
                />
                <Input
                    label='Slug:'
                    placeholder="Slug"
                    readOnly
                    {...register('slug',{required:true})}
                    onInput={(e)=>{
                       setValue('slug',slugTranform(e.currentTarget.value),{showValidation:true});
                    }}
                />
                <RTE label='Content' name='content' control={control} defaultValue={getValues('content')}/>
            </div>
            <div className="w-1/3 px-2">
              <Input
                label='Feature Image'
                type='file'
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register('image',{required:!post})}
              />
              {post && (
                <div className="w-full">
                    <img src={databaseAuth.getFileView(post.featureImage)} alt={post.title} className="rounded-md"/>
                </div>
              )}
              <Select
                options={['active','inactive']}
                label='Status'
                className="mb-4"
                {...register('status',{required:true})}
              />
              <Button 
                type="submit"
                disabled={loading} 
                bgColor={post? 'bg-blue-500':undefined} 
                className={`w-full hover:bg-blue-700 hover:scale-103 duration-300 ${loading?"cursor-not-allowed opacity-50":""}`}>
                {loading ? (post ? 'Updating...' : 'Submitting...') : (post ? 'Update' : 'Submit')}
              </Button>
            </div>
        </form>
    )
}


export default PostForm;