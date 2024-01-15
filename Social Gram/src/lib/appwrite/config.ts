import {Client, Account, Databases, Storage,Avatars} from 'appwrite';

export const appwriteConfig = {
    URL: "https://cloud.appwrite.io/v1",
    projectId: "65a02d3da4094a0a8010",
    databaseId: "65a1657191cff4b266fd",
    storageId:"65a16506114780702a22",
    userCollectionId: "65a1666dd1649f78562c",
    postCollectionId: "65a165ee6800863ff9ff",
    savesCollectionId: "65a166aa4dbfa56c9741",

}


export const client = new Client();

client.setEndpoint(appwriteConfig.URL) // Your API Endpoint
client.setProject(appwriteConfig.projectId) // Your project ID
//client.setEndpoint(appwriteConfig.url);
//client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
