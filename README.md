# Stock Search Application

This is a simple web application that allows users to search for stock data by ticker symbol. The application fetches historical stock data for the past month using the Polygon API and displays it in a user-friendly format.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Search for stocks by ticker symbol.
- Fetch historical stock data for the past month.
- Display stock data in a structured table format.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **Axios**: Promise-based HTTP client for making requests to the Polygon API.
- **HTML/CSS**: For the frontend user interface.
- **JavaScript**: For client-side scripting.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/stock-search-app.git
   cd stock-search-app

2. **Install dependencies**:
bash
npm install express axios dotenv

3. **Create a .env file in the root directory and add your Polygon API key**:
text
POLYGON_API_KEY=YOUR_API_KEY

Usage
Start the server:
bash
node server.js

Open your browser and navigate to http://localhost:3000.
Enter a ticker symbol in the search bar and click the "Search" button to fetch stock data for the past month.
Directory Structure
text
/your-project
|-- /public
|   |-- index.html        # Main HTML file for the application
|   |-- style.css         # CSS styles for the application
|   |-- index.js          # Client-side JavaScript for fetching stock data
|-- .env                  # Environment variables (API key)
|-- server.js             # Node.js backend server
|-- package.json          # Node.js project metadata and dependencies

Environment Variables
POLYGON_API_KEY: Your API key for accessing the Polygon API. Make sure to keep this key private and do not expose it in client-side code.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
text

### Instructions for Use

1. **Replace `yourusername`** in the clone URL with your actual GitHub username or the appropriate repository link.
2. **Add any additional features or instructions** specific to your project that you think might be helpful for users.
3. **Make sure to include any licensing information** if applicable.

This `README.md` provides a comprehensive overview of your project, making it easier for others (or yourself in the future) to understand how to use and contribute to the application.
