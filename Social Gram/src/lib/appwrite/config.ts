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
    URL: "https://cloud.appwrite.io/v1",
    projectId: "65a02d3da4094a0a8010",
    databaseId: "65a1657191cff4b266fd",
    storageId:"65a16506114780702a22",
    userCollectionId: "65a1666dd1649f78562c",
    postCollectionId: "65a165ee6800863ff9ff",
    savesCollectionId: "65a166aa4dbfa56c9741",

    // url: import.meta.env.VITE_APPWRITE_URL ,
    // projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    // databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    // storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    // userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    // postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    // savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,

}


export const client = new Client();

client.setEndpoint(appwriteConfig.URL) 
client.setProject(appwriteConfig.projectId) 
//client.setEndpoint(appwriteConfig.url);
//client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

