export const API_END_POINT =
    'https://mwu1.notion.edu-api.programmers.co.kr/documents'

export const request = async (params, option = {}) => {
    try {
        const response = await fetch(`${API_END_POINT}${params}`, {
            ...option,
            headers: {
                'x-username': 'test',
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            return response.json()
        }

        throw new Error('API 요청 에러')
    } catch (e) {
        console.log(e.message)
    }
}
