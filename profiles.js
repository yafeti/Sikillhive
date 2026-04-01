
const people = [
  {
    name: "Yafeti Chidzaye",
    skill: "Graphic Designer",
    experience: "2 Years of experience",
    location: "Mitundu, Lilongwe",
    email: "yafetichidzaye@gmail.com",
    whatsapp: "265890277409",
    facebook: "https://www.facebook.com/profile.php?id=100095162181867",
    portfolio: "https://yafeti.github.io/YC-Graphics-/",
    image: "images/CEO.jpg"
  },
  {
    name: "Emmanuel Kamtima",
    skill: "Graphic Designer",
    experience: "10 Years of experience",
    location: "Chipoka, Salima",
    email: "emmanuelkamtima4@gmail.com",
    whatsapp: "265995985007",
    facebook: "https://www.facebook.com/manuel.kamtima",
    portfolio: "https://trensioelite.netlify.app",
    image: "images/Manzy.jpg"
  }
];

const container = document.getElementById("profiles");

people.forEach(person => {
  container.innerHTML += `
    <div class="profile-container">
        <div class="profile-image">
            <img src="${person.image}" alt="${person.name}">
        </div>

        <div class="profile-info">
            <h2>Professional Details</h2>
            <p><strong>NAME:</strong> ${person.name}</p>
            <p><strong>SKILL:</strong> ${person.skill}</p>
            <p><strong>EXPERIENCE:</strong> ${person.experience}</p>
            <p><strong>LOCATION:</strong> ${person.location}</p>
            <p><strong>EMAIL:</strong> ${person.email}</p>

            <div class="buttons">
                <a class="whatsapp" href="https://wa.me/${person.whatsapp}" target="_blank">WhatsApp</a>
                <a class="facebook" href="${person.facebook}" target="_blank">Facebook</a>
                <a class="email" href="mailto:${person.email}">Email</a>
                <a class="portfolio-btn" href="${person.portfolio}" target="_blank">View Portfolio</a>
            </div>
        </div>
    </div>
  `;
});
