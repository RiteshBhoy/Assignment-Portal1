Assignment Submission Portal - Backend System
This project is a backend system designed for managing assignment submissions. It facilitates interactions between users who upload assignments and admins who review them.

Features
User Role
Register and Log In
Upload Assignments
Fetch Available Admins
Admin Role
Register and Log In
View Assigned Submissions
Accept or Reject Submissions
Endpoints

User Endpoints

POST /register - Register a new user.

POST /login - User login.

POST /upload - Upload an assignment.

GET /admins - Fetch all available admins.

Admin Endpoints

POST /register - Register a new admin.

POST /login - Admin login.


GET /assignments - View assignments tagged to the admin.

POST /assignments/:id/accept - Accept an assignment.

POST /assignments/:id/reject - Reject an assignment.


Database Schema
User Collection
json
Copy code
                  {
                 "_id": "ObjectId",
                  "username": "String",
                    "password": "String",
                    "role": "String" // 'user' or 'admin'
                                        }
Assignment Collection
json

Copy code
{
  "_id": "ObjectId",
  "userId": "
Clone the repository:

bash
Copy code
git clone <repository-url>
cd assignment-submission-portal
Install dependencies:    

bash
Copy code
npm install
Create a .env file in the root directory and add the following:

plaintext
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/assignmentPortal
JWT_SECRET=your_jwt_secret
Start the development server:

bash
Copy code
npm start
Usage
API Testing
Use tools like Postman or cURL to interact with the API.
Register users and admins, upload assignments, and manage submissions.


