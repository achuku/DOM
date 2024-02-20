const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');


    btn.addEventListener('click' , () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const sp = document.createElement('span');
    const btn2 = document.createElement('button');

    listItem.appendChild(sp);
    sp.textContent = myItem;
    listItem.appendChild(btn2);
    btn2.textContent = 'Delete';
    list.appendChild(listItem);
    
    btn2.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});

//btn.addEventListener('click', clickButton);