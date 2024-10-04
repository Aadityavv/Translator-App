<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speech-to-Text Translator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #00509e;
        }
        code {
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 5px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-left: 3px solid #00509e;
            overflow-x: auto;
            border-radius: 5px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        ul {
            list-style-type: square;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Speech-to-Text Translator</h1>
        <p>This project is a real-time speech-to-text translator that allows users to record their audio, transcribe it, and translate it into different languages. The app uses Whisper for transcription, Google Translate API for language translation, and gTTS for text-to-speech translation playback.</p>

        <h2>Features</h2>
        <ul>
            <li>Real-time speech transcription using Whisper.</li>
            <li>Language translation across multiple languages using Google Translate API.</li>
            <li>Audio playback of translated text using gTTS.</li>
            <li>Interactive web interface with Flask, HTML, CSS, and JavaScript.</li>
        </ul>

        <h2>Project Structure</h2>
        <pre>
translator/
├── static/
│   ├── script.js       # Frontend JavaScript functionality
│   ├── style.css       # Styles for the web interface
├── templates/
│   ├── index.html      # Main HTML template
├── translation.py      # Main Flask application file
├── requirements.txt    # Dependencies for the project
        </pre>

        <h2>Installation</h2>
        <ol>
            <li>Clone this repository:</li>
            <pre><code>git clone https://github.com/yourusername/Translator-App.git
cd Translator-App
            </code></pre>
            <li>Create and activate a virtual environment:</li>
            <pre><code>python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
            </code></pre>
            <li>Install the required dependencies:</li>
            <pre><code>pip install -r requirements.txt
            </code></pre>
            <li>Install <strong>ffmpeg</strong> for audio processing (required for Whisper):</li>
            <ul>
                <li>On Windows: Download from <a href="https://ffmpeg.org/download.html">ffmpeg.org</a> and add to your system's PATH.</li>
                <li>On Linux/macOS: Install via your package manager:</li>
                <pre><code>sudo apt install ffmpeg</code></pre>
            </ul>
        </ol>

        <h2>Running the App</h2>
        <ol>
            <li>Run the Flask application:</li>
            <pre><code>python translation.py</code></pre>
            <li>Open a browser and navigate to:</li>
            <pre><code>http://127.0.0.1:5000</code></pre>
        </ol>

        <h2>How the Project Works</h2>
        <ul>
            <li><strong>Whisper</strong>: Used to transcribe the audio from the user's microphone input.</li>
            <li><strong>Google Translate API</strong>: Translates the transcribed text into the target language selected by the user.</li>
            <li><strong>gTTS</strong>: Converts the translated text into speech, allowing the user to hear the translation.</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
            <li><strong>Python</strong> (Flask, Whisper, gTTS)</li>
            <li><strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong></li>
            <li><strong>Google Translate API</strong></li>
            <li><strong>ffmpeg</strong> (for audio processing)</li>
        </ul>

        <h2>License</h2>
        <p>This project is licensed under the MIT License.</p>
    </div>
</body>
</html>
