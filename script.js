function displayGreeting() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingDiv = document.getElementById('greeting');
    if (nameInput) {
        greetingDiv.innerHTML = `Happy Birthday, ${nameInput}! Bestie, Sister, Friend, Teacher, Flower ,Blue 💙`;
    } else {
        greetingDiv.innerHTML = 'Please enter your name to receive a special greeting!';
    }
}

function revealWishes() {
    const wishesDiv = document.getElementById('wishes');
    const wishes = [
        'Wishing you a day filled with love and cheer!',
        'May your birthday be as special as you are!',
        'Happy Birthday to the best friend ever!',
        'May all your dreams come true on this special day!',
        'Cheers to another year of friendship and fun!',
        'Happy Birthday! Enjoy your special day!',
        'Sending you lots of love and happiness on your birthday!',
        'May your birthday be filled with laughter and joy!',
        'Happy Birthday to my amazing friend!',
        'Wishing you a fantastic birthday and a wonderful year ahead!'
    ];

    wishesDiv.innerHTML = '';
    wishes.forEach((wish, index) => {
        const wishDiv = document.createElement('div');
        wishDiv.className = 'wish';
        wishDiv.textContent = wish;
        wishesDiv.appendChild(wishDiv);
    });

    wishesDiv.style.display = 'block';
    window.scrollTo(0, 0);
}

function revealCompliments() {
    const complimentsDiv = document.getElementById('compliments');
    const compliments = [
        'You are an amazing friend!',
        'Your kindness knows no bounds!',
        'You light up every room you enter!',
        'You are incredibly talented!',
        'Your smile is contagious!',
        'You have a heart of gold!',
        'You are a true inspiration!',
        'You make the world a better place!',
        'You are a wonderful listener!',
        'You are loved more than you know!'
    ];

    complimentsDiv.innerHTML = '';
    compliments.forEach((compliment, index) => {
        const complimentDiv = document.createElement('div');
        complimentDiv.className = 'compliment';
        complimentDiv.textContent = compliment;
        complimentsDiv.appendChild(complimentDiv);
    });

    complimentsDiv.style.display = 'block';
    window.scrollTo(0, 0);
}

function revealReassurance1() {
    const reassuranceDiv = document.getElementById('reassurance');
    const reassuranceMessage = 'nO MaTTeR WhAt HaPpEnS, I wILL alWaYs Be tHerE fOr yOu. OuR FrIeNdshIp iS UnbreAkabLe and EveRLastInG.';

    reassuranceDiv.innerHTML = '';
    const reassuranceMessageDiv = document.createElement('div');
    reassuranceMessageDiv.className = 'reassurance-message';
    reassuranceMessageDiv.textContent = reassuranceMessage;
    reassuranceDiv.appendChild(reassuranceMessageDiv);

    reassuranceDiv.style.display = 'block';
    window.scrollTo(0, 0);
}

function revealReassurance2() {
    const reassuranceDiv = document.getElementById('reassurance');
    const reassuranceMessage = 'YoU aRe vErY SpEcIaL tO mE';

    reassuranceDiv.innerHTML = '';
    const reassuranceMessageDiv = document.createElement('div');
    reassuranceMessageDiv.className = 'reassurance-message';
    reassuranceMessageDiv.textContent = reassuranceMessage;
    reassuranceDiv.appendChild(reassuranceMessageDiv);

    reassuranceDiv.style.display = 'block';
    window.scrollTo(0, 0);
}

function backToHomepage() {
    document.getElementById('greeting').innerHTML = '';
    document.getElementById('wishes').style.display = 'none';
    document.getElementById('compliments').style.display = 'none';
    document.getElementById('reassurance').style.display = 'none';
    window.scrollTo(0, 0);
}

function revealMemories() {
    const memoriesDiv = document.getElementById('memories');
    const memories = [
        'memory1.jpeg',
        'memory2.jpeg',
        'memory3.jpg',
        'memory4.jpeg'
    ];

    memoriesDiv.innerHTML = '';
    memories.forEach((memory, index) => {
        const memoryImg = document.createElement('img');
        memoryImg.src = memory;
        memoryImg.className = 'memory';
        memoryImg.alt = `Memory ${index + 1}`;
        memoriesDiv.appendChild(memoryImg);
    });

    memoriesDiv.style.display = 'block';
    window.scrollTo(0, 0);
}
