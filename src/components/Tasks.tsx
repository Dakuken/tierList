import React, { useState } from 'react'
import data from '../config/data'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'




function Tasks() {
    const [datas, setdDatas] = useState(data)
    // console.log(datas);
    const onDragEnd = () => {
        console.log('toto');

    }

    return (

        <div className='tasks'>
            <DragDropContext onDragEnd={onDragEnd}>
                {datas.profOrder.map((profId, index) => {
                    const prof = datas.profs[profId]
                    // return <Column key={prof.id} profName={prof.name} index={index} />
                    return <div> p</div>
                })}

            </DragDropContext>
        </div >
    )
}

export default Tasks