const result = document.querySelector('#result'); // Fixed selector (was .result)
const filter = document.querySelector('.filter');
const listItems = [];

const fetchData = async () => {
    try {
        const data = await fetch('https://randomuser.me/api/?results=50');
        const { results } = await data.json();

        console.log(results); // See the fetched data in console

        result.innerHTML = ''; // Clear initial "loading..."

        results.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `;
            listItems.push(li);
            result.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        result.innerHTML = '<li><h3>Failed to load users</h3></li>';
    }
};

function filterUsers(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

filter.addEventListener('input', (e) => filterUsers(e.target.value));

// Initial data fetch
fetchData();
