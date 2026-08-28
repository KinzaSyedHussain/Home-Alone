function showLevelSelect() {
  document.getElementById('start-screen').classList.remove('active');
  document.getElementById('level-screen').classList.add('active');
}

function startLevel1() {
  document.getElementById('level-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
}


function parentsLeave() {
  const hallbg = document.querySelector('.bg-img');
  const dad = document.querySelector('.banana-dad');
  const mom = document.querySelector('.banana-mom');
  const introbox = document.getElementById('intro-box');
  const btn = document.getElementById('dialogue-btn');

  if (hallbg) hallbg.src = "open door.jpeg";
  if (dad) dad.style.display = 'none';
  if (mom) mom.style.display = 'none';
  if (introbox) introbox.style.display = 'none';

  setTimeout(() => {
    if (hallbg) hallbg.src = "withoutopen door.jpeg";
    if (introbox) introbox.style.display = 'block';
    const speechBubble = document.querySelector('.speech-bubble');
    if (speechBubble) {
      speechBubble.innerHTML = "<strong>Banana Kid:</strong> Bye Mom and Dad! Now I'm home alone! Time to check the house...";
    }

    if (btn) {
      btn.innerText = "Look through peephole";
      btn.onclick = strangerArrives;
    }
  }, 1500);
}

function strangerArrives() {
  const hallBg = document.getElementById('main-bg')
  const kid = document.getElementById('banana-kid');
  const appy = document.getElementById('appy');
  const introbox = document.getElementById('intro-box');

  if (hallBg) hallBg.src = "stranger stand.jpg";
  if (kid) kid.style.display = 'block';
  if (appy) appy.classList.remove()

  if (introbox) {
    introbox.innerHTML = `
      <p id="dialogue-text"><strong>Stranger:</strong> *Knock Knock* "Hey kid! I'm Appy Doctor, open the door!"</p>
      <div id="choices-container" style="display:flex; justify-content:center; gap:15px; margin-top:10px;">
        <button class="game-btn danger" onclick="chooseDoor(true)">YES (Open Door)</button>
        <button class="game-btn safe" onclick="chooseDoor(false)">NO (Keep Locked)</button>
      </div>
    `;
  }

  if (!document.getElementById('kitchen-arrow')) {
    const arrow = document.createElement('button');
    arrow.id = 'kitchen-arrow';
    arrow.innerText = '<--- Go to kitchen (check clue)';
    arrow.onclick = openKitchen;
    document.getElementById('game-screen').appendChild(arrow);
  }
}

function openKitchen() {
  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('kitchen-screen').classList.add('active');
}

function backToHall() {
  document.getElementById('kitchen-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
}

function chooseDoor(openDoor) {
  const hallBg = document.getElementById('main-bg');
  const kid = document.getElementById('banana-kid');
  const appy = document.getElementById('appy');
  const uiBox = document.getElementById('intro-box');
  
  if (appy) appy.classList.add('hidden');

  if (openDoor) {
    if (hallBg) hallBg.src = "open door.jpeg";
    if (uiBox) uiBox.innerHTML = "<p style='color:#ff4d4d; font-size: 1.2rem; font-weight: bold;'>GAME OVER! You opened the door to Appy!</p>";
  } else {
    if (hallBg) hallBg.src = "withouopen door.jpeg";
    if (kid) kid.classList.remove('hidden'); 
    if (uiBox) uiBox.innerHTML = "<p style='color:#2ecc71; font-size: 1.2rem; font-weight: bold;'>YOU SURVIVED! You kept the door locked!</p>";
  }
}
