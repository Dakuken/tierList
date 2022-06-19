import { Draggable } from 'react-beautiful-dnd'


function Task({ prof, index }: { prof: { id: string, name: string }, index: number }) {
    return (

        <Draggable draggableId={prof.id} index={index}>
            {provider => (
                <div
                    className="task_item"
                    {...provider.draggableProps}
                    {...provider.dragHandleProps}
                    ref={provider.innerRef}
                >
                    {prof.name}
                </div>
            )}
        </Draggable>
    )
}

export default Task