from flask import Flask, request, jsonify, send_file
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, f1_score, precision_score, recall_score, confusion_matrix
import matplotlib.pyplot as plt
import os

app = Flask(__name__)

# Function to convert sequence strings into k-mer words
def Kmers_funct(seq, size=6):
    return [seq[x:x+size].lower() for x in range(len(seq) - size + 1)]

# Function to train the model and evaluate performance
def train_model(X, y):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)
    cv = CountVectorizer(ngram_range=(4,4))
    X_train = cv.fit_transform(X_train)
    X_test = cv.transform(X_test)
    classifier = MultinomialNB(alpha=0.1)
    classifier.fit(X_train, y_train)
    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='weighted')
    recall = recall_score(y_test, y_pred, average='weighted')
    f1 = f1_score(y_test, y_pred, average='weighted')
    cm = confusion_matrix(y_test, y_pred)
    return accuracy, precision, recall, f1, cm

# Function to plot and save performance graphs
def plot_performance(accuracy, precision, recall, f1):
    # Plot bar graph
    metrics = ['Accuracy', 'Precision', 'Recall', 'F1 Score']
    values = [accuracy, precision, recall, f1]
    plt.bar(metrics, values)
    plt.xlabel('Metrics')
    plt.ylabel('Values')
    plt.title('Model Performance')
    plt.savefig('performance_plot.png')

@app.route('/train', methods=['POST'])
def train():
    # Receive data from request
    data = request.json
    X = data['X']
    y = data['y']
    # Train the model
    accuracy, precision, recall, f1, cm = train_model(X, y)
    # Plot performance
    plot_performance(accuracy, precision, recall, f1)
    # Prepare response
    response = {
        'accuracy': accuracy,
        'precision': precision,
        'recall': recall,
        'f1_score': f1,
        'confusion_matrix': cm.tolist()
    }
    return jsonify(response)

@app.route('/plot', methods=['GET'])
def get_plot():
    return send_file('performance_plot.png', mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
