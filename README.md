# EVStationLocator
⚡ Smart EV Station Locator – Full Stack Web Application

A production-ready Full Stack EV Charging Station Locator that helps users find nearby EV stations, compare charging cost, book slots, make payments, and submit reviews.
Built as Project 1 of my “6 Days – 6 Projects” Full Stack Challenge on Day 185 of my Python Full Stack Developer journey.

🚀 Live Demo

🔗 Live URL: project 1   https://tharun123-dev.github.io/EVStationLocatorr/frontend/index.html
📂 Frontend: HTML, CSS, JavaScript, Bootstrap
🧠 Backend API: Django REST Framework
🗄️ Database: MySQL (Aiven Cloud)


🎯 Project Objective

To build a real-world EV charging platform that solves common problems like:

Finding nearby EV stations

Comparing cost & charging speed

Booking charging slots easily

Making simple and fast payments

Managing stations through an admin panel

✨ Key Features
👤 User Features

📍 Find nearby EV charging stations using Google Maps

🔍 Filter stations by:

Connector type (CCS2 / Type2)

Charging speed (Fast / Normal)

Availability (Open Now)

Price (Low cost first)

💸 Compare stations by distance & charging cost

⏰ Dynamic slot booking (date & time based)

💳 Easy payment flow (UPI / Card / Cash – simulation)

⭐ Submit ratings & reviews after charging

❓ Simple FAQ & Help Support

🛠️ Admin Features

➕ Add new EV stations

✏️ Update station details

❌ Remove stations

🔌 Manage connector types & charging speed

📊 Monitor bookings & availability

🛡️ Admin access always available

🧑‍💻 Tech Stack
Frontend

HTML5

CSS3

JavaScript (Vanilla JS)

Bootstrap 5

Backend

Python

Django

Django REST Framework

Database

MySQL (Aiven Cloud)

Authentication & Security

JWT Authentication

CORS Configuration

Deployment

Render (Backend & Frontend)

🔄 Application Flow
Login/Register
   ↓
Station Discovery (Map + Filters)
   ↓
Slot Booking (Date & Time)
   ↓
Payment (UPI/Card/Cash)
   ↓
Review & Rating Submission

🌍 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/stations/	Get all stations
POST	/api/bookings/create	Create booking
POST	/api/payments/pay	Payment simulation
POST	/api/reviews/add	Add review
POST	/api/auth/login	JWT Login
📂 Project Structure
ev-station-locator/
│
├── backend/
│   ├── stations/
│   ├── bookings/
│   ├── payments/
│   ├── reviews/
│   └── manage.py
│
├── frontend/
│   ├── index.html
│   ├── booking.html
│   ├── payment.html
│   ├── review.html
│   ├── css/
│   └── js/
│
└── README.md

📈 Challenge Progress

✅ Project 1/6: Smart EV Station Locator

⏳ Project 2: Gym Tracker Application

⏳ Project 3: Student Resource Portal

⏳ Project 4: React Migration Project

⏳ Project 5: CI/CD & Deployment

⏳ Project 6: Final Capstone + Report

🎓 Skills Demonstrated

Full Stack Development

REST API Design

JWT Authentication

MySQL Database Design

Cloud Deployment

Clean UI/UX Design

Real-world Project Architecture

📬 Contact

Shanmukha Penta
Python Full Stack Developer
📩 DM on LinkedIn for demo walkthrough or discussion

⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork it

📢 Share feedback

🔥 Tag
