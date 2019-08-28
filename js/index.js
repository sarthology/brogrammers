// components
const Navbar = {
    view: () => {
        return m(
            '.navbar',

            m('img', {
                src: '../assets/yoga.svg',
                alt: 'yoga.svg',
                class: 'icon'
            }),

            m('h1', 'Brogrammer'),

            m('img', {
                src: '../img/audio.svg',
                class: 'f-audio',
                alt: 'audio.svg'
            })
        );
    }
};

const SearchArea = {
    view: () => {
        return m(
            '#search.search-area',
            m(
                '.search-image',

                m('img', {
                    src: '../img/search.svg',
                    class: 'floating',
                    alt: 'search.svg'
                })
            ),

            m('.search-message', m('h2', 'Finding Best Exercises for you...')),

            m('.timer', m('h1.timeClock', '00:00:00'))
        );
    }
};

const ExercisesArea = {
    view: () => {
        return m(
            '#exercise.exercise-area',

            m('.exercise-message', m('h3', 'Go kill it, you beast!')),

            m(
                '.exercise-gif',
                m('img', { src: '../img/highknees.gif', alt: 'highknees.gif' })
            ),

            m(
                '.exercise-info',

                m('.reps', m('h3', m('span', 'Reps: '), '25')),

                m('.time', m('h3', m('span', 'Duration: '), '3 minutes'))
            ),

            m('.action', m('.start-exercise', 'Start Exercise Now'))
        );
    }
};

// views
const Home = {
    view: () => {
        return m('', m(Navbar), m(SearchArea));
    }
};

const Exercises = {
    view: () => {
        return m('', m(Navbar), m(ExercisesArea));
    }
};

const Landing = {
    view: () => {
        return m(
            '',
            m('.nav', m('h1', m('span', 'Bro'), 'grammer !!')),

            m(
                '.logo',
                m('img.tada', { src: '../assets/yoga.svg', alt: 'yoga.svg' })
            ),

            m(
                '.start-button',

                m('.custom', 'Take Custom Challenge'),

                m('.create', 'Create Own Challenge')
            )
        );
    }
};

// main
const App = {
    position: 'landing',
    view: vnode => {
        switch (vnode.state.position) {
            case 'landing':
                return m('', m(Exercises));
                break;

            default:
                return m('', m(Landing));
                break;
        }
    }
};

m.mount(document.body, App);
