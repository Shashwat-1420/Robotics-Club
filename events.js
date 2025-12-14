import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, orderBy, query, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Create Event
export async function createEvent(eventData) {
    try {
        await addDoc(collection(db, "events"), {
            ...eventData,
            createdAt: new Date().toISOString()
        });
        alert("Event Created Successfully!");
        window.location.reload();
    } catch (error) {
        console.error("Error creating event:", error);
        alert("Failed to create event: " + error.message);
    }
}

// Get Upcoming Events
export async function getUpcomingEvents() {
    try {
        const q = query(collection(db, "events"), orderBy("date", "asc"), limit(3));
        const querySnapshot = await getDocs(q);
        const events = [];
        querySnapshot.forEach((doc) => {
            events.push({ id: doc.id, ...doc.data() });
        });
        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}
