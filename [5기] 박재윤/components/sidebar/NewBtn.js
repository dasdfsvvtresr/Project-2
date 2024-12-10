export default function NewBtn({ $target, onCreate }) {
    const $newBtn = document.createElement('button')
    $newBtn.textContent = '+ New Button'
    $newBtn.className = 'newBtn'
    $target.appendChild($newBtn)

    $newBtn.addEventListener('click', () => {
        onCreate()
    })
}
