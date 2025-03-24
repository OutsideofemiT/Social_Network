# Social_Network API
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)


A robust RESTful API for a social network web application where users caare their thoughts, react to friends' thoughts, and manage friend lists. This API is built using **Express.js**, **MongoDB**, and **Mongoose**, with timestamps formatted via a getter method (using Day.js). All endpoints have been tested with Insomnia.

---

## Table of Contents

- [Features](#features)
- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Walkthrough Video](#walkthrough-video)
- [Tech Stack](#tech-stack)
- [License](#license)
- [Contributing](#contributing)

---

## Features

- **User Management:** Create, read, update, and delete users.
- **Thought Management:** Post, update, and delete thoughts.
- **Reactions:** Add and remove reactions (as subdocuments) to thoughts.
- **Frieips:** Add and remove friends on a user's friend list.
- **Timestamp Formatting:** Timestamps are automatically formatted using Day.js.
- **Tested with Insomnia:** All endpoints are fully tested via Insomnia.

---

## User Story

_As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data._

---

## Installation

 **Clone the Repository:**

   
   git clone https://github.com/YourUsername/Social_Network.git
   cd Social_Network

# Install Dependencies:

npm install
Set Up Environment Variables:

# Create a .env file in the root directory and add:

MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB

PORT=3000

# Seed the Database (Optional):

If you want to populate the database with sample data:


node data/seed.js

## Usage

# Start the Server:

npm run start

# You should see output similar to:

Connected to MongoDB
Server running on port 3000
Test Endpoints with Insomnia:

# Use Insomnia (or Postman) to send requests to your API endpoints as outlined below.

## 🚀 API Endpoints

### 👤 Users

| Method | Endpoint                                | Description                               |
|--------|-----------------------------------------|-------------------------------------------|
| GET    | `/api/users`                            | 🔍 Returns all users                       |
| GET    | `/api/users/:userId`                    | 🔎 Returns a single user by ID             |
| POST   | `/api/users`                            | ✍️ Creates a new user                      |
| PUT    | `/api/users/:userId`                    | 🛠️ Updates a user by ID                   |
| DELETE | `/api/users/:userId`                    | ❌ Deletes a user by ID                    |
| POST   | `/api/users/:userId/friends/:friendId`  | ➕ Adds a friend to a user's friend list   |
| DELETE | `/api/users/:userId/friends/:friendId`  | ➖ Removes a friend from a user's friend list |

📦 Example – Create a New User:

{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

🛠️ Example – Update a User:
{
  "username": "newUsername"
}

💭 Thoughts
Method	Endpoint	Description
GET	/api/thoughts	📚 Returns all thoughts
GET	/api/thoughts/:thoughtId	🔍 Returns a single thought by ID
POST	/api/thoughts	✏️ Creates a new thought
PUT	/api/thoughts/:thoughtId	🛠️ Updates a thought by ID
DELETE	/api/thoughts/:thoughtId	❌ Deletes a thought by ID

✏️ Example – Create a Thought:
{
  "thoughtText": "Here's a cool thought!",
  "username": "bob",
  "userId": "SOME_EXISTING_USER_ID"
}

🛠️ Example – Update a Thought:
{
  "thoughtText": "Updated thought text"
}
## 💬 Reactions
Method	Endpoint	Description
POST	/api/thoughts/:thoughtId/reactions	💥 Adds a reaction to a thought
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	🗑️ Removes a reaction from a thought

💬 Example – Add a Reaction:

Copy
{
  "reactionBody": "I really like this thought!",
  "username": "alice"
}

🔍 Use Insomnia
Use Insomnia to test the API endpoints above. Each route supports proper HTTP verbs and requires the appropriate JSON body when applicable. Use the seeded user/thought IDs in your requests.

✅ Be sure to show:

Creating, updating, and deleting Users

Adding and removing Friends

Creating, updating, and deleting Thoughts

Adding and deleting Reactions



## Walkthrough Video
A walkthrough video demonstrating the functionality of each endpoint is available here:

Video Walkthrough


## Tech Stack
Express.js – Web framework for Node.js.

MongoDB – NoSQL database.

Mongoose – ODM for MongoDB.

Day.js – For formatting timestamps.

Insomnia – For API testing.

## License
This project is licensed under the MIT License.

## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact
Please reach out to me: outsideofemit@gmail.com

