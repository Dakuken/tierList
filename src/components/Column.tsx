import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

function Column({ container, profs }: { container: { id: string, name: string, profOrder: string[] }, profs: { id: string, name: string }[] }) {
    return (
        <div className='container'>
            <h2>{container.name}</h2>
            <Droppable droppableId={container.id}>
                {provider => (
                    <div {...provider.droppableProps}
                        ref={provider.innerRef}
                        className="profs_list"
                    >
                        {profs.map((prof, index) => (
                            <Task key={prof.id} prof={prof} index={index} />
                        ))}
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>

        </div>
    )
}

export default Column