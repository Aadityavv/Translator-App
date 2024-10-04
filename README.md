
# Speech-to-Text Translator

This project is a real-time speech-to-text translator that allows users to record their audio, transcribe it, and translate it into different languages. The app uses Whisper for transcription, Google Translate API for language translation, and gTTS for text-to-speech translation playback.

## Features
- Real-time speech transcription using Whisper.
- Language translation across multiple languages using Google Translate API.
- Audio playback of translated text using gTTS.
- Interactive web interface with Flask, HTML, CSS, and JavaScript.

## Project Structure

```
translator/
├── static/
│   ├── script.js       # Frontend JavaScript functionality
│   ├── style.css       # Styles for the web interface
├── templates/
│   ├── index.html      # Main HTML template
├── translation.py      # Main Flask application file
├── requirements.txt    # Dependencies for the project
```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Translator-App.git
   cd Translator-App
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Install **ffmpeg** for audio processing (required for Whisper):
   - On Windows: Download from [ffmpeg.org](https://ffmpeg.org/download.html) and add to your system's PATH.
   - On Linux/macOS: Install via your package manager:
     ```bash
     sudo apt install ffmpeg
     ```

## Running the App

1. Run the Flask application:
   ```bash
   python translation.py
   ```

2. Open a browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```

## How the Project Works

- **Whisper**: Used to transcribe the audio from the user's microphone input.
- **Google Translate API**: Translates the transcribed text into the target language selected by the user.
- **gTTS**: Converts the translated text into speech, allowing the user to hear the translation.

## Technologies Used

- **Python** (Flask, Whisper, gTTS)
- **HTML5**, **CSS3**, **JavaScript**
- **Google Translate API**
- **ffmpeg** (for audio processing)

## License

This project is licensed under the MIT License.
