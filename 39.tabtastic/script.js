
const data = [
  {
    title: "JavaScript",
    content: `JavaScript is a versatile programming language primarily used for web development.
It allows developers to create dynamic and interactive web applications.
It's supported by all modern browsers and often used with HTML and CSS.`,
  },
  {
    title: "HTML2",
    content: `HTML (HyperText Markup Language) is the standard language for creating web pages.
It structures content on the web using elements like headings, paragraphs, links, and images.
Every website starts with HTML.`,
  },
  {
    title: "CSS",
    content: `CSS (Cascading Style Sheets) is used to style HTML elements.
It controls layout, colors, fonts, and responsiveness.
CSS makes web pages visually appealing and adaptable to different screen sizes.`,
  },
  {
    title: "Node",
    content: `Node.js is a JavaScript runtime built on Chrome's V8 engine.
It enables server-side development using JavaScript.
Node is great for building scalable network applications and APIs.`,
  },
  {
    title: "React",
    content: `React is a JavaScript library for building user interfaces.
Created by Facebook, it's widely used for creating single-page applications (SPAs).
It uses components and a virtual DOM for efficient rendering.`,
  },
];



const contentTextShow = document.querySelector(".show-content");
const listContainer = document.querySelector(".list-container");




async function showdata() {

  try {
    data.forEach((items, index) => {
      const listItems = document.createElement("li");

      listItems.className = "items";
      listItems.innerHTML = items.title;

      listItems.addEventListener("click", () => {
        const allItems = document.querySelectorAll(".items");
        allItems.forEach((el) => el.classList.remove("active"));

        listItems.classList.add("active");

        contentTextShow.innerHTML = /*html */ `
               <h3>${items.title}</h3>
                <p class="textContent">${items.content}</p>
         `;
      });

      listContainer.appendChild(listItems);


      // ✅ Make first item active by default
      if (index === 0) {
        listItems.classList.add("active");

        contentTextShow.innerHTML = `
          <h3>${items.title}</h3>
          <p class="textContent">${items.content}</p>
        `;
      }
    });

  } catch (error) {
    console.log(error);
  }
}

showdata();
