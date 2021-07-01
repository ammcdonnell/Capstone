(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let athenaCorrect = {
      count: 0,
      name: "Athena",
      trait: "Goddess of War"
    }
    let aphroditeCorrect = {
      count: 0,
      name: "Aphrodite",
      god: "Goddess of Love and beauty"
    }
    let dionysusCorrect = {
      count: 0,
      name: "Dionysus",
      god: "God of Fertility and wine"
    }
    let hadesCorrect = {
      count: 0,
      name: "Hades",
      trait: "God of Death"
    }
    let poseidonCorrect = {
      count: 0,
      name: "Poseidon",
      trait: "God of the Sea"
    }
    let zeusCorrect = {
      count: 0,
      name: "Zeus",
      trait: "God of the Sky"
    }

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.athenaAnswer) {
        // add to the number of correct answers
        athenaCorrect.count++;

      } else if (userAnswer === currentQuestion.aphroditeAnswer) {
        aphroditeCorrect.count++
      } else if (userAnswer === currentQuestion.dionysusAnswer) {
        dionysusCorrect.count++
      } else if (userAnswer === currentQuestion.hadesAnswer) {
        hadesCorrect.count++
      } else if (userAnswer === currentQuestion.poseidonAnswer) {
        poseidonCorrect.count++
      } else if (userAnswer === currentQuestion.zeusAnswer) {
        zeusCorrect.count++
      }
    });

    //gets user's god
    var godResults = [athenaCorrect, aphroditeCorrect, dionysusCorrect, hadesCorrect, poseidonCorrect, zeusCorrect]
    godResults.sort(function (a, b) {
      return b.count - a.count
    })
    console.log(godResults)

    userGod = godResults[0]
    console.log(userGod.name)
    console.log(userGod.trait)

    previousButton.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';

    quizContainer.innerHTML = `Congrats you are ${userGod.name} ${userGod.trait}!
    <br><br><img src="Images/gods/${userGod.name}.jpg" width="400px" height="400px"><br><br>`;

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // quiz questions and variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [{
      question: "How would your friends describe you?",
      answers: {
        a: "Wise",
        b: "Loving",
        c: "Fun",
        d: "Patient",
        e: "Creative",
        f: "Protective",
      },
      //correctAnswer: "a",
      athenaAnswer: "a",
      aphroditeAnswer: "b",
      dionysusAnswer: "c",
      hadesAnswer: "d",
      poseidonAnswer: "e",
      zeusAnswer: "f",
    },
    {
      question: "Which plant do you like the most?",
      answers: {
        a: "Rose",
        b: "Olive tree",
        c: "Oak tree",
        d: "Ivy",
        e: "Deadly Nightshade",
        f: "Seaweed",
      },
      //correctAnswer: "b",
      athenaAnswer: "b",
      aphroditeAnswer: "a",
      dionysusAnswer: "d",
      hadesAnswer: "e",
      poseidonAnswer: "f",
      zeusAnswer: "c",
    },
    {
      question: "What is your fatal flaw?",
      answers: {
        a: "Bossy",
        b: "Vain",
        c: "Cocky",
        d: "Manipulative",
        e: "Wild",
        f: "Unpredictable",
      },
      //correctAnswer: "c",
      athenaAnswer: "c",
      aphroditeAnswer: "b",
      dionysusAnswer: "e",
      hadesAnswer: "d",
      poseidonAnswer: "f",
      zeusAnswer: "a",
    },
    {
      question: "If you had to choose one, which ability do you wish you had?",
      answers: {
        a: "Invisibility",
        b: "Hydrokinesis",
        c: "Shapeshifting",
        d: "Transforming others into animals",
        e: "Flight",
        f: "Extreme intelligence",
      },
      //correctAnswer: "f",
      athenaAnswer: "f",
      aphroditeAnswer: "c",
      dionysusAnswer: "d",
      hadesAnswer: "a",
      poseidonAnswer: "b",
      zeusAnswer: "e",
    },
    {
      question: "What do you fear most?",
      answers: {
        a: "Losing your powers",
        b: "Aging",
        c: "Ignorance",
        d: "Losing loved ones",
        e: "Boredom",
        f: "Fire",
      },
      //correctAnswer: "c",
      athenaAnswer: "c",
      aphroditeAnswer: "b",
      dionysusAnswer: "d",
      hadesAnswer: "e",
      poseidonAnswer: "f",
      zeusAnswer: "a",
    },
    {
      question: "What is your favorite animal?",
      answers: {
        a: "Tiger",
        b: "Dog",
        c: "Dolphin",
        d: "Bee",
        e: "Eagle",
        f: "Owl",
      },
      //correctAnswer: "f",
      athenaAnswer: "f",
      aphroditeAnswer: "d",
      dionysusAnswer: "a",
      hadesAnswer: "b",
      poseidonAnswer: "c",
      zeusAnswer: "e",
    },
    {
      question: "What is your favorite color?",
      answers: {
        a: "Maroon",
        b: "Blue",
        c: "Yellow",
        d: "Pink",
        e: "Grey",
        f: "Black",
      },
      //correctAnswer: "e",
      athenaAnswer: "e",
      aphroditeAnswer: "d",
      dionysusAnswer: "a",
      hadesAnswer: "f",
      poseidonAnswer: "b",
      zeusAnswer: "c",
    },
    {
      question: "Pick a place to spend your afternoon?",
      answers: {
        a: "Vineyard in the countryside",
        b: "At home with your significant other",
        c: "The ocean",
        d: "At the salon",
        e: "At the top of a mountain",
        f: "The library",
      },
      //correctAnswer: "f",
      athenaAnswer: "f",
      aphroditeAnswer: "d",
      dionysusAnswer: "a",
      hadesAnswer: "b",
      poseidonAnswer: "c",
      zeusAnswer: "e",
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();