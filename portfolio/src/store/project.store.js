const projects = [
    {
        title: 'Trail of Crumbs',
        imgSrc: require('@/assets/img/projects/Trail_Of_Crumbs.png'),
        id: 'trail_of_crumbs',
        blurb: '3D Collab Game Project',
        bodyComp: 'a',
        featured: true
    },
    {
        title: 'Antithesis',
        imgSrc: require('@/assets/img/projects/Antithesis.png'),
        id: 'antithesis',
        blurb: 'Large Studio VR Project',
        bodyComp: 'b',
        featured: true
    },
    {
        title: 'Fillball',
        imgSrc: require('@/assets/img/projects/Fillball.png'),
        id: 'fillball',
        blurb: 'Self-driven 3D Game in UE4',
        bodyComp: 'c'
    },
    {
        title: 'Narcoleptic Nummies',
        imgSrc: require('@/assets/img/projects/Narcoleptic_Nummies.png'),
        id: 'narcoleptic_nummies',
        blurb: 'GMTK Game Jam 2020',
        bodyComp: 'a'
    },
];

const state = {
    projects
};

const getters = {
    projects: state => {
        return state.projects;
    }
};

const store = {
    namespaced: true,
    state,
    getters
};

export default store;