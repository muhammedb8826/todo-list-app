import saveToLocalStorage from "./saveToDb.js";

const  removeData = (todoCollection) =>{
    const trashIcon = document.querySelectorAll('.trash');
     trashIcon.forEach((todo,item)=>todo.addEventListener('click',()=>{
        todoCollection = todoCollection.filter((todos,index)=>item !== index);
        todoCollection = todoCollection.map((todo, index) => ({ ...todo, index: index + 1 }));
         saveToLocalStorage(todoCollection);
         window.location.reload();
     }));
}

export default removeData;