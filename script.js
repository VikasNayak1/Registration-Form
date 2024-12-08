document.getElementById("submitButton").addEventListener("click", () => {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const gender = document.getElementById("gender").value;

  if (name && email && contact && dob && gender) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <p><strong>Registration Completed Successfully!</strong></p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${contact}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Gender: ${gender}</p>
    `;
    outputDiv.style.display = "block";
  } else {
    alert("Please fill in all fields!");
  }
});
