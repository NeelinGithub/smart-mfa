
# Smart Multi-factor Authentication

An intelligent, AI-driven multi-factor authentication (MFA) system built with the MERN stack to enhance 'Sign in with Google' security without compromising user experience.






## Overview

This project aims to provide a secure and seamless authentication experience by combining traditional authentication methods with AI-driven anomaly detection. The system intelligently decides when to enforce additional authentication factors based on user behavior patterns, device trust levels, and login anomalies.


## Features
Seamless Google Sign-In: Allows users to sign in with Google effortlessly on trusted devices.

Anomaly Detection: Utilizes AI to detect unusual login attempts, such as new devices or unexpected locations.

Adaptive MFA Enforcement: Triggers additional authentication steps (OTP or facial recognition) only when anomalies are detected.

Trusted Devices Management: Maintains a list of trusted devices for each user to streamline the login process.

User Behavior Analysis: Analyzes login patterns over time to enhance security decisions.

## Tech Stack
Frontend: React.js

Backend: Node.js with Express.js

Database: MongoDB

Authentication: Google OAuth 2.0

AI/ML: Integration with TensorFlow.js 

Additional Libraries:
Passport.js (Authentication),
JSON Web Tokens (JWT),
bcrypt.js (Encryption),
Axios (HTTP requests)
