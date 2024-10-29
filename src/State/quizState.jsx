import { atom  } from "recoil";

export const currentQuestionState = atom({
    key: "currentQuestionState",
    default: 0
})

export const scoreState = atom({
    key: "scoreState",
    default: 0
})

export const quizDataState = atom({
    key: "quizDataState",
    default: [
        {
            question: "What is the capital of India?",
            options: ["Bombay", "Chennai", "Bengaluru", "New Delhi"],
            answer: "New Delhi",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Jupiter", "Saturn", "Venus"],
            answer: "Mars",
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
            answer: "Blue Whale",
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "NaCl"],
            answer: "H2O",
        },
        {
            question: "In what year did World War II end?",
            options: ["1945", "1939", "1918", "1963"],
            answer: "1945",
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
            answer: "Sahara",
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo", "Nikola Tesla"],
            answer: "Albert Einstein",
        },
        {
            question: "What is the smallest prime number?",
            options: ["2", "1", "3", "5"],
            answer: "2",
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["Japan", "China", "Korea", "India"],
            answer: "Japan",
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
            answer: "Leonardo da Vinci",
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
        },
        {
            question: "What is the capital of Egypt?",
            options: ["Cairo", "Lagos", "Nairobi", "Algiers"],
            answer: "Cairo",
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
            answer: "Hydrogen",
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            answer: "7",
        },
        {
            question: "Who is the author of 'Harry Potter'?",
            options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
            answer: "J.K. Rowling",
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            options: ["Lion", "Tiger", "Elephant", "Leopard"],
            answer: "Lion",
        },
        {
            question: "What is the main gas found in the air we breathe?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Nitrogen",
        },
        {
            question: "What year did the Titanic sink?",
            options: ["1912", "1905", "1920", "1930"],
            answer: "1912",
        },
        {
            question: "Which country invented the Olympic Games?",
            options: ["Greece", "Rome", "China", "Egypt"],
            answer: "Greece",
        },
        {
            question: "What is the capital of Australia?",
            options: ["Canberra", "Sydney", "Melbourne", "Perth"],
            answer: "Canberra",
        },
        {
            question: "Who discovered penicillin?",
            options: ["Marie Curie", "Isaac Newton", "Albert Einstein", "Alexander Fleming"],
            answer: "Alexander Fleming",
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            answer: "Diamond",
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile",
        },
        {
            question: "What is the boiling point of water?",
            options: ["100°C", "90°C", "120°C", "60°C"],
            answer: "100°C",
        },
        {
            question: "Which country gifted the Statue of Liberty to the USA?",
            options: ["France", "England", "Germany", "Italy"],
            answer: "France",
        },
        {
            question: "What is the largest bone in the human body?",
            options: ["Femur", "Skull", "Rib", "Spine"],
            answer: "Femur",
        },
        {
            question: "Which planet has the most moons?",
            options: ["Saturn", "Earth", "Mars", "Venus"],
            answer: "Saturn",
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Avocado", "Onion", "Pepper"],
            answer: "Avocado",
        },
        {
            question: "Which US president is known for the Gettysburg Address?",
            options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt"],
            answer: "Abraham Lincoln",
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            answer: "Au",
        }
    ]
})
