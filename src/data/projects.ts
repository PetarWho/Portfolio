import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'task-do',
    name: 'Task.Do',
    description:
      'Application designed for employers (managers) to create and assign tasks to employees and keep track on their performance. Employees can complete tasks by providing the required number of notes and images that prove task completion before completion time is over. I collaborated on this project as part of a team assignment while serving as an intern at Diadraw Ltd.',
    technologies: ['React', 'ASP.NET Core MVC', 'Google Drive API', 'MS SQL'],
    githubUrl: 'https://github.com/PetarWho/Task.Do',
    icon: 'CheckSquare',
    date: new Date(2023, 10),
    featured: true,
  },
  {
    id: 'tap-vacation',
    name: 'Tap Vacation',
    description:
      'Application designed exclusively to make it easier for employees to request leave and get it approved by their employers. By gathering vital information like the preferred dates and a thorough explanation for the leave. I collaborated on this project as a Front-end developer while on an internship at Zingasoft.',
    technologies: ['Angular', 'ASP.NET Core MVC', 'MS SQL', 'Git'],
    icon: 'Plane',
    date: new Date(2023, 10),
    featured: true,
  },
  {
    id: 'duplex-gg',
    name: 'Duplex.gg',
    description:
      "This ASP.NET web application facilitates event hosting with entry fees set by administrators. Users, categorized into Bronze, Silver, Gold, Platinum, Diamond, or default Member roles, can claim daily rewards based on their role's tier, earning more coins with higher ranks. Users participate in events by verifying their ownership of the associated League of Legends account, doubling entry coins upon verification. The app uses Riot Games' API to validate completion via match history checks. Users select their League of Legends region and can claim prizes created by administrators using their accumulated coins.",
    technologies: ['ASP.NET Core MVC', 'Razor Pages', 'Riot Games API', 'Google Drive API', 'MS SQL'],
    githubUrl: 'https://github.com/PetarWho/Duplex',
    icon: 'Gift',
    date: new Date(2022, 8),
    featured: true,
  },
  {
    id: 'print-to-cash',
    name: 'Print to Cash',
    description:
      "Desktop application designed for effortless profit management in the realm of 3D printing. Customized to suit your individual preferences, this application allows you to input 3D model's name and some key parameters such as printing hours, electricity cost, custom tax and the chosen material (which you can also create with custom price). With these inputs, the app automatically performs all necessary calculations, providing you with the accurate final price according to your specified settings.",
    technologies: ['WPF', 'EF Core', 'MS SQL'],
    githubUrl: 'https://github.com/PetarWho/PrintToCash',
    icon: 'DollarSign',
    date: new Date(2023, 8),
  },
];
