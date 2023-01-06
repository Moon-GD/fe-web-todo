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
    PATH_TODO_LIST, PATH_DOING_LIST, PATH_DONE_LIST,
    getData
}