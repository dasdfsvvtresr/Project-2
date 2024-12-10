import { request } from '../../utils/api.js'
function SideBarList({ $target, initalState, onEditing }) {
    const $list = document.createElement('div')
    $target.appendChild($list)

    this.state = initalState

    this.setState = async () => {
        const documentList = await request(``)
        this.state = documentList
        this.render()
    }

    this.createTreeView = (data) => {
        let str = ''
        for (const key in data) {
            if (data[key].documents.length > 0) {
                str += `
                    <li class="dataList" data-id="${data[key].id}">
                        📄 ${data[key].title}
                        <button class="addBtn" data-id="${
                            data[key].id
                        }">➕</button>
                        <button class="delBtn" data-id="${
                            data[key].id
                        }">🗑️</button>
                        <ul>${this.createTreeView(data[key].documents)}</ul>
                    </li>
               `
            } else {
                str += `
                <li class="dataList" data-id="${data[key].id}">
                    📄 ${data[key].title}
                    <button class="addBtn" data-id="${data[key].id}">➕</button>
                    <button class="delBtn" data-id="${data[key].id}">🗑️</button>
                </li>
           `
            }
        }

        return str
    }

    this.render = () => {
        $list.innerHTML = `
        <ul class="documentList">
            ${this.state
                .map(
                    (document) =>
                        `<li class="dataList" data-id="${document.id}">📄 ${
                            document.title
                        }
                        <button class="addBtn" data-id="${
                            document.id
                        }">➕</button>
                        <button class="delBtn" data-id="${
                            document.id
                        }">🗑️</button>
                    </li>
                    ${
                        document.documents.length > 0
                            ? `<ul>${this.createTreeView(
                                  document.documents
                              )} </ul>`
                            : ''
                    }
                    
                    
                    `
                )
                .join('')}
        </ul>
    `
    }
    this.render()

    const onDelete = async (id) => {
        await request(`/${id}`, {
            method: 'DELETE',
        })
        this.setState()
    }

    const onUpate = async (id) => {
        await request('', {
            method: 'POST',
            body: JSON.stringify({
                title: '제목없음',
                parent: id,
            }),
        })
        this.setState()
    }
    $list.addEventListener('click', (e) => {
        const classname = e.target.className
        const id = e.target.dataset.id

        if (classname == 'delBtn') {
            onDelete(id)
        } else if (classname == 'addBtn') {
            onUpate(id)
        } else if (classname == 'dataList') {
            onEditing(id)
        }
    })
}

export default SideBarList
