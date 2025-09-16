class Member {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.clubs = [];
  }
}

let currentMember = null;

const landingPage = document.getElementById("landingPage");
const mainApp = document.getElementById("mainApp");
const fakeSignupBtn = document.getElementById("fakeSignupBtn");

fakeSignupBtn.addEventListener("click", () => {
  const name = document.getElementById("userName").value.trim() || "Guest";
  const email = document.getElementById("userEmail").value.trim() || "guest@example.com";

  currentMember = new Member(`m${Date.now()}`, name, email);

  landingPage.style.display = "none";
  mainApp.style.display = "block";

  document.getElementById("displayName").innerText = `Welcome, ${currentMember.name}!`;
});