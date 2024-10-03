import whisper
import torch
from flask import Flask, render_template, request, jsonify, send_file
from googletrans import Translator
from gtts import gTTS
import os
import time

app = Flask(__name__)

# Load Whisper model (using tiny for faster performance)
model = whisper.load_model("tiny", device="cuda" if torch.cuda.is_available() else "cpu")

# Initialize Google Translator
translator = Translator()

# Function for text-to-speech using gTTS
def text_to_speech(text, lang="en", filename="output.mp3"):
    tts = gTTS(text=text, lang=lang)
    tts.save(filename)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate_audio():
    user_text = request.form.get('text', '')  # Get user text input
    source_language = request.form['source_language']
    target_language = request.form['target_language']

    # Handle audio or text input
    if not user_text:
        audio_data = request.files['audio'].read()  # Get the raw audio data from the request
        with open('recorded_audio.wav', 'wb') as f:
            f.write(audio_data)

        # Transcribe the saved audio file with Whisper using the source language
        result = model.transcribe('recorded_audio.wav', language=source_language)
        text = result['text']
    else:
        text = user_text  # Use text if provided

    # Translate the text into the target language
    translated = translator.translate(text, src=source_language, dest=target_language)

    # Generate a unique filename for each audio file (e.g., output_<timestamp>.mp3)
    timestamp = str(int(time.time()))
    audio_filename = f"output_{timestamp}.mp3"

    # Convert the translated text to speech using gTTS
    text_to_speech(translated.text, lang=target_language, filename=audio_filename)

    return jsonify({'translated_text': translated.text, 'audio_file': audio_filename})

@app.route('/play_audio/<filename>')
def play_audio(filename):
    return send_file(filename, mimetype='audio/mpeg')

if __name__ == '__main__':
    app.run(debug=True)
    