const wrapper = document.body;

    function createImageCard(index) {
      const container = document.createElement('div');
      container.classList.add('container-images');

      const img = document.createElement('img');

      // Use a fixed size to prevent layout issues
      img.src = `https://picsum.photos/300/430?random=${index}`;
      img.alt = `Random Image ${index}`;

      container.appendChild(img);
      return container;
    }

    // Generate 20 images
    for (let i = 0; i < 20; i++) {
      const imageCard = createImageCard(i);
      wrapper.appendChild(imageCard);
    }