from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, precision_score, recall_score

# Define function to convert sequence strings into k-mer words
def Kmers_funct(seq, size=6):
    return [seq[x:x+size].lower() for x in range(len(seq) - size + 1)]

# Load data
human_dna = pd.read_table('human_data.txt')
chimp_dna = pd.read_table('chimp_data.txt')
dog_dna = pd.read_table('dog_data.txt')

# Preprocess human DNA data
human_dna['words'] = human_dna.apply(lambda x: Kmers_funct(x['sequence']), axis=1)
human_dna = human_dna.drop('sequence', axis=1)
human_texts = list(human_dna['words'])
for item in range(len(human_texts)):
    human_texts[item] = ' '.join(human_texts[item])
y_human = human_dna.iloc[:, 0].values

# Preprocess chimp DNA data
chimp_dna['words'] = chimp_dna.apply(lambda x: Kmers_funct(x['sequence']), axis=1)
chimp_dna = chimp_dna.drop('sequence', axis=1)
chimp_texts = list(chimp_dna['words'])
for item in range(len(chimp_texts)):
    chimp_texts[item] = ' '.join(chimp_texts[item])
y_chim = chimp_dna.iloc[:, 0].values

# Preprocess dog DNA data
dog_dna['words'] = dog_dna.apply(lambda x: Kmers_funct(x['sequence']), axis=1)
dog_dna = dog_dna.drop('sequence', axis=1)
dog_texts = list(dog_dna['words'])
for item in range(len(dog_texts)):
    dog_texts[item] = ' '.join(dog_texts[item])
y_dog = dog_dna.iloc[:, 0].values

# Vectorize the data
cv = CountVectorizer(ngram_range=(4, 4))
X = cv.fit_transform(human_texts)
X_chimp = cv.transform(chimp_texts)
X_dog = cv.transform(dog_texts)

# Split the human dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y_human, test_size=0.20, random_state=42)

# Train the model
classifier = MultinomialNB(alpha=0.1)
classifier.fit(X_train, y_train)

# Initialize Flask app
app = Flask(__name__)

# Define routes
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    sequence = data['sequence']
    sequence_kmers = Kmers_funct(sequence)
    sequence_text = ' '.join(sequence_kmers)
    sequence_vectorized = cv.transform([sequence_text])
    prediction = classifier.predict(sequence_vectorized)
    return jsonify({'prediction': prediction[0]})

@app.route('/health', methods=['GET'])
def health():
    return 'Server is healthy'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
