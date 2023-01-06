const TODO = 0
const DOING = 1
const DONE = 2

const PATH_TODO_LIST = "js/data-storage/todoList.json"
const PATH_DOING_LIST = "js/data-storage/doingList.json"
const PATH_DONE_LIST = "js/data-storage/doneList.json"
const xhr = new XMLHttpRequest();

async function getData(path) {
    xhr.open("GET", path)
    xhr.send()
    
    return await new Promise((resolve) => {
        xhr.onload = () => {
            if(xhr.status == 200) {
                resolve(JSON.parse(xhr.response))
            }
        }
    })
}


export {
    TODO, DOING, DONE,
    PATH_TODO_LIST, PATH_DOING_LIST, PATH_DONE_LIST,
    getData
}