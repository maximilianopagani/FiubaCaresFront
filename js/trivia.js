function getURLParam(param){
  return new URLSearchParams(window.location.search).get(param);
}

const quizData = {

  reciclaje: {
    title: "¿Cuanto sabes sobre reciclaje?",
    img_src: "https://i.ibb.co/0q4NVLv/trivia-reciclaje-banner.png",
    questions: [
      {
        question: "¿Cuál de estas acciones no pertenece a la regla RRR de la sostenibilidad? ",
        answers: {
          a: "Reducir",
          b: "Reutilizar",
          c: "Reciclar",
          d: "Respetar"
        },
        correctAnswer: "d",
        details: "Respetar. Aunque respetar el medio ambiente debe ser una prioridad para todos, la regla RRR de la sostenibilidad se basa en 3 principios. Reducir, Reutilizar y Reciclar en la medida de lo posible las materias primas que usamos día a día es fundamental para garantizar la prosperidad de las generaciones futuras en el planeta tierra"
      },
      {
        question: "¿Cuál de estos colores no pertenece a un contenedor de reciclaje? ",
        answers: {
          a: "Amarillo",
          b: "Verde",
          c: "Negro",
          d: "Rojo"
        },
        correctAnswer: "c",
        details: "Negro. El negro no corresponde a un contenedor de reciclaje. Si están destinados a reciclar los contenedores amarillo, verde, azul, gris, rojo y naranja"
      },
      {
        question: "¿Sabes para qué se utiliza el contenedor rojo?",
        answers: {
          a: "Desechos peligrosos",
          b: "Aceites e insecticidas",
          c: "Las dos respuestas anteriores son correctas"
        },
        correctAnswer: "c",
        details: "Las dos respuestas anteriores son correctas. Aunque poco habituales, los contenedores rojos son muy útiles en la lucha contra la contaminación ambiental. Tan solo un litro de aceite usado, por ejemplo, puede contaminar otros 1.000 litros de agua"
      },
      {
        question: "¿Sabes cuánto tarda, en promedio, en degradarse una botella de plástico?",
        answers: {
          a: "20 años",
          b: "120 años",
          c: "700 años",
          d: "1100 años"
        },
        correctAnswer: "c",
        details: "700 años. El plástico demora alrededor de 700 años en degradarse y es un material que usamos para casi todo. Por ello, es muy importante depositar el plástico en el contenedor amarillo destinado a este tipo de material"
      },
      {
        question: "¿Sabes a qué contenedor deberías tirar los envases tetra-bricks?",
        answers: {
          a: "Amarillo",
          b: "Verde",
          c: "Azul",
          d: "Naranja"
        },
        correctAnswer: "a",
        details: "Amarillo. Los envases brick están compuestos por 5 capas de 3 materiales diferentes: cartón, plástico polietileno y aluminio. Así, los típicos cartones de zumo o leche, han de depositarse en el contenedor amarillo para poder reciclarlos y de esta manera darles una segunda vida"
      },
      {
        question: "¿Y qué pasa con las latas, sabes qué contenedor les corresponde?",
        answers: {
          a: "Verde",
          b: "Amarillo",
          c: "Azul"
        },
        correctAnswer: "b",
        details: "Amarillo. Las latas están compuestas de aluminio y se pueden reciclar un número ilimitado de veces. Si estabas dudando donde habrían de acabar para darles una segunda, tercera, o cuarta oportunidad, la respuesta vuelve a ser de nuevo el contenedor amarillo"
      },
      {
        question: "Las baterías, los teléfonos móviles, ordenadores y otros electrodomésticos o aparatos electrónicos, poseen entre sus componentes elementos altamente contaminantes como el litio y otros metales pesados. ¿Sabes dónde debes depositarlos cuando ya no son útiles?",
        answers: {
          a: "En el contenedor gris",
          b: "En un punto limpio",
          c: "En el contenedor de desechos generales",
          d: "En el contenedor amarillo"
        },
        correctAnswer: "b",
        details: "En un punto limpio. Este tipo de residuos han de acabar en un punto limpio. Los puntos limpios son lugares destinados al tratamiento de los residuos que no han sido selectivamente separados y recogidos para su reciclaje. Su efectividad y eficiencia dependen de la implicación del ciudadano, ya que es este el que activamente ha de transportar los residuos hasta allí"
      },
      {
        question: "Con el reciclado de 3 botellas de vidrio...",
        answers: {
          a: "Evitamos la emisión de 1 kilogramo de CO2 a la atmósfera",
          b: "Reducimos 1 kilogramo de basura que va al vertedero",
          c: "Ahorramos más de 1 kilogramo de materia prima",
          d: "Todas las respuestas anteriores son correctas"
        },
        correctAnswer: "d",
        details: "Todas las respuestas son correctas. Pero además, con el reciclaje de 3 botellas de vidrio ahorramos energía suficiente para cargar la batería de nuestro smartphone durante todo un año, poner la lavadora 3 veces, o mantener un bombilla encendida durante 9 días"
      }
    ]
  },

  ambiente: {
    title: "¿Qué tanto sabes sobre el cuidado del medio ambiente?",
    img_src: "https://i.ibb.co/nrLFVNk/trivia-ambiente-banner.jpg",
    questions: [
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
        question: "La quema de combustibles fósiles puede causar...",
        answers: {
          a: "Niebla tóxica",
          b: "Huella de carbono",
          c: "Lluvia ácida",
          d: "Terremotos"
        },
        correctAnswer: "c",
        details: "Lluvia ácida. Cuando quemamos combustibles fósiles, se libera dióxido de azufre (SO2) y óxidos de nitrógeno (NOx) a la atmósfera"
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
        question: "¿Cuántas toneladas de residuos de plástico se calcula que llegan a los mares del mundo y entran a la cadena alimentaria?",
        answers: {
          a: "13 millones de toneladas",
          b: "3 millones de toneladas",
          c: "23 millones de toneladas"
        },
        correctAnswer: "a",
        details: "13 millones. Cada año se vierten en los oceanos 8 millones de toneladas de plástico, lo que amenaza la vida marina y terrestre, y destruye los ecosistemas naturales. Por ello, la ONU estableció el día mundial de medio ambiente para alertar sobre la necesidad de reducir el consumo y desecho de plásticos"
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
        question: "¿Qué cantidad de agua está disponible para uso del ser humano?",
        answers: {
          a: "1%",
          b: "5%",
          c: "10%",
          d: "15%"
        },
        correctAnswer: "a",
        details: "1%. El 70% de la superficie del planeta está cubierta de agua, pero solo el 2.5% es dulce (el resto, por supuesto, es salada). Pero de esa agua dulce, el 68.7% aproximadamente está congelada en los glaciares. Queda, entonces, una mínima parte para consumo del ser humano"
      },
      {
        question: "¿Cuál de los siguientes materiales representa una alternativa para hacer papel?",
        answers: {
          a: "Excremento de panda",
          b: "Cáñamo",
          c: "Piel de oveja",
          d: "Todas las anteriores"
        },
        correctAnswer: "d",
        details: "Todas las anteriores. De entre todas, el cáñamo, es la mejor opción, la más limpia. Se puede reciclar con mayor frecuencia que la madera de los árboles"
      }
    ]
  }

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

  const quizId = getURLParam("quiz_id");

  if(!quizId || !(quizId in quizData)) {
    location.href = "../games/index.html";
    return 1;
  }

  const quizContainer = document.getElementById('quiz-container');
  const resultsContainer = document.getElementById('results');
  const input_answers = document.getElementsByName('input_answer');
  document.getElementById("next").addEventListener("click", showSlideResult);
  document.getElementById("title").textContent = quizData[quizId].title;
  document.getElementById("quiz-img").src = quizData[quizId].img_src;
  const myQuestions = quizData[quizId].questions;
  let currentSlide = 0;7
  let score = 0;

  function showSlide(slide) {

    resetSlide(input_answers);

    currentSlide = slide;

    if(currentSlide === myQuestions.length) {
      document.getElementById('question').style.display = "none";
      document.getElementById('answers').style.display = "none";
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
    document.getElementById("quiz-end").style.display = "inline-block"
  }

  $("#correctAnswerModal").on("hidden.bs.modal", function () {
    showSlide(currentSlide+1);
  });

  $("#wrongAnswerModal").on("hidden.bs.modal", function () {
    showSlide(currentSlide+1);
  });

  $('.btn-redirect-articles').click(function () {
      location.href = "../articles/";
  });

  $('.btn-redirect-games').click(function () {
      location.href = "../games/index.html";
  });

  showSlide(currentSlide);

});
