// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () =>
    openDB('cards', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('cards')) {
                console.log('cards db already exists');
                return;
            }
            db.createObjectStore('cards', { keyPath: 'id', autoIncrement: true });
            console.log('cards db created!');
        }
    });

// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {

};

// TODO: Complete the getDb() function below:
export const getDb = async () => {

};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {

};

initdb();
