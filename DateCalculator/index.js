//Convert today date to input format
const today = new Date().toISOString().split("T")[0]; // Avoir une date correcte au bon format

start_date.value = today; // Mettre la date de aujourd'hui dans le input
start_date.min = today; // On ne peut plus choisir des dates avant la date du jour

// Tomorrow date calc

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // Permet de mettre la date 1 jour plus loin

// Convert to input format

let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat; // Mettre la date de aujourd'hui dans le input
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value); // Recuperez la date selectionner et mettre dans day

  if (end_date.value < start_date.value) {
    // Si la date de fin est inferieur a la date du début tu fais qqle chose sinon rien
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0]; // Mettre la date au bon format
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1); // Permet de mettre le jour précédent
    start_date.max = day.toISOString().split("T")[0]; // le jour max peut uniquement etre le jour d'avant
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value) // ca donne les secondes de difference entre les 2 dates
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Transformez l'ecart de seconde en minutes, en heure, en jour
  nbJour.textContent = `${diffDays} jours`; // Mettre le nombre de jour

  total.textContent = diffDays * nightPrice.textContent; // Inclure le prix * le nb de jours
};
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc;
