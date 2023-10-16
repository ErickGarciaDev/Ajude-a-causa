const formulario = document.getElementById('form');

let data = {}
const urlParams = window.location.search
const split = urlParams.substring(1).split('&')
for (let item of split) {
    const splitedArrays = item.split('=');
    data[splitedArrays[0]] = splitedArrays[1];
}

data.id = Math.random() * 10
console.log(data)

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/registrations', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (!response.ok) {
            formulario.reset();
            throw new Error('Código de resposta inválido!');
        }
        alert('Inscrição feita com sucesso!');
        formulario.reset();
    }).catch((error) => {
        alert('Um erro ocorreu, por favor tente novamente mais tarde!');
    })
})