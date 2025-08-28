// firebase-config.js

// Firebase SDK initialization
const firebaseConfig = {
  apiKey: "AIzaSyDQFOv3uq9uviBQOjJAdgSni1uyikGPgbo",
  authDomain: "pes-canteen.firebaseapp.com",
  projectId: "pes-canteen",
  storageBucket: "pes-canteen.firebasestorage.app",
  messagingSenderId: "398702472399",
  appId: "1:398702472399:web:626587a3b358bd55075bba",
  measurementId: "G-LL28HG6PDB"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore
const db = firebase.firestore();
window.db = db;

// Auth
const auth = firebase.auth();

// Auto sign in anonymously
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("✅ Signed in anonymously with UID:", user.uid);
  } else {
    auth.signInAnonymously()
      .then(() => console.log("🔑 Signed in anonymously"))
      .catch(err => console.error("Auth error:", err));
  }
});

window.auth = auth;
