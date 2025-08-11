const addBookBtn = document.querySelector('.addBook');

addBookBtn.addEventListener('click', () => {
    const bookInput = document.querySelector('.book');
    const authorInput = document.querySelector('.author');
    const yearInput = document.querySelector('.year');

    const book = bookInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();

    if (book === '' || author === '' || year === '') {
        alert('Please add the items');
    } else {
        const containerUl = document.querySelector('ul');

        const items = document.createElement('div');
        items.className = 'container-output-list';
        items.innerHTML = `
            <li>${book}</li>
            <li>${author}</li>
            <li>${year}</li>
        `;

        containerUl.appendChild(items);

        // Reset input values
        bookInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
    }
});
