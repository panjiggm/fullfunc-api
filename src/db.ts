import { MongoClient } from 'mongodb';

const { MONGO_URI = 'mongodb://127.0.0.1:27017/' } = process.env;

export const cleint = new MongoClient(MONGO_URI);
export const db = cleint.db();
