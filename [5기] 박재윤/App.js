import Editor from './components/editor/Editor.js'
import EditorPage from './components/editor/EditorPage.js'
import SidebarPage from './components/sidebar/SidebarPage.js'

export default function App({ $target }) {
    const editorDummyData = {
        parent: 'new',
        title: '노션을 만들자',
        content: '노션 만들기~',
    }

    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const initalState = []

    const editorPage = new EditorPage({
        $target: $editorContainer,
        initialState: editorDummyData,
    })
    const onEditing = (id) => {
        console.log(id)
    }
    const sidebarPage = new SidebarPage({
        $target: $listContainer,
        initalState,
        onEditing,
    })

    sidebarPage.setState()
}
