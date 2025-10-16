const studentName = "Shreya"; 
let greeted = false; // track greeting

window.addEventListener("load", function () {
  greetUser();
});

function greetUser() {
  if (!greeted) {
    const chatBody = document.getElementById("chat-body");
    document.getElementById("chat-box").style.display = "flex";
    chatBody.innerHTML += `<div class="message bot"><b>Bot:</b> Hi ${studentName}! How can I help you today with HelpingHands or your childs future?</div>`;
    greeted = true;
  }
}

function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.style.display = (chatBox.style.display === "none") ? "flex" : "none";
  
  // Greeting if not done yet
  greetUser();
}

function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  const chatBody = document.getElementById("chat-body");
  chatBox.style.display = (chatBox.style.display === "none") ? "flex" : "none";

  if (isFirstClick) {
    chatBody.innerHTML += `<div class="message bot"><b>Bot:</b> HelpingHands virtual assistant. Ask me anything related to kids, studies, courses, or skill-building!</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
    isFirstClick = false;
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("user-input");
    const msg = input.value.trim();
    if (!msg) return;

    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML += `<div class="message user"><b>You:</b> ${msg}</div>`;

    const response = getResponse(msg.toLowerCase());
    chatBody.innerHTML += `<div class="message bot"><b>Bot:</b> ${response}</div>`;

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function getResponse(msg) {
  msg = msg.toLowerCase();

  // ===== Kids Mode =====
  if (msg.includes("hello") || msg.includes("hi")) {
    return "👋 Hi there, friend! I’m your learning buddy. Are you ready for some fun today? 🎉";
  }
  if (msg.includes("learn") || msg.includes("study")) {
    return "📚 Yay! We can learn letters, numbers, or colors today. Which one do you want to try first? 😊";
  }
  if (msg.includes("game") || msg.includes("play")) {
    return "🎲 Let’s play! Do you want a puzzle game 🧩, a coloring game 🎨, or a matching game 🔍?";
  }
  if (msg.includes("story")) {
    return "📖 I have happy stories 😊 and adventure stories 🏞️. Which one should we read together?";
  }
  if (msg.includes("song") || msg.includes("music")) {
    return "🎵 Let’s sing a song together! Do you want a happy song 😊 or a sleepy bedtime song 🌙?";
  }
  if (msg.includes("good job") || msg.includes("yay") || msg.includes("done")) {
    return "🎉 Woohoo! You’re doing amazing! I’m so proud of you! 🌟";
  }

  // ===== Parent Mode =====
  if (msg.includes("progress") || msg.includes("report")) {
    return "📊 Today’s Progress: 3 activities completed ✅, 2 puzzles solved 🧩, and 1 story read 📖. Keep it up!";
  }
  if (msg.includes("tip") || msg.includes("advice")) {
    return "💡 Tip: Repeat today’s activity tomorrow to boost your child’s confidence.";
  }

  // ===== Accessibility Mode =====
  if (msg.includes("read aloud") || msg.includes("speak")) {
    return "🔊 Sure! I can read instructions aloud for you. Just type what you want me to read.";
  }
  if (msg.includes("slow down") || msg.includes("slower")) {
    return "⏳ Of course! We can take things slowly. Let’s do one step at a time together. 💖";
  }
  if (msg.includes("bigger text") || msg.includes("large text")) {
    return "🔍 Great! I will make the text larger so it’s easier to read.";
  }
  if (msg.includes("color change") || msg.includes("bright colors")) {
    return "🌈 Okay! I can make things more colorful for you!";
  }

  // ===== Default fallback =====
  return "🤗 I can help you learn 📚, play 🎲, read stories 📖, or sing songs 🎵. What would you like to do today?";
}