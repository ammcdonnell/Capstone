# Capstone
Interactive mythology-based website
Install Live Server in VS Code to be able to see the interactive map. You can do so here: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer


// quiz questions
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "How would your friends describe you?",
        answers: {
          a: "Wise",
          b: "Loving",
          c: "Fun",
          d: "Patient",
          e: "Creative",
          f: "Protective",
        },
        correctAnswer: "a"
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
        correctAnswer: "b"
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
        correctAnswer: "c"
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
        correctAnswer: "f"
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
        correctAnswer: "c"
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
        correctAnswer: "f"
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
        correctAnswer: "e"
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
        correctAnswer: "f"
      },
    ];