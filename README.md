# Special Calculator

## Project Assignment

This project was assigned as part of a technical task by [Cents](https://www.centsdonations.com/). This task involved building a simple web application that interacts with a backend service to perform a specific arithmetic operation.


## Description

This project is a simple web application that performs an arithmetic operation. It calculates the sum of two numbers provided by the user, and adds the first prime number greater than the larger of the two numbers. The application includes a frontend built with HTML, CSS, and JavaScript, and a backend service implemented with Flask (Python).

## Project Structure

- **frontend**: Contains the HTML, CSS, and JavaScript files for the frontend.
  - `index.html`: The main HTML page.
  - `styles.css`: CSS file for styling the HTML page.
  - `scripts.js`: JavaScript file containing the logic for the frontend.
- **backend**: Contains the Flask application and dependencies.
  - `app.py`: The main Flask application.
  - `requirements.txt`: File listing the Python dependencies for the backend.

## Prerequisites

- **Python 3.x**: Make sure Python 3 is installed on your system.
- **Flask**: Web framework for Python.
- **sympy**: Library for symbolic mathematics.

## Setup and Installation

### Backend Setup

1. **Navigate to the `backend` directory**:

```bash
   cd backend
```

2. **Install the required dependencies**:

```bash
    pip install -r requirements.txt
```

3. **Run the Flask server**:

```bash
    python app.py
```

The backend service should now be running on http://127.0.0.1:5000.

### Frontend Setup
The frontend files should be served directly by the Flask server, just open the following URL in your web browser:

http://127.0.0.1:5000/

## Usage
Open your browser and navigate to http://127.0.0.1:5000/.
Enter two numbers in the input fields.
Click the "Calculate" button to see the result. The result will display the sum of the two numbers plus the first prime number greater than the larger number.

## License
This project is licensed under the MIT License - see the LICENSE file for details.