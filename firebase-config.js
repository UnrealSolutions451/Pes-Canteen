// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQFOv3uq9uviBQOjJAdgSni1uyikGPgbo",
  authDomain: "pes-canteen.firebaseapp.com",
  projectId: "pes-canteen",
  storageBucket: "pes-canteen.firebasestorage.app",
  messagingSenderId: "398702472399",
  appId: "1:398702472399:web:626587a3b358bd55075bba",
  measurementId: "G-LL28HG6PDB"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Auth
const auth = getAuth(app);

// Auto sign in anonymously
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ Signed in anonymously with UID:", user.uid);
  } else {
    signInAnonymously(auth)
      .then(() => console.log("🔑 Signed in anonymously"))
      .catch(err => console.error("Auth error:", err));
  }
});

export { auth };
