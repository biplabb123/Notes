// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR.firebaseapp.com",
  projectId: "YOUR",
  storageBucket: "YOUR.appspot.com",
  messagingSenderId: "XXX",
  appId: "APP-ID"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

async function uploadNote() {
  const subject = document.getElementById('subject').value.trim();
  const file = document.getElementById('file').files[0];

  if (!subject || !file) {
    alert("Please enter subject and select a file");
    return;
  }

  const fileRef = storage.ref().child(`notes/${subject}/${file.name}`);
  await fileRef.put(file);

  const url = await fileRef.getDownloadURL();
  await db.collection("notes").add({ subject, url, filename: file.name });

  alert("Uploaded successfully!");
  loadNotes();
}

async function loadNotes() {
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';

  const snapshot = await db.collection("notes").get();
  snapshot.forEach(doc => {
    const data = doc.data();
    container.innerHTML += `
      <li>
        <strong>${data.subject}:</strong>
        <a href="${data.url}" target="_blank">${data.filename}</a>
      </li>`;
  });
}

window.onload = loadNotes;