let isRecording = false;  // Flag to track recording state
let mediaRecorder;  // MediaRecorder instance to control recording

// Handle text submission
document.getElementById("submitTextBtn").addEventListener("click", function() {
    let sourceLanguage = document.getElementById("sourceLanguageSelect").value;
    let targetLanguage = document.getElementById("targetLanguageSelect").value;
    let userText = document.getElementById("textContent").value;

    const formData = new FormData();
    formData.append('text', userText);
    formData.append('source_language', sourceLanguage);
    formData.append('target_language', targetLanguage);

    // Send the text to the backend
    fetch('/translate', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("translatedText").innerText = data.translated_text;

            // Play the translated audio
            let audioPlayer = document.getElementById("audioPlayer");
            audioPlayer.src = `/play_audio/${data.audio_file}`;
            audioPlayer.play();
        }
    })
    .catch(error => console.error('Error:', error));
});

// Handle audio recording
document.getElementById("recordBtn").addEventListener("click", function() {
    let sourceLanguage = document.getElementById("sourceLanguageSelect").value;
    let targetLanguage = document.getElementById("targetLanguageSelect").value;

    let micIcon = document.getElementById("recordBtn");
    let recordingStatus = document.getElementById("recordingStatus");

    // Toggle recording on and off
    if (!isRecording) {
        micIcon.classList.add("recording");  // Start pulse effect
        recordingStatus.style.display = "block";  // Show recording status
        isRecording = true;

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();

                mediaRecorder.ondataavailable = function(e) {
                    const formData = new FormData();
                    formData.append('audio', e.data, 'audio.wav');  // Audio file blob
                    formData.append('source_language', sourceLanguage);
                    formData.append('target_language', targetLanguage);

                    // Send the audio to the backend
                    fetch('/translate', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById("translatedText").innerText = data.translated_text;

                        // Play the translated audio
                        let audioPlayer = document.getElementById("audioPlayer");
                        audioPlayer.src = `/play_audio/${data.audio_file}`;
                        audioPlayer.play();

                        micIcon.classList.remove("recording");  // Stop recording animation
                        recordingStatus.style.display = "none";  // Hide recording status
                        isRecording = false;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        micIcon.classList.remove("recording");  // Stop recording animation
                        recordingStatus.style.display = "none";  // Hide recording status
                        isRecording = false;
                    });
                };

                // Stop recording after 5 seconds
                setTimeout(() => {
                    mediaRecorder.stop();
                }, 5000);
            });
    } else {
        // Stop recording
        mediaRecorder.stop();  // Stop the recording
        micIcon.classList.remove("recording");  // Stop pulse effect
        recordingStatus.style.display = "none";  // Hide recording status
        isRecording = false;
    }
});

const blurCircle = document.querySelector("#bgcolor");
document.addEventListener("mousemove", (e) => {
    blurCircle.style.left = `${e.clientX - blurCircle.offsetWidth / 2}px`;
    blurCircle.style.top = `${e.clientY - blurCircle.offsetHeight / 2}px`;
});
