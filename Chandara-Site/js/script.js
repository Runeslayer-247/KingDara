var dataOne = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

let dataTwo = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

let dataThree = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];



function startGame() {
    let dataO = dataOne[Math.floor(Math.random() * dataOne.length)];
    document.getElementById("reel-one").textContent = dataO;

    setTimeout(() => {
        let dataT = dataTwo[Math.floor(Math.random() * dataTwo.length)];

        document.getElementById("reel-two").textContent = dataT;
    }, 1000);

    setTimeout(() => {
        let dataTT = dataThree[Math.floor(Math.random() * dataThree.length)];

        document.getElementById("reel-three").textContent = dataTT;
    }, 2000);

}
