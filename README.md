# Project Setup Guide

## Steps to Run the Project:

### Step 1:
Open the `code` folder in Visual Studio.

### Step 2:
Open a new terminal in VS Code to run the frontend (PowerShell/Bash).

### Step 3:
Run the following commands to navigate to the frontend directory:
```bash
cd frontend
npm run dev
```
Copy the localhost URL that appears after running the above commands and paste it into your browser.

### Step 4:
Now, in VS Code, open a new terminal to run our Flask server for the mutation detection model.

To run the mutation detection model:
```bash
cd backend
python app.py
```

### Step 5:
Open another terminal to run the gene classification model.
```bash
cd backend
python app1.py
```

---

### Collaboration Note
Originally co-developed with [@samarthsb4real](https://github.com/samarthsb4real).  
This repo is hosted here to reflect my contributions to the project.
