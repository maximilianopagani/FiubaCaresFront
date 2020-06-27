function getQuizTitle() {
  return "¿Qué tanto sabes sobre el cuidado del medio ambiente?";
}

function getQuizQuestions() {
    let questions = [
    {
      question: "El cambio climático se produce debido al agujero en la capa de ozono",
      answers: {
        a: "Verdadero",
        b: "Falso",
      },
      correctAnswer: "b",
      details: "Falso. La confusión se produce porque ambos problemas están relacionados con la atmósfera. El cambio climático se debe a las emisiones de gases de efecto invernadero"
    },
    {
      question: "Aparte de los contenedores azules (papel y cartón), amarillos (plásticos y latas), blancos (envases y residuos de medicamentos), verde (vidrio)... ¿sabes para qué se usa el contenedor rojo?",
      answers: {
        a: "Para la ropa",
        b: "Para insecticidas y desechos peligrosos",
        c: "Para basura metálica",
        d: "Ninguna de las anteriores"
      },
      correctAnswer: "b",
      details: "Para insecticidas, aceites, pilas y cualquier tipo de desecho peligroso. Suelen verse bastante menos que los demás, pero son muy útiles contra la contaminación ambiental"
    },
    {
      question: "¿Qué tipo de bolsa de supermercado es más ecológica, papel o plástico?",
      answers: {
        a: "Papel",
        b: "Plástico",
        c: "Ninguna de las anteriores",
        d: "Es lo mismo"
      },
      correctAnswer: "a",
      details: "Si bien ambas contaminan, es preferible una de papel puesto que el tiempo que tarda en degradarse es menor."
    },
    {
      question: "Por cada tonelada de papel reciclado, ahorramos...",
      answers: {
        a: "8 árboles",
        b: "17 árboles",
        c: "25 árboles",
        d: "32 árboles"
      },
      correctAnswer: "b",
      details: "Se ahorran 17 árboles. Son muchos :)"
    },
    {
      question: "¿Cuánto tarda, aproximadamente, una botella de plástico en degradarse?",
      answers: {
        a: "25 años",
        b: "150 años",
        c: "700 años",
        d: "1000 años"
      },
      correctAnswer: "c",
      details: "700 años. Como puedes ver, el plástico tarda alrededor de 700 años en degradarse, de ahí que sea tan importante que reciclemos el plástico depositándolo en el contenedor adecuado"
    },
    {
      question: "¿Cuál de los siguientes materiales representa una alternativa para hacer papel? ",
      answers: {
        a: "Excremento de panda",
        b: "Cáñamo",
        c: "Piel de oveja",
        d: "Todas las anteriores"
      },
      correctAnswer: "d",
      details: "Todas las anteriores. De entre todas, el cáñamo, es la mejor opción, la más limpia. Se puede reciclar con mayor frecuencia que la madera de los árboles"
    }
  ];

  return questions;
}

function getSelectedAnswer(input_answers) {

  for(var i = 0, length = input_answers.length; i < length; i++) {
    if(input_answers[i].checked) {
      return input_answers[i].value;
    }
  }

  return "none";
}

function resetSlide(input_answers) {

  document.getElementById('answer_a').style.display = "none";
  document.getElementById('answer_b').style.display = "none";
  document.getElementById("answer_c").style.display = "none";
  document.getElementById("answer_d").style.display = "none";

  for(var i = 0, length = input_answers.length; i < length; i++) {
    input_answers[i].checked = false;
  }

}

$(document).ready(function () {

  const quizContainer = document.getElementById('quiz-container');
  const resultsContainer = document.getElementById('results');
  const input_answers = document.getElementsByName('input_answer');

  document.getElementById("next").addEventListener("click", showSlideResult);

  const myQuestions = getQuizQuestions();
  let currentSlide = 0;
  let score = 0;

  function showSlide(slide) {

    resetSlide(input_answers);

    currentSlide = slide;

    if(currentSlide === myQuestions.length) {
      document.getElementById('question').style.display = "none";
      document.getElementById("next").style.display = "none";
      showQuizResult();
    } else {
      for(letter in myQuestions[currentSlide].answers) {
        document.getElementById('question').textContent = myQuestions[currentSlide].question;
        document.getElementById('answer_text_' + letter).textContent = myQuestions[currentSlide].answers[letter];
        document.getElementById('answer_' + letter).style.display = "block";
      }
    }
  }

  function showSlideResult() {

    let answer = getSelectedAnswer(input_answers);

    if(answer == "none") {
      alert("Por favor selecciona una opción");
    } else {
      if(myQuestions[currentSlide].correctAnswer == answer) {
        document.getElementById("correctAnswerText").textContent = myQuestions[currentSlide].details;
        $('#correctAnswerModal').modal('show');
        score++;
      } else {
        document.getElementById("wrongAnswerText").textContent = myQuestions[currentSlide].details;
        $('#wrongAnswerModal').modal('show');
      }
    }
  }

  function showQuizResult() {
    resultsContainer.textContent = "¡Has terminado la trivia! \n Tu puntuación fue de " + score + " respuesta/s correctas sobre " + myQuestions.length + " preguntas.";
  }

  $("#correctAnswerModal").on("hidden.bs.modal", function () {
    showNextSlide();
  });

  $("#wrongAnswerModal").on("hidden.bs.modal", function () {
    showNextSlide();
  });

  function showNextSlide() {
      showSlide(currentSlide + 1);
  }

  document.getElementById("title").textContent = getQuizTitle();
  showSlide(currentSlide);

});
