const animalContainer = document.getElementById("animal-container");

const animals =[
    {
        name: "Azathoth",
        image: "images/Azathoth.webp",
        desc: "He makes me feel weird things. He says bad things will happen if I do not join his cult..."
    },
    {
        name: "bingus",
        image: "images/Bingus.jpg",
        desc: "He's a real goofy guy!"
    },
    {
        name: "Bob the Blob",
        image: "images/blob.webp",
        desc: "He's not that popular, but he does have some funny jokes."
    },
    {
        name: "Ebritas",
        image: "images/ebritas.jpg",
        desc: "She's cool I guess. Very introverted though. She has killed a lot of the people here at the farm, but my boss says they're all accidents."
    },
    {
        name: "Robert",
        image: "images/grubRobert.png",
        desc: "This is Robert. He is a Grub. His best friend is Eggerson Keaveney. His favorite food is steamed eggs and gravy."
    },
    {
        name: "Leonard",
        image: "images/LeonardtheDragon.jpg",
        desc: "Leonard is a pretty chill guy. He is always very popular at barbeques. Don't touch his gold though. He doesn't like that."
    },
    {
        name: "Owen",
        image: "images/shampooCow.jpeg",
        desc: "There is nothing Owen likes more than to get blow-dried after a good shampoo wash. Isn't he lovely?"
    },
    {
        name: "Spoingus",
        image: "images/Spoingus.webp",
        desc: "He's just a lil baby. he eepy and needs eep. He be doin a hoonk mimimimimi when he does the eepies."
    },
    {
        name: "The One Reborn",
        image: "images/TheOneReborn.jpg",
        desc: "Ḩ̵̨̧͕̼̘̦̝͍̣͇̬̾̑͒͋̍͛͋̃̐͜͠ȩ̷͓̠̥̮̞͖̰̰̎͊̅̅̀͋̈̇̍̀͋ ̶̧̨̢̢͕͉̠̭̙̝͇͗͆̍̓̈́̀̓̈́̃̓́̓͜͠ͅǐ̵̠̠̤͎̯̗̥̦̖͕̱̮͈͋̀̾̎́̂̓̆̉̚͠ͅs̸̨̟̰̖̾̋ ̵̡̩͎̱̤͖̂̈́̾̽̒̀̐̊̈́̃̿̄́̕̚ͅt̵̢̡̪͎͎̮̰̠͙͉͙͍͑̌̉̈́̓̽͜ḩ̶͓̗̩͇͔̲͈̞͋̒̎̎̊͛̋̆͐̓̚͜͝e̷̢̲̙̻̭̗̺̖̲͙̩͑ͅ ̵̡̢͙̰̱̮̞͕̟̥̖̳̘̌́̉̽̎͊̎̋͆̾̔̿̕ö̸̡̡̯̟̦͉͔͓̗̳̃ń̴͚̔̈́͌̉̋͂͆̕͘͝͝ȩ̶͉̘͖͍̺̲̞̔̆̆̎͂̒̿̉͑̂̈́̐͒̈ ̶̙̗̬̯̉͋r̴̨͔͓͈̜̼̞̬͊̉̾̂̐̈́̒̚͝e̶͎̺̭͇̾̐͗̋̈́̔̃̎̈́̋b̵̨̢̛͎̦͓̙̳̲̦̥̹͙͎͗͋͑̿͌̾̇̉̇̄̆̚o̷̗͐͑̈́̎̏͂̽̐̌̕͝r̶͎̥̾̓ǹ̷͇̖͈̒͐̂̀̄̉̓͘"
    },
    {
        name: "Trash Panda",
        image: "images/trashPanda.jpg",
        desc: "Isn't he cute? He just sorta showed up here one day. He likes to eat trash, but that's ok because he is just so darn cute!"
    }
    ]


// function getRandomAnimal() {
//     randomNum = (Math.floor(Math.random)*animals.length);
    
//     let child = outPut.firstChild;
//     if (outPut.firstChild) { 
//       outPut.removeChild(child);
//     } else {
//       outPut.appendChild(newRandomElement);
//     }

// }

let index = 0;
let currentAnimal = animals[index];

function randomAnimal() {
    index = Math.floor(Math.random() * animals.length);
    currentAnimal = animals[index];
}

function createAnimalCard() {
    randomAnimal();
    animalContainer.innerHTML = `
        <div class="flex items-center justify-center bg-[#1b0c318c] w-fit h-fit rounded-xl flex-col text-[#000000] p-4" id="card">
            <h2 class="my-2 text-xl">${currentAnimal.name}</h2>    
            <img class="w-96 h-auto rounded-md mx-5" src="${currentAnimal.image}" alt="${currentAnimal.name}">
            <p class="w-96 my-2">${currentAnimal.desc}</p>
        </div>
    `;    
}