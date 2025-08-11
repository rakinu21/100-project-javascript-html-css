const randombtn = document.querySelector('.random');
const profileImg = document.querySelector('.image-name img');
const profileName = document.querySelector('.image-name .name');

const firstNameSpan = document.querySelector('.first-name span');
const lastNameSpan = document.querySelector('.lastt-name span');
const locationSpan = document.querySelector('.location span');
const phoneSpan = document.querySelector('.phone-number span');
const emailSpan = document.querySelector('.email span');

async function profileData() {
    try {
        const res = await fetch('https://randomuser.me/api/');
        const { results } = await res.json();
        const user = results[0];

        console.log(user)

        // Update DOM elements with user data
        profileImg.src = user.picture.large;
        profileName.textContent = `${user.name.first} ${user.name.last}`;
        firstNameSpan.textContent = user.name.first;
        lastNameSpan.textContent = user.name.last;
        locationSpan.textContent = `${user.location.city}, ${user.location.country}`;
        phoneSpan.textContent = user.phone;
        emailSpan.textContent = user.email;

    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

// Load one user on page load
profileData();

// Change user when button is clicked
randombtn.addEventListener('click', profileData);
