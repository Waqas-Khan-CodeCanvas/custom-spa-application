
import {fetchAndStoreUsers} from "../model/todoModel.js"
function loadUsers(){
    fetchAndStoreUsers().then((user)=> console.log(user))
}

export {loadUsers}

