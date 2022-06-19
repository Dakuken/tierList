import React, { useState } from 'react'
import data from '../config/data'
import Column from './Column'
// import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'



function Tasks() {
    const [datas, setdDatas] = useState(data)
    // console.log(datas);
    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result
        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        console.log(destination);
        console.log(source);
        console.log(draggableId);

        //si on bouge les elements
        const column = data.container[source.droppableId]
        // on recup les id des profs actuelle
        const newProfIds = Array.from(column.profOrder)
        console.log(newProfIds, '^dsflg ,d^flgdùml ;ùm; gfdlmgf ùdg;');

        //on remplace dans l'array
        newProfIds.splice(source.index, 1)
        newProfIds.splice(destination.index, 0, draggableId)
        // on crée une copie de la colonne de profs modifié
        const newColumn = {
            ...column,
            profOrder: newProfIds,
        }

        const newState = {
            ...data,
            container: {
                ...data.container,
                [newColumn.id]: newColumn,
            }
        }


        setdDatas(newState)
        console.log(column);
        return




    }

    return (

        <div className='tasks'>
            <DragDropContext onDragEnd={onDragEnd}>
                {datas.ContainerOrder.map(contId => {
                    const container = data.container[contId]
                    const profs = container.profOrder.map(profId => datas.profs[profId])
                    return <Column key={container.id} container={container} profs={profs} />
                })}

            </DragDropContext>
        </div >
    )
}

export default Tasks