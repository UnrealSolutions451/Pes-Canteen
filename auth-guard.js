// auth-guard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQFOv3uq9uviBQOjJAdgSni1uyikGPgbo",
  authDomain: "pes-canteen.firebaseapp.com",
  projectId: "pes-canteen",
  storageBucket: "pes-canteen.firebasestorage.app",
  messagingSenderId: "398702472399",
  appId: "1:398702472399:web:626587a3b358bd55075bba",
  measurementId: "G-LL28HG6PDB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Store current page as redirect target
    const redirectUrl = encodeURIComponent(window.location.pathname);
    window.location.href = `login.html?redirect=${redirectUrl}`;
  }
});
