/**
 * Components
 */
const Navbar = {
  view: () => {
    return m(
      ".navbar",

      m("img", {
        src: "assets/yoga.svg",
        alt: "yoga.svg",
        class: "icon"
      }),

      m("h1", "Brogrammer"),

      m("img", {
        src: "img/audio.svg",
        class: "f-audio",
        alt: "audio.svg"
      })
    );
  }
};

const SearchArea = {
  view: () => {
    return m(
      "#search.search-area",
      m(
        ".search-image",

        m("img", {
          src: "img/search.svg",
          class: "floating",
          alt: "search.svg"
        })
      ),

      m(".search-message", m("h2", "Finding Best Exercises for you...")),

      m(".timer", m("h1.timeClock", "00:00:00"))
    );
  }
};

const ExercisesArea = {
  view: () => {
    return m(
      "#exercise.exercise-area",

      m(".exercise-message", m("h3", "Go kill it, you beast!")),

      m(
        ".exercise-gif",
        m("img", { src: "img/highknees.gif", alt: "highknees.gif" })
      ),

      m(
        ".exercise-info",

        m(".reps", m("h3", m("span", "Reps: "), "25")),

        m(".time", m("h3", m("span", "Duration: "), "3 minutes"))
      ),

      m(".action", m(".start-exercise", "Start Exercise Now"))
    );
  }
};

/**
 * Pages
 */
const Home = {
  view: () => {
    return m("", m(Navbar), m(SearchArea));
  }
};

const Exercises = {
  view: () => {
    return m("", m(Navbar), m(ExercisesArea));
  }
};

const Landing = {
  view: () => {
    return m(
      "",
      m(".nav", m("h1", m("span", "Bro"), "grammer !!")),

      m(".logo", m("img.tada", { src: "assets/yoga.svg", alt: "yoga.svg" })),

      m(
        ".start-button",

        m(".custom", "Take Custom Challenge"),

        m(".create", "Create Own Challenge")
      )
    );
  }
};

const CustomSettings = {
  view: () => {
    return m(
      "",
      m(Navbar),
      m(
        ".big-form",
        m(
          ".f-section",
          m("label", "Select Exercises:"),
          m(
            ".choices",
            m(".choice", "Jumping Jacks"),
            m(".choice", "Lunges"),
            m(".choice", "Planks"),
            m(".choice", "Squats"),
            m(".choice", "Burpees")
          )
        ),
        m(
          ".f-section",
          m("label", "Frequency:"),
          m("input.slider", {
            type: "range",
            min: "30",
            max: "240",
            value: "60",
            step: "30"
          })
        ),
        m(
          ".f-section",
          m("label", "How long you gonna work:"),
          m("input.slider", {
            type: "range",
            min: "1",
            max: "8",
            value: "2",
            step: "1"
          })
        ),
        m(
          ".f-section",
          m("label", "Level of Exercise:"),
          m(
            ".level",
            m(
              ".checkbox",
              m("input", {
                type: "checkbox",
                id: "easy"
              }),
              m(
                "label",
                {
                  for: "easy"
                },
                "Easy"
              )
            ),
            m(
              ".checkbox",
              m("input", {
                type: "checkbox",
                id: "medium"
              }),
              m(
                "label",
                {
                  for: "medium"
                },
                "Medium"
              )
            ),
            m(
              ".checkbox",
              m("input", {
                type: "checkbox",
                id: "hard"
              }),
              m(
                "label",
                {
                  for: "hard"
                },
                "Hard"
              )
            )
          )
        ),
        m(
          ".save-custom",
          m(".start-exercise.custom-session", "Start Custom Session", {})
        )
      )
    );
  }
};

// main
const App = {
  position: "landing",
  view: vnode => {
    switch (vnode.state.position) {
      case "landing":
        return m("", m(CustomSettings));
        break;

      default:
        return m("", m(CustomSettings));
        break;
    }
  }
};

/**
 * Routes
 */
const routes = {
  "/": Landing,
  "/custom": CustomSettings,
  "/home": Home,
  "/exercises": Exercises
};

const root = document.body;
const homePath = "/";
m.route(root, homePath, routes);
