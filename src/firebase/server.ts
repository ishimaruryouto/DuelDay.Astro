// src/firebase/server.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBPN4ZqMaO4B5UFHMKEz8Mj4K_NPlzM7ow",
    authDomain: "duelday-28a68.firebaseapp.com",
    databaseURL: "https://duelday-28a68-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "duelday-28a68",
    storageBucket: "duelday-28a68.appspot.com",
    messagingSenderId: "609382787888",
    appId: "1:609382787888:web:08090c52202442fb03f6f5",
    measurementId: "G-Y1CHNDPLLW"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const rdb = getDatabase(app);