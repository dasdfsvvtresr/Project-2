import { request } from '../../utils/api.js'
import Editor from './Editor.js'

export default function EditorPage({ $target, initialState }) {
    const $page = document.createElement('div')
    $page.className = 'editorPage'

    this.state = initialState

    $target.appendChild($page)

    const onEditing = (id) => {
        if (this.state.parent == 'new') {
            request('', {
                method: 'POST',
                body: JSON.stringify({
                    title: '',
                    content: '',
                }),
            })
        } else {
            request(`/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: '수정문서',
                    content: '내용 수정',
                }),
            })
        }
    }

    new Editor({ $target: $page, initialState, onEditing })
}
