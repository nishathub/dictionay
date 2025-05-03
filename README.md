# 🔤 Dictionary Web App

A basic and user-friendly dictionary web application with built-in error handling, synonym/antonym linking, dynamic UI interactions, and audio pronunciation support utilizing only **Vanilla Javascript**

## 🚀 Features

### ✅ Smart Error Handling
- **Word not found:** If a searched word does not exist in the dictionary API, a friendly message is shown.
- **API connection issue:** Displays a separate message if there’s a problem connecting to the API.

### 🎯 Enhanced Input Experience
- **Auto-focus:** The input field is automatically focused when the page loads for seamless typing.
- **Typing hint:** After typing at least 2 letters, a subtle message appears above the input field to guide the user.

### 🔗 Synonyms & Antonyms Interaction
- **Clickable links:** Synonyms and antonyms are underlined and clickable.
- **Search by click:** Clicking on any synonym or antonym automatically performs a new search with that word.

### 🔊 Audio Pronunciation
- **Play button integration:** The default audio player is hidden and replaced with a clean play button.
- **Multiple sources:** If available, backup audio sources are used to ensure playback.
- **No audio fallback:** If a word has no audio (e.g., try typing `interface`), the play button is hidden gracefully using error handling.

### 📚 Word Details
- **Comprehensive definitions:** Words may have multiple results (word arrays), each with its own set of definitions. All available definitions are displayed.
- **Part of speech & examples:** Each result also includes parts of speech and usage examples, shown clearly and cleanly for better understanding.

---

## 🛠 Tech Stack
- HTML/CSS/JavaScript 
- [Dictionary API](https://dictionaryapi.dev/)
- Custom UI logic and audio handling

---

## ✨ Try It Out
> Search for words like `happy`, `blue`, or `interface` to explore how different features behave under various scenarios.

