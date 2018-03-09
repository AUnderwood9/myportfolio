// const images = require.context('./../../../resources/img/', false, /\.(png|jpe?g|svg)$/);
// import images from "./../../../resources/img/headLines/placeholder.png";

function importAll (r) {
    // r.keys().forEach(r);
    return r.keys().map((element) => {
        return element.replace('./', '/../../../resources/img/headLines/');
    });
    // console.log(r.keys());
  }

const images = importAll(require.context('./../../../resources/img/headLines/', false, /\.(png|jpe?g|svg)$/));

console.log(images);

const projectArr = [
    {
        projectTitle: "Maze Algorithms",
        startDate: "2017",
        projectDescription: [
            "Implemented a maze generating algorithm using C#",
            "Decreased structural bias by 50% using the sidewinder algorithm"
        ],
        languages: [
            "C#"
        ],
        headerImg: images[0]
    },{
        projectTitle: "JavaScript Memory Game",
        startDate: "2018",
        projectDescription: [
            "Implemented a card based system using HTML and CSS",
            "Selected cards using JQuery on the front-end to reveal matching squares"
        ],
        languages: [
            "JQuery",
            "HTML 5",
            "CSS 3"
        ],
        headerImg: images[1]
    },{
        projectTitle: "Database Management Final",
        startDate: "2014",
        projectDescription: [
            "Designed a database using PostgreSQL according to user specifications gathered at a novelty store",
            "Ensured that modules were loosely coupled with one purpose for testing before module integration",
            "Utilized the incremental model for software planning and implementation"
        ],
        languages: [
            "Java",
            "PostgreSQL",
            "SQL",
            "CentOs"
        ],
        headerImg: images[2]
    }
];

export default projectArr;