const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey, I\'m red';
para.style.color = 'red';
container.appendChild(para);

const title = document.createElement('h3');
title.textContent = 'I\’m a blue h3!';
title.style.color = 'blue';
container.appendChild(title);

const div = document.createElement('div');
div.style.border = 'black';
div.style.backgroundColor = 'pink';


const title2 = document.createElement('h1');
title2.textContent = 'I\'m a div';
div.appendChild(title2);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';
div.appendChild(para2);

container.appendChild(div);
