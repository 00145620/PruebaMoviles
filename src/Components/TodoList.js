import react from "react";

const TodoList = ({todos, setTodos}) =>{

     const whenComplete = (todo) =>{
          setTodos(
               todos.map((item) =>{
                    if(item.id === todo.id){
                         return{...item, completed: !item.completed}
                    }
                    return item;
               })
          )
     }

     return(

          <div>
               {todos.map((todo) => (
                    <li className="list_item" key={todo.id}>
                         <input type="text" value={todo.title} className={`list ${todo.completed ? "completed" :  ""}`} onChange={(event) => event.preventDefault()}/>
                         
                              <button className="button_completed task_button" onClick={ () => whenComplete(todo)}>
                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M5 12l5 5l10 -10" />
                                   </svg>
                              </button>
                         
                    </li>
               ))}
          </div>
     )
}

export default TodoList;
