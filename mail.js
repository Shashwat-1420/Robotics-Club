import { MAIL_CONFIG } from './mail-config.js';

/**
 * mail.js - Real Mail System for Robotics Club using EmailJS
 * This module handles actual notifications for member application status changes.
 */

// Load EmailJS SDK
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
document.head.appendChild(script);

script.onload = () => {
    if (MAIL_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init(MAIL_CONFIG.PUBLIC_KEY);
    }
};

export const sendStatusNotification = async (userData, newStatus) => {
    const { name, email, memberId } = userData;

    if (MAIL_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        console.warn("[MAIL SYSTEM] Mail not sent: Configuration missing in mail-config.js");
        console.log(`%c[SIMULATION] Email to ${email} (Status: ${newStatus})`, "color: #eab308; font-weight: bold;");
        return;
    }

    const templateParams = {
        to_name: name,
        to_email: email,
        member_id: memberId || 'Pending',
        status: newStatus,
        message: newStatus === 'accepted'
            ? "Congratulations! Your application to the Robotics Club has been ACCEPTED."
            : "Thank you for your interest. After careful review, we regret to inform you that your application has not been accepted at this time."
    };

    try {
        const response = await emailjs.send(
            MAIL_CONFIG.SERVICE_ID,
            MAIL_CONFIG.TEMPLATE_ID,
            templateParams
        );
        console.log("[MAIL SYSTEM] Email sent successfully!", response.status, response.text);
        return response;
    } catch (error) {
        console.error("[MAIL SYSTEM] Failed to send email:", error);
        throw error;
    }
};
