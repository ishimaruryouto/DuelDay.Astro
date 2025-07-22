// src/firebase/client.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, onValue } from "firebase/database";

// 🚀 環境変数は .env で管理してる想定
const firebaseConfig = {
    apiKey: "AIzaSyBPN4ZqMaO4B5UFHMKEz8Mj4K_NPlzM7ow",
    authDomain: "duelday-28a68.firebaseapp.com",
    databaseURL: "https://duelday-28a68-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "duelday-28a68",
    storageBucket: "duelday-28a68.appspot.com", // ← ここやで
    messagingSenderId: "609382787888",
    appId: "1:609382787888:web:08090c52202442fb03f6f5",
    measurementId: "G-Y1CHNDPLLW"
};
// 既に初期化済みなら再利用、なければ初期化
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rdb = getDatabase(app);

// ここでRealtime Database用のユーティリティもexportしておく！
export { ref, set, onValue };

export async function saveTodos({
    opponent,
    myId,
    selected,
}: {
    opponent: string;
    myId: string;
    selected: string[];
}) {
    await fetch("/api/save-todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ opponent, myId, todos: selected }),
    });
}