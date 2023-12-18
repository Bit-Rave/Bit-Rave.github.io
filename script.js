function genererReponseAleatoire() {

  const randomReponse = reponses[Math.floor(Math.random() * reponses.length)];
  const reponseContainer = document.getElementById('reponse');
  reponseContainer.textContent = `Le Canard en Plastique dit : "${randomReponse}"`;
}
window.onload = genererReponseAleatoire;
function poserQuestion() {
  const questionInput = document.getElementById('question');
  const reponseContainer = document.getElementById('reponse');
  const reponses = [
    "Oui, certainement !",
    "Non, pas du tout.",
    "Ah non pas correct ca",
    "Il est difficile de dire pour le moment.",
    "Absolument.",
    "Non, désolé.",
    "Bien sûr !",
    "Peut-être... demandez-moi plus tard.",
    "Pas de doute à ce sujet.",
    "Je ne suis pas sûr de comprendre la question.",
    "Absolument pas.",
    "Oui, sans aucun doute.",
    "Il y a une forte possibilité.",
    "Entre nous, ça sera pas a cause de ton poids ?",
    "Nous ici on vise la perfection",
    "Je ne peux pas répondre à ça.",
    "Il semble probable.",
    "Pour sûr !",
    "Pas d'accord.",
    "Il est certainement possible.",
    "Je suis plutôt sceptique à ce sujet.",
    "Oui, définitivement.",
    "Non, jamais.",
    "Vous pouvez compter dessus.",
    "J'en doute.",
    "Oui, à 100%.",
    "Non, pas du tout.",
    "Il est probable que oui.",
    "Ne misez pas là-dessus.",
    "C'est difficile à dire.",
    "Il semble improbable.",
    "Sans aucun doute.",
    "Peut-être, qui sait ?",
    "Non, cela ne semble pas possible.",
    "Oui, tout à fait.",
    "Ne pariez pas là-dessus.",
    "Oui, mais ne soyez pas trop confiant.",
    "Non, certainement pas.",
    "Il y a une chance.",
    "Très probablement.",
    "Non, n'y pensez même pas.",
    "Oui, c'est fort possible.",
    "Je ne suis pas sûr.",
    "Impossible à dire.",
    "Peut-être dans une autre vie.",
    "Ça semble être le cas.",
    "Non, cela ne se produira jamais.",
    "C'est sûr.",
    "Je ne vois pas pourquoi pas.",
    "Ne vous attendez pas à cela.",
    "Oui, absolument !",
    "Non, sans équivoque.",
    "Tout à fait.",
    "Je ne suis pas convaincu.",
    "Oui, à coup sûr.",
    "Non, de toute façon.",
    "Il est difficile de prédire.",
    "Ça ne se produit pas souvent.",
    "Oui, ça pourrait arriver.",
    "Non, ça ne vaut même pas la peine d'y penser.",
    "Il est fort probable.",
    "Absolument pas.",
    "C'est une possibilité, mais peu probable.",
    "Non, ne comptez pas là-dessus.",
    "Oui, mais pas dans un avenir proche.",
    "Je suis sceptique.",
    "Il semble être le cas.",
    "Non, c'est peu probable.",
    "Ça se pourrait.",
    "Non, pas de chance.",
    "Il est peu probable.",
    "Tout à fait sûr.",
    "Non, ne misez pas là-dessus.",
    "Oui, mais ne soyez pas surpris si cela ne se produit pas.",
    "Je ne sais vraiment pas.",
    "Il y a des chances.",
    "Non, jamais de la vie.",
    "Oui, c'est une évidence.",
    "Ne pariez pas là-dessus.",
    "Il est fort possible.",
    "Non, impossible.",
    "Oui, probablement.",
    "Je doute fortement.",
    "Tout à fait possible.",
    "Non, ne t'y attache pas.",
    "Oui, c'est envisageable.",
    "Ne misez pas dessus.",
    "Oui, ça pourrait arriver.",
    "Non, ça n'arrivera pas.",
    "Il est difficile de dire non.",
    "Oui, à coup sûr.",
    "Non, aucune chance.",
    "Il est possible.",
    "Non, ça ne se produira jamais.",
    "Oui, il est très probable.",
    "Ne misez pas là-dessus.",
    "C'est possible, mais je ne suis pas convaincu."
  ];

  const question = questionInput.value.trim();
  if (question !== '') {
    const randomReponse = reponses[Math.floor(Math.random() * reponses.length)];
    reponseContainer.textContent = `Le Canard en Plastique dit : "${randomReponse}"`;
  } else {
    reponseContainer.textContent = "Veuillez poser une question valide.";
  }
  questionInput.value = '';
}
document.getElementById('question').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    poserQuestion();
  }
});