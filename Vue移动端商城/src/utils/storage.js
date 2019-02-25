export default {
    getLocal(name) {
        if (!name) return
        return JSON.parse(window.localStorage.getItem(name))
    },
    setLocal(name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.localStorage.setItem(name, content)
    },
    removeLocal(name) {
        if (!name) return
        window.localStorage.removeItem(name)
    }
}
