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

### 💭 Thoughts

| **Method** | **Endpoint**                     | **Description**                     |
|------------|----------------------------------|-------------------------------------|
| GET        | `/api/thoughts`                 | 📚 Returns all thoughts             |
| GET        | `/api/thoughts/:thoughtId`      | 🔍 Returns a single thought by ID   |
| POST       | `/api/thoughts`                 | ✏️ Creates a new thought            |
| PUT        | `/api/thoughts/:thoughtId`      | 🛠️ Updates a thought by ID         |
| DELETE     | `/api/thoughts/:thoughtId`      | ❌ Deletes a thought by ID          |

✏️ Example – Create a Thought:

{
  "thoughtText": "Here's a cool thought!",
  "username": "bob",
  "userId": "SOME_EXISTING_USER_ID"
}

### 💬 Reactions

| **Method** | **Endpoint**                                           | **Description**                          |
|------------|--------------------------------------------------------|------------------------------------------|
| POST       | `/api/thoughts/:thoughtId/reactions`                  | 💥 Adds a reaction to a thought          |
| DELETE     | `/api/thoughts/:thoughtId/reactions/:reactionId`      | 🗑️ Removes a reaction from a thought     |

💬 Example – Add a Reaction:

{
  "reactionBody": "I really like this thought!",
  "username": "alice"
}


# 🔍Insomnia
Use Insomnia to test the API endpoints above. Each route supports proper HTTP verbs and requires the appropriate JSON body when applicable. Use the seeded user/thought IDs in your requests.

# ✅ Be sure to show:

Creating, updating, and deleting Users

Adding and removing Friends

Creating, updating, and deleting Thoughts

Adding and deleting Reactions



## Walkthrough Video
A walkthrough video demonstrating the functionality of each endpoint is available here:

https://app.screencastify.com/v3/watch/0mMEdiwZzpjUVihZfoT9
https://app.screencastify.com/v3/watch/lvnlXZp1fQs1XvkKpknq




## 🛠️ Tech Stack

A powerful combination of technologies used to build the Social_Network API:

| Tech        | Description                          | Badge |
|-------------|--------------------------------------|--------|
| ![Express](https://img.shields.io/badge/-Express.js-000?logo=express&logoColor=white) | Fast, unopinionated, minimalist web framework for Node.js | ⚡️ Handles routing and middleware |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-4EA94B?logo=mongodb&logoColor=white) | Flexible NoSQL database | 🧩 Stores users, thoughts, and reactions |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white) | Elegant MongoDB object modeling for Node.js | 🔗 Schemas and validation |
| ![Day.js](https://img.shields.io/badge/-Day.js-blue?logo=javascript&logoColor=white) | Lightweight JavaScript date library | ⏰ Formats `createdAt` timestamps |
| ![Insomnia](https://img.shields.io/badge/-Insomnia-4000BF?logo=insomnia&logoColor=white) | API design and testing tool | 🧪 Test routes with full CRUD support |

## License
This project is licensed under the MIT License.

## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact
Please reach out to me: outsideofemit@gmail.com

