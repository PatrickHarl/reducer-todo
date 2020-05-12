import React from 'react'
import '../Todo.css'
import { Tag } from './Tag'

export const Todo = (props) => {

    return(
        <div className='container'>
        <div className='todo-list'>
            <div onClick={props.toggleToDo} className={props.todo.completed ? 'complete':''} id={props.todo.id}>{props.todo.item}</div>
            <div>{props.todo.tags.map(tag => {return <Tag tag={tag}/>})}</div>
        </div>
        </div>

    )


}