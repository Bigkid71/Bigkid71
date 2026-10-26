fetch("https://bigkid71.onrender.com/api/message")
  .then(response => response.json())
  .then(data => {
    document.getElementById("output").innerText = data.text;
  })
  .catch(err => {
    document.getElementById("output").innerText = "Error connecting to backend.";
    console.error(err);
  });