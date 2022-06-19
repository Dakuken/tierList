import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

function Column({ key, profName, index }: { key: string, profName: string, index: number }) {
    return (
        <div>
            es f
            {/* <Droppable droppableId={key}>
                {provider => (
                    <div {...provider.droppableProps}
                        ref={provider.innerRef}
                        className="NomProf"
                    >
                        <Task key={key} profName={profName} index={index} />
                    </div>
                )}
            </Droppable> */}
        </div>
    )
}

export default Column