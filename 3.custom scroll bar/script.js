


const data = [

    {
        id: 1,
        title:'text 1',
        content: 'content text 1'
    },
     {
        id: 2,
        title:'text 2',
        content: 'content text 2'
    },
     {
        id: 3,
        title:'text 3',
        content: 'content text 3'
    },
       {
        id: 3,
        title:'text 3',
        content: 'content text 3'
    },
       {
        id: 3,
        title:'text 3',
        content: 'content text 3'
    }
]

const container = document.getElementById('container')


data.map(item  => {

const createElementDiv = document.createElement('div');
createElementDiv.className = 'text';

createElementDiv.innerHTML = /*html*/ `

  <h1 class="title">${item.title}</h1>
   <p class="content">${item.content}</p>

`
 container.appendChild(createElementDiv)
})
