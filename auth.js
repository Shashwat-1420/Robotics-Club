import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Generate a random Member ID (RC-XXXX)
function generateMemberId() {
    return 'RC-' + Math.floor(1000 + Math.random() * 9000);
}

// Sign Up Function
export async function registerUser(email, password, additionalData) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const memberId = generateMemberId();

        // Store user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: email,
            memberId: memberId,
            role: 'member', // Default role
            name: additionalData.name,
            phone: additionalData.phone,
            branch: additionalData.branch,
            year: additionalData.year,
            interests: additionalData.interests,
            status: 'pending',
            createdAt: new Date().toISOString()
        });

        alert(`Registration Successful! Your Member ID is: ${memberId}`);
        window.location.href = 'roboticsclubdesign.html'; // Redirect to home
    } catch (error) {
        console.error("Error registering user:", error);
        alert("Registration Failed: " + error.message);
    }
}

// Login Function
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Check if admin
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.role === 'admin') {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'roboticsclubdesign.html';
            }
        } else {
            // Fallback if doc doesn't exist (shouldn't happen for normal flow)
            window.location.href = 'roboticsclubdesign.html';
        }

    } catch (error) {
        console.error("Error logging in:", error);
        alert("Login Failed: " + error.message);
    }
}

// Logout Function
export async function logoutUser() {
    try {
        await signOut(auth);
        window.location.href = 'login.html';
    } catch (error) {
        console.error("Error signing out:", error);
    }
}

// Monitor Auth State
export function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            callback(user);
        } else {
            callback(null);
        }
    });
}

// Check Admin Access (for Dashboard)
export async function checkAdminAccess() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists() && userDoc.data().role === 'admin') {
                // Allowed
                console.log("Admin access granted.");
            } else {
                alert("Access Denied: You are not an admin.");
                window.location.href = 'login.html';
            }
        } else {
            window.location.href = 'login.html';
        }
    });
}
