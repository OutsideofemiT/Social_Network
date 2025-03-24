# Social_Network API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js Version](https://img.shields.io/badge/Node-%3E%3D14-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v4%2B-green.svg)

A robust RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage friend lists. This API is built using **Express.js**, **MongoDB**, and **Mongoose**, with timestamps formatted via a getter method (using Day.js). All endpoints have been tested with Insomnia.

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
- **Friendships:** Add and remove friends on a user's friend list.
- **Timestamp Formatting:** Timestamps are automatically formatted using Day.js.
- **Tested with Insomnia:** All endpoints are fully tested via Insomnia.

---

## User Story

_As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data._

---

## Installation

1. **Clone the Repository:**


   git clone https://github.com/outsideofemiT/Social_Network.git
   cd Social_Network
