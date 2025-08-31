## 📝 Full-Stack Blogging Platform

A dynamic full-stack blogging platform built with **React.js** and **Appwrite**, enabling users to create, edit, and manage blog posts with rich text formatting and image uploads. Designed for responsiveness and deployed on **Vercel** for fast performance.

#### 🏠 Homepage
<img width="1918" height="972" alt="Screenshot 2025-08-31 225508" src="https://github.com/user-attachments/assets/18663109-dbd2-45bb-a250-362fdec62d65" />


#### 📄 Blog Post View
<img width="1919" height="964" alt="Screenshot 2025-08-31 225729" src="https://github.com/user-attachments/assets/b82c0c36-c674-43c8-983a-052331a22e81" />


## 🚀 Tech Stack

**Frontend**  
- React.js  
- Redux Toolkit  
- React Router  
- Tailwind CSS  
- React Hook Form  
- TinyMCE (Rich Text Editor)

**Backend**  
- Appwrite (Authentication, Database, Storage)

**Deployment**  
- Vercel


## ✨ Features

- 🔐 User Authentication (Sign Up / Login / Logout)
- 📝 Rich Text Editor with TinyMCE
- 📷 Image Upload & Preview
- ✏️ Create, Edit, and Delete Posts
- 🔒 Protected Routes for Authenticated Users
- 📦 Appwrite Integration for Database & File Storage



## 🛠️ Installation

To run this project locally:  

1️. Clone the repository:  
```bash
git clone https://github.com/Sarvesh7617/Full-stack-blogging-platform.git
```
2. Navigate to the project directory:
```bash
cd your-portfolio
```
3. Install dependencies
```bash
npm install
```

#### ⚙️ Configuration

To get started, follow these steps to configure Appwrite:

1. **Create a Project** in Appwrite Console.

2. **Set Up Services**:
   - 🗃️ **Database**: Create a collection for storing posts.
   - 🖼️ **Storage**: Enable file storage for image uploads.


### 🔐 Environment Variables

4. Create a `.env` file in the root of your project and add your Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=your-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
```

5. Install dependencies
```bash
npm run dev
```
