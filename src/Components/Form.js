import react from "react";
import {v4 as uuidV4} from "uuid";

const Form = ({input, setinput, todos, setTodos}) =>{

     const onInputChange = (event) =>{
          setinput(event.target.value);
     };

     const onFormSubmit = (event) =>{
          event.preventDefault();
          setTodos([...todos,{id: uuidV4(), title: input, completed: false}]);
          setinput("");
     }

     return(
          <form onSubmit={onFormSubmit}>
               <input type="text" placeholder="Ingresa una Tarea..." className="input_task" value={input} required onChange={onInputChange}/>
               <button className="buttonAdd" type="submit"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
               </button>
          </form>
     )
}

export default Form;