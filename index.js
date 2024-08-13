const LIST = document.getElementsByTagName('ul')[0];
const INPUT = document.getElementsByTagName('input')[0];
let NEXT_IDX = 0;

function addItem() {
    const value = INPUT.value;
    if (!value)  return ;

    const html_li = document.createElement('li');
    html_li.innerHTML = value;
    const li_buttonEdit = document.createElement('button');
    li_buttonEdit.textContent = 'Edit nigga';
    li_buttonEdit.setAttribute('class', 'btnEdit');
    li_buttonEdit.setAttribute('id', 'edit_' + NEXT_IDX);
    li_buttonEdit.setAttribute('editing_' + NEXT_IDX, 'false');
    li_buttonEdit.addEventListener('click', (e) => 
        editItem(e, html_li, getAttributeNode(attributes.startsWith('editing_')))
    );
    // li_buttonEdit.getAttributeNode
    const li_buttonRemove = document.createElement('button');
    li_buttonRemove.textContent = 'Remove nigga';
    li_buttonRemove.setAttribute('class', 'btnRemove'); 
    li_buttonRemove.setAttribute('id', 'remove_' + NEXT_IDX);
    li_buttonRemove.addEventListener('click', (e) => removeItem(e, html_li))
    NEXT_IDX++;

    html_li.appendChild(li_buttonEdit);
    html_li.appendChild(li_buttonRemove);
    LIST.appendChild(html_li);
    INPUT.value = '';
}

function editItem(event, ref, editingRef) {
    event.preventDefault();
    if (!ref)   console.error('watefuk bro');
    else {
        let editing = editingRef.value;
        console.log(editing);
        if (!editing) {
            editingRef.value = true;
            const ipt = document.createElement('input');
            ref.appendChild(ipt);
            ref.children[0].innerHTML = 'save changes';
        } else {
            editingRef.value = false;
            const input = ref.getElementsByTagName('input')[0];
            ref.innerHTML = input.value;
            ref.removeChild(input);
            ref.children[0].innterHTML = 'Edit nigga';
        }
    }
}

function removeItem(event, ref) {
    event.preventDefault();
    if (!ref)   console.error('wtf has happened??');
    else        LIST.removeChild(ref);
}

INPUT.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});

document.getElementsByTagName('button')[0]
    .addEventListener('click', () => addItem());


function orderIndexes() {
    // algorithm to reorder index numbers from individual li's
}