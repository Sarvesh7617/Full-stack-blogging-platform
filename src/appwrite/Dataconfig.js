import conf from "../conf/config";

import { Client, Databases,Storage,ID, Query } from "appwrite";



export class DatabaseAuth
{
    client=new Client()
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwritePROJECTID)
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
    }

    async createPost({title,content,featureImage,status,userId})
    {
        try{

            return await this.databases.createDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                ID.unique(),
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )

        }catch(error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }


    async updatePost(postId,{title,content,featureImage,status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                postId,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            ) 
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(postId)
    {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                postId
            )
            return true;
        } catch (error) {
             console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(postId)
    {
        try {
            return await this.databases.getDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                postId
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries=[Query.equal("status","active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file)
    {
        try {

            return await this.storage.createFile(
                conf.appwriteBUCKETID,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.storage.deleteFile(
                conf.appwriteBUCKETID,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }
    getFileView(fileId)
    {
        return this.storage.getFileView(
            conf.appwriteBUCKETID,
            fileId
        )
    }
}


const databaseAuth=new DatabaseAuth()
export default databaseAuth;