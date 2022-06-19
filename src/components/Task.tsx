import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'


function Task({ key, profName, index }: { key: string, profName: string, index: number }) {
    return (
        <div className='prof'>
            <Draggable draggableId={key} index={index}>
                {provider => (
                    <div
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        ref={provider.innerRef}
                        className="NomProf2"
                    >
                        {profName}
                    </div>
                )}
            </Draggable>
        </div>
    )
}

export default Task