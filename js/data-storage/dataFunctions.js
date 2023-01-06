const TODO = 0
const DOING = 1
const DONE = 2

const LOCAL_PATH = "http://127.0.0.1:5500/"
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

async function setData(path, action) {
    // xhr.open("POST", path)

    // xhr.onreadystatechange = function() {
    //     if(xhr.readyState != 4 || xhr.status != 200) {
    //         return;
    //     }

    //     if(xhr.responseURL == LOCAL_PATH + path) {
    //         console.log(xhr.response)
    //     }
    // }

    // xhr.send(JSON.stringify({}))

    const response = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      console.log(response, "response")
}

setData(PATH_DOING_LIST, "ADD")

export {
    TODO, DOING, DONE,
    PATH_TODO_LIST, PATH_DOING_LIST, PATH_DONE_LIST,
    getData
}