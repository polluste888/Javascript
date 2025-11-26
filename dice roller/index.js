// function rolldice(){

//     const numdice = document.getElementById("numdice").value;
//     const diceresult = document.getElementById("resultdice");
//     const diceimages = document.getElementById("diceimages");
//     const values = [];
//     const images = [];

//     for(let i = 0; i < numdice; i++){
//         const maxNum = 6;
//         const minNum = 1;
//         const value = Math.floor(Math.random()* (maxNum - minNum + 1) + minNum);
//         values.push(value);
//         images.push(`<img src="diceimages/${value}.png">`);
//     }
//     diceresult.textcontent = `ROLLED ${values.join(',')}`;
//     diceimages.innerHTML = images.join('');
// }