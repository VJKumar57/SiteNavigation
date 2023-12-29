// Toggle the visibility of the menu on small screens
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('main-content').innerHTML = this.responseText;
        }
    };
    
    // Adjust the path accordingly
    xhttp.open("GET", page + '.html', true);
    xhttp.send();
}

function handleSearch() {
    var searchTerm = document.getElementById('search-bar').value;

    // Check if searchTerm is not null or undefined before converting to lowercase
    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase();

        switch (searchTerm) {
            case 'quiz':
                loadPage('quiz');
                break;
            case 'trainings':
                loadPage('trainings');
                break;
            case 'dashboard':
                loadPage('dashboard');
                break;
            default:
                loadPage('home');
                break;
        }
    } else {
        // Handle the case when searchTerm is null or undefined
        loadPage('home');
    }
}


// Toggle the visibility of the menu on small screens
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// Sample quiz questions and answers
const quizData = [
    {
        question: "What is the capital of Brazil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correctAnswer: "Brasília"
    },
    {
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
        correctAnswer: "Beijing"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
        correctAnswer: "Berlin"
    },
    {
        question: "What is the capital of Russia?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        correctAnswer: "Moscow"
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
        correctAnswer: "Pretoria"
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
        correctAnswer: "Mexico City"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
    {
        question: "What is the capital of India?",
        options: ["Chennai", "Delhi", "Lucknow", "Mumbai"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Seoul"],
        correctAnswer: "Tokyo"
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Luxor", "Aswan"],
        correctAnswer: "Cairo"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Kano", "Ibadan"],
        correctAnswer: "Abuja"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Incheon", "Daegu"],
        correctAnswer: "Seoul"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice", "Naples"],
        correctAnswer: "Rome"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Valencia", "Seville"],
        correctAnswer: "Madrid"
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correctAnswer: "Ankara"
    },
    {
        question: "What is the capital of Thailand?",
        options: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
        correctAnswer: "Bangkok"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: ["Riyadh", "Jeddah", "Mecca", "Medina"],
        correctAnswer: "Riyadh"
    },
    {
        question: "What is the capital of Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correctAnswer: "Jakarta"
    },
    {
        question: "What is the capital of Moscow?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        correctAnswer: "Moscow"
    },
    {
        question: "What is the capital of Saint Petersburg?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        correctAnswer: "Saint Petersburg"
    },
    {
        question: "What is the capital of Novosibirsk?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        correctAnswer: "Novosibirsk"
    },
    {
        question: "What is the capital of Yekaterinburg?",
        options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
        correctAnswer: "Yekaterinburg"
    },
    // Add more questions as needed...
];

let currentQuestion = 0;
let userAnswers = [];
let attemptCount = 0;
const maxAttempts = 3;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = `Question ${currentQuestion + 1}: ${quizData[currentQuestion].question}`;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(li);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        userAnswers.push(selectedOption.value);
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            //displayResult();
            alert("You have reached end of the Quiz.  Please select Submit button!");
        }
    } else {
        alert("Please select an option before moving to the next question.");
    }
}

function displayResult() {
    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.getElementById("result-message");

    const score = calculateScore();

    resultMessage.textContent = `You scored ${score} out of ${quizData.length}.`;
    document.getElementById("retake-btn").style.display = "block"; // Display the "Retake Quiz" button

    if (score >= quizData.length / 2) {
        resultContainer.style.color = "green";
        resultMessage.textContent += " Well done!!";
    } else {
        resultContainer.style.color = "red";
        resultMessage.textContent += " Keep practicing!!";
    }

    document.getElementById("button-container").style.display = "none";
    resultContainer.style.display = "block";
}

function calculateScore() {
    let score = 0;

    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correctAnswer) {
            score++;
        }
    }

    return score;
}

function retakeQuiz() {
    if (attemptCount < maxAttempts - 1) {
        attemptCount++;
        currentQuestion = 0;
        userAnswers = [];
        displayQuestion();
        document.getElementById("button-container").style.display = "block";
        document.getElementById("result-container").style.display = "none";
    } else {
        alert("You have reached the maximum number of attempts.");
    }
}

function submitQuiz() {
    alert("Quiz submitted Successfully.  Please find your score below!!");
    displayResult();
    // Additional logic for submitting the quiz to a server or storing results.
    document.getElementById("retake-btn").style.display = "block"; // Display the "Retake Quiz" button
}
