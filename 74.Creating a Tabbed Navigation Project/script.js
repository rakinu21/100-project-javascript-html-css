const pageData = {
  about: {
    type: "profile",
    title: "About",
    content: {
      name: "rakinu kinu",
      heading: "about me",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
    }
  },

  courses: {
    type: "courses",
    title: "Courses",
    items: [
      {
        name: "Html course",
        image: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=500&auto=format&fit=crop&q=60"
      },
      {
        name: "Css course",
        image: "https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=500&auto=format&fit=crop&q=60"
      },
      // add more courses as needed...
    ]
  },

  contact: {
    type: "contact",
    title: "Contact",
    links: [
      "facebook",
      "github",
      "twitter",
      "email"
    ]
  }
};

// DOM references
const navContainer = document.querySelector(".nav");
const contentContainer = document.querySelector(".contents");

// Create nav buttons dynamically
Object.keys(pageData).forEach((key) => {
  const btn = document.createElement("button");
  btn.className = "button";
  btn.textContent = pageData[key].title;
  btn.dataset.section = key;

  btn.addEventListener("click", () => {
    renderSection(key);
    setActiveButton(btn);
  });

  navContainer.appendChild(btn);
});

// Utility: remove active class from others
function setActiveButton(activeBtn) {
  document.querySelectorAll(".nav .button").forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

// Render section
function renderSection(key) {
  const section = pageData[key];
  contentContainer.innerHTML = ""; // clear previous

  if (section.type === "profile") {
    const { heading, image, name, description } = section.content;

    contentContainer.innerHTML = `
      <div class="profile">
        <h1 class="about">${heading}</h1>
        <div class="image-container">
          <img src="${image}" alt="" class="image-about">
        </div>
        <span class="name">${name}</span>
        <p class="text">${description}</p>
      </div>
    `;
  }

  else if (section.type === "courses") {
    const container = document.createElement("div");
    container.className = "courses-container";

    section.items.forEach(course => {
      const div = document.createElement("div");
      div.className = "course";
      div.innerHTML = `
        <div class="image">
          <img src="${course.image}" alt="" class="image-course">
        </div>
        <h2 class="course-name">${course.name}</h2>
      `;
      container.appendChild(div);
    });

    contentContainer.appendChild(container);
  }

  else if (section.type === "contact") {
    const container = document.createElement("div");
    container.className = "contact-container";

    const ul = document.createElement("ul");
    section.links.forEach(link => {
      const li = document.createElement("li");
      li.textContent = link;
      ul.appendChild(li);
    });

    container.appendChild(ul);
    contentContainer.appendChild(container);
  }
}

// Initial render
renderSection("about");
document.querySelector(".nav .button").classList.add("active");
