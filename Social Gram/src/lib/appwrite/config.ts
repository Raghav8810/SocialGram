import {Client, Account, Databases, Storage,Avatars} from 'appwrite';
// interface appwriteConfig {
//     VITE_APPWRITE_URL: string;
//     VITE_APPWRITE_PROJECT_ID: string;
//     VITE_APPWRITE_DATABASE_ID: string;
//     VITE_APPWRITE_STORAGE_ID: string;
//     VITE_APPWRITE_USER_COLLECTION_ID: string;
//     VITE_APPWRITE_POST_COLLECTION_ID,
//   }

export const appwriteConfig = {
   

    url: import.meta.env.VITE_APPWRITE_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVE_COLLECTION_ID,

    // url: "https://cloud.appwrite.io/v1",
    // projectId: "65ba903c1b35429a0384",
    // databaseId: "65ba91751766b9399b84",
    // storageId: "65ba913c80644c8e30fb",
    // userCollectionId:"65ba91dd48b4833f0388",
    // postCollectionId: "65ba91a833584741e6b8",
    // savesCollectionId: "65ba92053fa167cb0b57",


}


export const client = new Client();
  
client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);
//client.setEndpoint(appwriteConfig.url);
//client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

