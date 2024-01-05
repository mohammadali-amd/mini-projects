import { useContext } from 'react';
import { TodosContext } from '../store/todos-context'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

const Todos: React.FC = () => {
   const todosCtx = useContext(TodosContext)
   return (
      <ul className={classes.todos}>
         {todosCtx.items.map((item) => (
            <TodoItem
               key={item.id}
               text={item.text}
               removeTodo={todosCtx.removeTodo.bind(null, item.id)}
            />
         ))}
      </ul>
   )
}

export default Todos