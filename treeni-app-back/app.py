import os
from flask import Flask
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = True

secret = os.getenv('SECRET_KEY')
print(secret)

@app.route('/')
def index():
    return "Hello world"

if __name__ == "__main__":
    app.run(debug=True)