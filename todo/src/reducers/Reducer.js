import React from 'react'


export const initialState = {

    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    tags: [
        'school',
        'programming'
    ]

}


export const Reducer = (state, action) => {

    
    const newState = [...state]


    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {item:action.newItem, completed:false, id:Date.now(), tags:action.tags.split(",")}]
        case 'TOGGLE_TODO':
            newState[action.payload] = {...newState[action.payload], completed: !newState[action.payload].completed}
            return newState
        case 'CLEAR_COMPLETED':
            const filteredArray = newState.filter(todo => {

                return !todo.completed

            })
            return filteredArray
        default:
            return newState
            

    }

}

