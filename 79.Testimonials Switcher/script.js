const testimonialsContainer = document.querySelector('.testtimonial-container');
const testimonials = document.querySelector('.testimonials');
const userImage = document.querySelector('img');
const user = document.querySelector('.username');
const twitterHandle = document.querySelector('.twitter');

const testimonialsvalue = [
  {
    username: "Kineth",
    twitter: "@fornthejs",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae dolore reiciendis, ab quo doloremque quod culpa voluptates numquam ratione sit qui eius voluptate nemo consequuntur corporis, libero recusandae totam eos expedita facilis, sunt ducimus. Aut sequi est quos assumenda?"
  },
  {
    username: "Maria Lopez",
    twitter: "@maria_dev",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    testimonial: "This service truly exceeded my expectations. The attention to detail and responsiveness of the team made all the difference."
  },
  {
    username: "David Chen",
    twitter: "@davchen",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    testimonial: "Absolutely phenomenal experience. Everything was smooth from start to finish. Highly recommended!"
  },
  {
    username: "Lara Smith",
    twitter: "@larasmith",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    testimonial: "I was hesitant at first, but I'm so glad I went for it. The support team was incredible and helped me every step of the way."
  },
  {
    username: "Omar Ali",
    twitter: "@codewithomar",
    image: "https://images.unsplash.com/photo-1590080875513-271376bab5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    testimonial: "Great experience overall! The design is modern, clean, and easy to use. Would definitely use it again."
  }
];

let counter = 1;

function showNextTestimonials() {
  // Add animation class
  testimonialsContainer.classList.add("animate");

  // Delay content update so animation plays first
  setTimeout(() => {
    const { username, twitter, image, testimonial } = testimonialsvalue[counter];

    testimonials.innerHTML = testimonial;
    userImage.src = image;
    user.innerHTML = username;
    twitterHandle.innerHTML = twitter;

    // Remove animation class after animation
    testimonialsContainer.classList.remove("animate");

    counter++;
    if (counter > testimonialsvalue.length - 1) {
      counter = 0;
    }
  }, 300); // match CSS animation timing
}

setInterval(showNextTestimonials, 10000);
showNextTestimonials(); // show the first one immediately
