from flask import Flask, request, jsonify
import pickle
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)

# Load the trained model and vectorizer
model = pickle.load(open('spam_model.pkl', 'rb'))
vectorizer = pickle.load(open('vectorizer.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    email_text = data['email']
    features = vectorizer.transform([email_text])
    prediction = model.predict(features)
    return jsonify({'prediction': 'spam' if prediction[0] == 1 else 'ham'})

if __name__ == '__main__':
    app.run(debug=True)