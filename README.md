# Tech Talks 2025 - Event Schedule Website

This project is a simple, single-page website to display the schedule for a one-day technical conference. It features a clean timeline of talks and allows users to filter the schedule by category.

The application is built with a Node.js and Express backend that serves a static frontend built with standard HTML, CSS, and JavaScript.

## Features

- **Full Event Schedule:** Displays a chronological timeline of all talks, breaks, and transitions.
- **Detailed Talk Information:** Each talk includes a title, speakers, description, and associated categories.
- **Real-time Category Search:** A search bar allows users to instantly filter the talks based on categories.
- **Simple & Lightweight:** Built with a minimal stack, making it fast and easy to understand.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your system to run the server.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/dolauli/gemini_sample_project.git
    cd gemini_sample_project
    ```

2.  **Install dependencies:**
    Open a terminal in the project root and run the following command to install the required `express` package:
    ```sh
    npm install
    ```

## Usage

To start the application, run the following command from the project's root directory:

```sh
node server.js
```

This will start the Node.js server. You will see a confirmation message in your terminal:

```
Server is running on http://localhost:3000
```

Now, you can open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)** to see the website.

## Project Structure

The project is organized into a client-side and a server-side:

```
.
├── public/              # Contains all frontend files
│   ├── index.html       # The main HTML structure
│   ├── styles.css       # CSS for styling the website
│   └── script.js        # JavaScript for dynamic rendering and filtering
├── .gitignore           # Files and folders to be ignored by Git
├── package.json         # Project metadata and dependencies
├── server.js            # The Node.js/Express backend server
└── talks.json           # A JSON file acting as a simple database for the schedule
```

## API Endpoint

The server provides a single API endpoint to deliver the schedule data to the frontend.

### `GET /api/talks`

-   **Description:** Retrieves the entire event schedule.
-   **Response:** A JSON array of schedule items.

**Example Response:**
```json
[
  {
    "time": "10:00 AM",
    "type": "talk",
    "title": "The Future of JavaScript Frameworks",
    "speakers": ["Jane Doe"],
    "category": ["JavaScript", "Web Development"],
    "duration": "1 hour",
    "description": "A deep dive into the trends and future of popular JavaScript frameworks like React, Vue, and Svelte."
  },
  {
    "time": "11:00 AM",
    "type": "transition"
  }
]
```
