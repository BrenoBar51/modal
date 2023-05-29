const modal = document.querySelector('#modal')
const btn = document.getElementById('btn')
const openModal = document.getElementById('openModal')
const fechar = document.getElementById('fechar')
const closeModal = document.querySelector('#closeModal')
const enviar = document.getElementById('enviar')

function handleModal() {
    modal.classList.toggle('modalOpen')
}

function alerta(){
    alert("Enviado!")
}

btn.addEventListener("click", handleModal)
fechar.addEventListener("click", handleModal)
enviar.addEventListener("click", alerta)