import React, { useState } from 'react'
import data from '../config/data'
import Column from './Column'
// import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'



function Tasks() {
    const [datas, setDatas] = useState(data)

    const OnDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result
        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        //si on bouge les elements
        const column = data.container[source.droppableId]
        // on recup les id des profs actuelle
        const newProfIds = Array.from(column.profOrder)
        //on remplace dans l'array
        newProfIds.splice(source.index, 1)
        newProfIds.splice(destination.index, 0, draggableId)
        // on crée une copie de la colonne de profs modifié
        const newColumn = {
            ...column,
            profOrder: newProfIds,
        }

        const newState = {
            ...datas,
            container: {
                ...data.container,
                [newColumn.id]: newColumn,
            }
        }

        setDatas(newState)
        return




    }


    return (

        <div className='tasks'>
            <DragDropContext onDragEnd={OnDragEnd}>
                {datas.ContainerOrder.map(contId => {
                    console.log(datas.container[contId].profOrder);
                    const container = datas.container[contId]
                    const profs = container.profOrder.map(profId => datas.profs[profId])
                    return <Column key={container.id} container={container} profs={profs} />
                })}

            </DragDropContext>
        </div >
    )
}

export default Tasks