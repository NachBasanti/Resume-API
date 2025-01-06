# Resume-API
A web application that analyzes resumes against a job description to calculate a compatibility score and provide suggestions for improvement.

Features

Upload a resume file for analysis.

Input a job description to compare with the resume.

Compatibility score based on matching keywords and skills.

Suggestions to improve the resume for the specific job description.

Technologies Used

HTML: Structure of the web application.

CSS: Styling for the web application.

JavaScript: Logic for analyzing resumes and job descriptions.

Affinda API: Used for parsing resumes and extracting skills.

Getting Started

Follow these steps to set up and run the project locally:

Prerequisites

A modern web browser.

A GitHub account.

Basic knowledge of Git and GitHub.

Installation

Clone the repository:

git clone https://github.com/NachBasanti/resume-analyzer.git

Navigate to the project directory:

cd resume-analyzer

Open the index.html file in your browser to use the application locally.

Usage

Upload a resume file in PDF format using the file input.

Paste a job description into the provided text area.

Click the "Analyze" button to calculate the compatibility score and view suggestions.

File Structure

index.html: Main HTML file for the application.

style.css: Stylesheet for the application.

script.js: JavaScript file containing the logic for resume analysis.

API Integration

This application uses the Affinda Resume Parsing API to extract skills and other details from uploaded resumes. Replace the API key in script.js with your own key:

"Authorization": "Bearer YOUR_API_KEY_HERE"

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch for your feature or bug fix:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature description"

Push your changes:

git push origin feature-name

Open a pull request on GitHub.
