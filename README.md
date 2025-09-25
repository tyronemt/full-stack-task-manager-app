Full Stack Task Manager App

A full-featured task manager application with a separate front-end and back-end.

Description

This is a simple yet powerful task manager application that allows users to create, manage, and track their tasks. The application is built with a modern full-stack architecture, featuring a React front-end and a Node.js/Express back-end, with MongoDB for data storage.

Features

    Create, Read, Update, and Delete (CRUD) tasks.

    User-friendly interface.

    RESTful API for task management.

    MongoDB database integration.

Tech Stack

    Front-End: React

    Back-End: Node.js, Express.js

    Database: MongoDB

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

You will need the following software installed on your machine:

    Node.js

    npm (comes with Node.js)

    A MongoDB Atlas account or a local MongoDB installation.

Full Stack Task Manager App

A full-featured task manager application with a separate front-end and back-end.

Description

This is a simple yet powerful task manager application that allows users to create, manage, and track their tasks. The application is built with a modern full-stack architecture, featuring a React front-end and a Node.js/Express back-end, with MongoDB for data storage.

Features

    Create, Read, Update, and Delete (CRUD) tasks.

    User-friendly interface.

    RESTful API for task management.

    MongoDB database integration.

Tech Stack

    Front-End: React

    Back-End: Node.js, Express.js

    Database: MongoDB

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

You will need the following software installed on your machine:

    Node.js

    npm (comes with Node.js)

    A MongoDB Atlas account or a local MongoDB installation.

Installation

    Clone the repository:
    Bash

git clone https://github.com/tyronemt/full-stack-task-manager-app.git

Navigate to the project directory:
Bash

cd full-stack-task-manager-app

Install back-end dependencies:
Bash

cd backend
npm install

Install front-end dependencies:
Bash

    cd ../frontend
    npm install

Configuration

You will need to connect the application to your MongoDB database.

    Create a .env file in the backend directory.

    Add your MongoDB connection string to the .env file:

    MONGO_URI=your_mongodb_connection_string

Running the Application

    Run the back-end server:
    From the backend directory, run:
    Bash

npm run dev

The back-end server will start on http://localhost:5000 (or the port specified in your configuration).

Run the front-end application:
From the frontend directory, run:
Bash

npm start

The front-end development server will start, and you can view the application in your browser at http://localhost:3000.
