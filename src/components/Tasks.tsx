import React, { useState } from 'react'
import data from '../config/data'
import Column from './Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'




function Tasks() {
    const [datas, setdDatas] = useState(data)
    // console.log(datas);
    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result
        if (!destination) {
            return
        }
        console.log(destination);
        console.log(source);
        console.log(draggableId);

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