// // src/firebase/client.ts
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
//     authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.PUBLIC_FIREBASE_APP_ID
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// src/firebase/client.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// （Firestore も使うなら ↓ を追加）
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app); // Firestore を使う場合はこちらもエクスポート
