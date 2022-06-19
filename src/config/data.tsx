
interface pp {
    container: {
        [key: string]: {
            id: string,
            name: string,
            profOrder: string[]
        }
    },
    profs: {
        [key: string]: {
            id: string
            name: string
        }
    },
    ContainerOrder: string[]
}



const data: pp = {
    container: {
        container1: {
            id: 'container1',
            name: 'Container1',
            profOrder: ["prof1", "prof2", "prof3", "prof4", "prof5", "prof6", "prof7", "prof8", "prof9", "prof10", "prof11", "prof12", "prof13", "prof14", "prof15", "prof16", "prof17", "prof18", "prof19", "prof20"]
        }
    },
    profs: {
        "prof1": {
            id: "prof1",
            name: 'A.SPENGLER',
        },
        "prof2": {
            id: "prof2",
            name: 'L.ZERTAL',
        },
        "prof3": {
            id: "prof3",
            name: "B.HEULLUY"
        },
        "prof4": {
            id: "prof4",
            name: "N.GINOUX",
        },
        "prof5": {
            id: "prof5",
            name: "N.BOUGDIRA",
        },
        "prof6": {
            id: "prof6",
            name: "M.MARTINEZ",
        },
        "prof7": {
            id: "prof7",
            name: "S.MINICH",
        },
        "prof8": {
            id: "prof8",
            name: "M.AILLERIE",
        },
        "prof9": {
            id: "prof9",
            name: "P.MELY",
        },
        "prof10": {
            id: "prof10",
            name: "I.KADRI",
        },
        "prof11": {
            id: "prof11",
            name: "D.BORDIER",
        },
        "prof12": {
            id: "prof12",
            name: "R.JAGER",
        },
        "prof13": {
            id: "prof13",
            name: "M.COQUILLAT",
        },
        "prof14": {
            id: "prof14",
            name: "C.GROUTSCH (FEMELLE)"
        },
        "prof15": {
            id: "prof15",
            name: "Y.GROUTSCH (MALE)"
        },
        "prof16": {
            id: "prof16",
            name: "S.MESSAOUDI",
        },
        "prof17": {
            id: "prof17",
            name: "P.NITSCHKE",
        },
        "prof18": {
            id: "prof18",
            name: "P.LAROCHE",
        },
        "prof19": {
            id: "prof19",
            name: "N.JOZEFOWIEZ",
        },
        "prof20": {
            id: "prof20",
            name: "R.FREYDIGER",
        }
    },
    ContainerOrder: ["container1"]
}

export default data