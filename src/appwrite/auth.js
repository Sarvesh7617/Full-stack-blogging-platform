import conf from "../conf/config.js";
import { Client, Account, ID } from "appwrite";


export class AuthService
{
    client=new Client();         //property
    account;                     //property
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwritePROJECTID)
        this.account=new Account(this.client)    
    }

    async createAccount({email,password,name})
    {
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if (userAccount)
                //user Register then redirect to login page
                return this.login({email,password})
            else
              return userAccount
        }catch (error) {
            throw error;
        }
    }

    async login({email,password})
    {
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }catch(error) {
            throw error
        }
    }


    async getCurrentUser()
    {
        try{
            
            return await this.account.get();
        }catch(error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;              //if account not exist then null return
    }

    async logout()
    {
        try{
            await this.account.deleteSessions()
        }catch(error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService=new AuthService()

export default authService;