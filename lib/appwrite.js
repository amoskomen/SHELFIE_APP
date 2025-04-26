import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680795b000227f56b3ee')
    .setPlatform('dev.amos.shelfie');

export const account = new Account(client)
export const avatars = new Avatars(client)
