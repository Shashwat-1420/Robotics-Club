/**
 * mail.js - Simulated Mail System for Robotics Club
 * This module handles notifications for member application status changes.
 * In a production environment, this would integrate with a service like EmailJS
 * or a Firebase Cloud Function with Nodemailer.
 */

export const sendStatusNotification = async (userData, newStatus) => {
    const { name, email, memberId } = userData;
    const subject = newStatus === 'accepted'
        ? "Welcome to the Robotics Club! 🤖"
        : "Update regarding your Robotics Club Application";

    const body = newStatus === 'accepted'
        ? `Hello ${name},

Congratulations! Your application to the Robotics Club has been ACCEPTED.
Your unique Member ID is: ${memberId || 'Pending'}

We are excited to have you on board. Stay tuned for upcoming workshops and events!

Best Regards,
Robotics Club Team
Amrita Vishwa Vidyapeetham`
        : `Hello ${name},

Thank you for your interest in the Robotics Club. 
After careful review, we regret to inform you that your application has not been accepted at this time. 

We encourage you to keep building and apply again in the next cycle!

Best Regards,
Robotics Club Team`;

    console.log(`%c[MAIL SYSTEM] Sending Email to ${email}...`, "color: #0891b2; font-weight: bold;");
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);

    // Simulation of network delay
    return new Promise(resolve => setTimeout(resolve, 1000));
};
