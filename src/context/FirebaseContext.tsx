import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw_G91voahtoRhoQLzpihUeaQpch6OQ8A",
  authDomain: "rn-auth-6a033.firebaseapp.com",
  projectId: "rn-auth-6a033",
  storageBucket: "rn-auth-6a033.firebasestorage.app",
  messagingSenderId: "419248078837",
  appId: "1:419248078837:web:8ad676cfd1e5dddf3e2abc"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);