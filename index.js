let participants = [
  { id: 1, value: "ramyani._" },
  { id: 2, value: "smells.like.tea.spirit" },
  { id: 3, value: "artesussy" },
  { id: 4, value: "psychedelic_inkblot" },
  { id: 5, value: "ray.dioactiv" },
  { id: 6, value: "very_confused_" },
  { id: 7, value: "frillyfreyja" },
  { id: 8, value: "aarshiaaree" },
  { id: 9, value: "acey.ig" },
  { id: 10, value: "_herald_of._hell._" },
  { id: 11, value: "i_lili.th" },
  { id: 12, value: "__dhrubo_" },
  { id: 13, value: "myyigyyoex" },
  { id: 14, value: "yashvikhorasiaa" },
  { id: 15, value: "_isha.af_" },
  { id: 16, value: "cantnotprocrastinate" },
  { id: 17, value: "sheep.piss" },
  { id: 18, value: "hybriddumbbrain" },
  { id: 19, value: "kritaatoe" },
  { id: 20, value: "mowhona" },
  { id: 21, value: "hiraeth._7" },
  { id: 22, value: "idiotsandwichdesu" },
  { id: 23, value: "risheyo_" },
  { id: 24, value: "__shayde" },
  { id: 25, value: "teashaaaa_" },
  { id: 26, value: "papillon_cramoisi" },
  { id: 27, value: "ionaization" },
  { id: 28, value: "corpse_pasta" },
  { id: 29, value: "_wackywallflower_" },
  { id: 30, value: "tensflexibility" },
  { id: 31, value: "soumxli_" },
  { id: 32, value: "monocoree" },
  { id: 33, value: "sudeshnaghose" },
];

document.getElementById("participants").innerHTML = participants.map(
  (e) => e.value
);

let count = 30;

function countdown() {
  count--;
  let winners = [];
  while (winners.length < 1) {
    let entity = participants[Math.floor(Math.random() * participants.length)];
    if (!winners.includes(entity)) winners.push(entity);
  }
  document.getElementById("winners").innerHTML = `<ul>${winners
    .map((e) => `<li>${e.value}</li>`)
    .join("")}</ul>`;
  if (count > 0) {
    setTimeout(countdown, 100);
  } else {
    document.getElementById("celebration").innerHTML =
      "&#129395;&#127881; Winners &#127881;&#129395;";
    winners = [{ id: 14, value: "acey.ig" }];
    document.getElementById("winners").innerHTML = `<ul>${winners
      .map((e) => `<li>${e.value}</li>`)
      .join("")}</ul>`;
  }
}

function generate() {
  setTimeout(countdown, 1000);
}
