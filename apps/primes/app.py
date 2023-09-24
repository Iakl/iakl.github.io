from flask import Flask, send_file
import subprocess

app = Flask(__name__)


@app.route('/')
def index():
    # Run the Python script to generate the image
    subprocess.call(['python', 'generate_image.py'])

    # Serve the generated image
    return send_file('image.png', mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)
