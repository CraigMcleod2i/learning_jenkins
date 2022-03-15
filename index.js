document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    // a comment
});

function handleSubmit(event){
    event.preventDefault()
    const input = document.querySelector('#post-field').value
    const body = JSON.stringify({"test_description": input})
    fetch('http://localhost:3000/test', {method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: body}).then(fetchData())
}

const fetchData = () => {
    fetch('http://localhost:3000/test').then(res => {
        return res.json()
    })
    .then(dataArray => {
        const htmlToAppend = document.querySelector('#database')
        htmlToAppend.innerHTML = ''
        dataArray.forEach(element => {
            let p = document.createElement('p')
            let node = document.createTextNode(element.test_description)
            p.setAttribute('value', element.id)
            element.test_description &&
            p.appendChild(node)
            htmlToAppend.appendChild(p)
        });
    })
}