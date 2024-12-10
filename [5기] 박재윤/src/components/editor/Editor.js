import { request } from '../../utils/api.js'

function Editor({ $target, initialState, onEditing }) {
    const $editor = document.createElement('div')
    $editor.className = 'editor'

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render
    }

    this.render = () => {
        $editor.innerHTML = `
        <input name='title' placeholder="제목없음" class="editorTitle" value=${this.state.title} />
        <textarea name='content' placeholder="내용을 입력하세요" class="editorContent">${this.state.content}</textarea>

    `
    }
    this.render()

    $target.appendChild($editor)

    $editor.addEventListener('keyup', (e) => {
        const attributeName = e.target.getAttribute('name')
        onEditing()
    })
}

export default Editor
