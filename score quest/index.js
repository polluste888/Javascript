// const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
// let currentScores = [...scores];



// const scorelist = document.getElementById("scoreList");
// const result = document.getElementById("result");

// const kpicount = document.getElementById("kpicount");
// const kpiavg = document.getElementById("kpiavg");
// const kpith = document.getElementById("kpith");

// const countInput = document.getElementById("count");


// function renderScores(){
//     scorelist.innerHTML = "";
//     currentScores.forEach((score)=> {
//         const item = document.createElement("P");
//         item.textContent = score;
//         scorelist.appendChild(item);
//     });
// }

// function addBonus(){
//     currentScores = currentScores.map((score) => score + 5);
//     renderScores();
// }

// function filterByThreshold() {
//   const filtered = currentScores.filter(score => score >= 60);

//   scorelist.innerHTML = "";

//   filtered.forEach(score => {
//     const item = document.createElement("p");
//     item.textContent = score;
//     scorelist.appendChild(item);
//   });

//   result.textContent = `Kuvab ${filtered.length} tulemust (≥ 60).`;

//   if (kpicount) kpicount.textContent = filtered.length;
// }



// function showAverage() {
//   if (currentScores.length === 0) {
//     result.textContent = "Punkte pole saadaval.";
//     kpiavg.textContent = "";
//     return;
//   }

//  const sum = currentScores.reduce((total, score) => total + score, 0);
//   const average = Math.round(sum / currentScores.length);

//   result.textContent = `Keskmine tulemus: ${average}`;
//   kpiavg.textContent = average;
// }
// function resetAll() {
//   currentScores = [...scores];

//   renderScores();

//   kpiavg.textContent = "-";

//   result.textContent = "";
// }
// function makeRandom() {

//   const n = parseInt(countInput.value);
//   const newScores = [];

//   for (let i = 0; i < n; i++) {

//     const randomScore = Math.floor(Math.random() * 101); 
//     newScores.push(randomScore);
//   }

//   currentScores = newScores;

//   renderScores();

//   kpiAvg.textContent = "";

//   result.textContent = "";
// }
