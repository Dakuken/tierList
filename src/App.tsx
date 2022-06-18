import * as React from 'react';
import { List, arrayMove } from 'baseui/dnd-list';
export default class Example extends React.Component<
    {},
    { items: Array<React.ReactNode> }
> {
    state = {
        items: [
            "A.SPENGLER",
            "L.ZERTAL",
            "B.HEULLUY",
            "N.GINOUX",
            "N.BOUGDIRA",
            "M.MARTINEZ",
            "S.MINICH",
            "M.AILLERIE",
            "P.MELY",
            "I.KADRI",
            "D.BORDIER",
            "R.JAGER",
            "M.COQUILLAT",
            "C.GROUTSCH (FEMELLE)",
            "Y.GROUTSCH (MALE)",
            "S.MESSAOUDI",
            "P.NITSCHKE",
            "P.LAROCHE",
            "N.JOZEFOWIEZ",
            "R.FREYDIGER",
        ],
    };
    render() {
        return (
            <List
                items={this.state.items}
                onChange={({ oldIndex, newIndex }) =>
                    this.setState(prevState => ({
                        items: arrayMove(prevState.items, oldIndex, newIndex),
                    }))
                }
            />
        );
    }
}