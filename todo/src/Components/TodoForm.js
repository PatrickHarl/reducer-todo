import React, { useReducer, useState } from 'react'
import { initialState } from '../reducers/Reducer'
import { Reducer as reducer } from '../reducers/Reducer'
import { Todo } from './Todo'


export const TodoForm = () => {

    const [state, dispatch] = useReducer(reducer, [initialState])
    const [newItem, setNewItem] = useState('')
    const [tags, setTags] = useState('')

    const handleChanges = (e) => {

        e.preventDefault()
        
        if(e.target.name === 'todo')
        {

            setNewItem(e.target.value)

        }
        if(e.target.name === 'tags')
        {

            setTags(e.target.value)

        }
       

    }

    const addToList = (e) => {

        e.preventDefault()

        dispatch({type:'ADD_TODO', newItem:newItem, tags:tags})


    }

    const toggleToDo = (e) => {


        e.preventDefault()
   
        const index = state.findIndex(element => JSON.stringify(element.id) === e.target.id)

        dispatch({type:'TOGGLE_TODO', payload: index})


    }

    const clearCompleted = (e) => {


        e.preventDefault()

        dispatch({type:'CLEAR_COMPLETED'})


    }

    return (
        <div>
        <div>
            {
            
            state.map(todo => {

                return <Todo todo={todo} toggleToDo={toggleToDo} />

            })

            }
        </div>
        <form className='form'>
            <div>
                <input className='input' placeholder='...todo' onChange={handleChanges} type='text' name='todo' value={newItem} />
                <input className='input' placeholder='...tags' onChange={handleChanges} type='text' name='tags' value={tags} />
                <div>
                    <button className='btn' onClick={addToList}>Add ToDo</button>
                    <button className='btn' onClick={clearCompleted}>Clear Completed</button>
                </div>
            </div>
        </form>
        </div>


    )


}
