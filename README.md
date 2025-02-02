# React-based Quiz App

## Overview
This is a React-based Quiz App that allows users to take a timed quiz. The app fetches questions from an external API, displays them one at a time, and tracks the user's score. It includes a timer for each question, confetti animation for successful completion, and a results page.

## Features

### Timed Questions
Each question has a 30-second timer.  

### Score Tracking
The app keeps track of the user's score as they progress through the quiz.  

### Confetti Animation
A celebratory confetti animation is displayed when the quiz is completed.  

### Responsive Design
The app is designed to work seamlessly on different screen sizes.  

### Error Handling
Displays error messages if the questions fail to load and provides a retry option.  

## Screenshots

### Quiz Home Page
![image](https://github.com/user-attachments/assets/8f098136-2e82-4de4-9f10-da2ba00598ce)

### Quiz Instructions Page
![image](https://github.com/user-attachments/assets/1ba46f8f-be79-4178-aef2-23f7291eedb4)

### Quiz Question Page
![image](https://github.com/user-attachments/assets/2a11b260-f26a-4d54-8b83-a5bb04cfbdb7)

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites
- **Node.js** (v16 or higher)  
- **npm** (Node Package Manager)  

### Installation

1. **Download** the project ZIP file.  
2. **Extract** and save the contents in a preferred folder.  
3. **Open** the project in Visual Studio Code.  
4. **Navigate** to the project directory using the `cd` command.  
5. Run the following command to install the required dependencies:  
   ```bash
   npm install
   ```  
6. After the installation is complete, start the development server by running:  
   ```bash
   npm run dev
   ```  
7. Once the server is running, open your browser and visit:  
   [http://localhost:5174](http://localhost:5174)  

## Usage

- **Start the Quiz:** Click the "Start Quiz" button on the instructions page.  
- **Answer Questions:** Select an answer for each question within the 30-second time limit.  
- **View Results:** After completing all questions, you'll see your score and a confetti animation.  

## Technologies Used

- **React:** A JavaScript library for building user interfaces.  
- **React Router:** For navigation between pages.  
- **Axios:** For making HTTP requests to fetch quiz questions.  
- **React Confetti:** For displaying confetti animations.  
- **CSS:** For styling the app.  

