import walmart from "../assets/images/Walmart.jpg";
import statefarm from "../assets/images/statef.png";
import discord from "../assets/images/discord.png";
import react from "../assets/images/reactjs.png";
import sel from "../assets/images/sel.jpg";



export const projects = [
    {
        id: 1,
        name: "Walmart Store Sales Forecasting",
        image: walmart,
        link: "https://github.com/jesus-r-mendoza/Walmart-Store-Sales-Forecasting",
        description: "Using various Machine Learning algorithms to predict Walmart's sales per week using over 420k publicly available sales records from Walmart, written in Python Jupyter Notebook"
    },
    {
        id: 2,
        name: "Statefarm Distracted Driver Detection",
        image: statefarm,
        link: "https://github.com/jesus-r-mendoza/State-Farm-Distracted-Driver-Detection",
        description: "Using Machine Learning algorithms to classify over 75k unlabeled images into categories based on which action the driver is being distracted with, written in Python Jupyter Notebook"
    },
    {
        id: 3,
        name: "Personal React Website",
        image: react,
        link: "https://github.com/jrojas10/Website",
        description: "This website is a personal project that I built using React.js and deployed on Github Pages"
    },
    {
        id: 4,
        name: "Discord Bot",
        image: discord,
        link: "https://github.com/jrojas10/Mecha-Senku",
        description: "A simple Discord bot that uses the Discord API to send messages to a channel based on the user's input"
    },
    {
        id: 5,
        name: "SEL - Student Exchange Library",
        image: sel,
        link: "https://github.com/jrojas10/SEL-Student-Exchange-Library",
        description: "A mockup website that allows students to exchange books with other students built in Java"
    }
]


// let api = "https://api.github.com/users/jrojas10";