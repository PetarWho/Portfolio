import {faCalendarCheck, faGift, faMoneyBill1Wave, faPlane} from '@fortawesome/free-solid-svg-icons';

const projects = [
  { 
    name: "Task.Do", 
    url: "https://github.com/PetarWho/Task.Do", 
    technologies: ["React", "ASP.NET Core MVC", "Google Drive API", "MS SQL"], 
    image: faCalendarCheck, 
    description: "Application designed for employers (managers) to create and assign tasks to employees and keep track on their performance. Employees can complete tasks by providing the required number of notes and images that prove task completion before completion time is over. I collaborated on this project as part of a team assignment while serving as an intern at Diadraw Ltd.", 
    date: new Date(2023, 10) 
  },
  { 
    name: "Tap Vacation", 
    url: "#", 
    technologies: ["Angular", "ASP.NET Core MVC", "MS SQL", "Git"], 
    image: faPlane, 
    description: "Application designed exclusively to make it easier for employees to request leave and get it approved by their employers. By gathering vital information like the preferred dates and a thorough explanation for the leave. I collaborated on this project as a Front-end developer while on an internship at Zingasoft.", 
    date: new Date(2023, 10) 
  },
  { 
    name: "Duplex.gg", 
    url: "https://github.com/PetarWho/Duplex", 
    technologies: ["ASP.NET Core MVC", "Razor pages", "Riot Gaems API", "Google Drive API", "MS SQL"], 
    image: faGift, 
    description: "This ASP.NET web application facilitates event hosting with entry fees set by administrators. Users, categorized into Bronze, Silver, Gold, Platinum, Diamond, or default Member roles, can claim daily rewards based on their role's tier, earning more coins with higher ranks. Users participate in events by verifying their ownership of the associated League of Legends account, doubling entry coins upon verification. The app uses Riot Games' API to validate completion via match history checks. Users select their League of Legends region and can claim prizes created by administrators using their accumulated coins.", 
    date: new Date(2022, 8) 
  },
  { 
    name: "Print to Cash", 
    url: "https://github.com/PetarWho/PrintToCash", 
    technologies: ["WPF", "EF Core", "MS SQL"], 
    image: faMoneyBill1Wave, 
    description: "Desktop application designed for effortless profit management in the realm of 3D printing. Customized to suit your individual preferences, this application allows you to input 3D model's name and some key parameters such as printing hours, electricity cost, custom tax and the chosen material (which you can also create with custom price). With these inputs, the app automatically performs all necessary calculations, providing you with the accurate final price according to your specified settings.", 
    date: new Date(2023, 8) 
  },
];

export default projects;