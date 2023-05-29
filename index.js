const modal = document.querySelector('#modal')
const btn = document.getElementById('btn')
const openModal = document.getElementById('openModal')
const fechar = document.getElementById('fechar')
const closeModal = document.querySelector('#closeModal')

function handleModal() {
    modal.classList.toggle('modalOpen')
}

btn.addEventListener("click", handleModal)
fechar.addEventListener("click", handleModal)