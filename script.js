function playSound(audioId) {
  const sound = document.getElementById(audioId);
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(err => console.log(`Audio error (${audioId}):`, err));   
  }
}

function showLevelSelect() {
  document.getElementById('start-screen').classList.remove('active');
  document.getElementById('level-screen').classList.add('active');

  const bgMusic = document.getElementById('bg-music');
  if (bgMusic) {
    bgMusic.volume = 0.5; 
    bgMusic.play().catch(err => console.log("BG Music play blocked:", err));
  }
}

function startLevel1() {
  document.getElementById('level-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
}

function parentsLeave() {
  const hallbg = document.getElementById('main-bg');
  const dad = document.getElementById('banana-dad');
  const mom = document.getElementById('banana-mom');
  const kid = document.getElementById('banana-kid');
  const introbox = document.getElementById('intro-box');
  const btn = document.getElementById('dialogue-btn');

  if (hallbg) hallbg.src = "open door.jpeg";
  if (dad) dad.style.display = 'none';
  if (mom) mom.style.display = 'none';
  if (introbox) introbox.style.display = 'none';

  setTimeout(() => {
    if (hallbg) hallbg.src = "withouopen door.jpeg";
    if (introbox) introbox.style.display = 'block';
    
    const speechBubble = document.querySelector('.speech-bubble');
    if (speechBubble) {
      speechBubble.innerHTML = "<strong>Banana Kid:</strong> Bye Mom and Dad! Now I'm home alone! Time to check the house...";
    }

    if (btn) btn.style.display = 'none';
    if (kid) kid.classList.add('wiggle');
    playSound('chicken-banana')

  setTimeout(() => {
    const chickenAudio = document.getElementById('chicken-banana');
    if (chickenAudio) chickenAudio.pause();
    if (kid) kid.classList.remove('wiggle');

    playSound('knock');

      if (speechBubble) {
        speechBubble.innerHTML = "<strong>Banana Kid:</strong> *Knock Knock!* Huh? Who is at the door?";
      }

      if (btn) {
        btn.innerText = "Look through peephole";
        btn.style.display = 'inline-block';
        btn.onclick = strangerArrives;
      }
    }, 5000);
  }, 1500);
}

function strangerArrives() {
  const hallBg = document.getElementById('main-bg');
  const kid = document.getElementById('banana-kid');
  const appy = document.getElementById('appy');
  const introbox = document.getElementById('intro-box');

  if (hallBg) hallBg.src = "stranger stand.jpg";
  if (kid) kid.style.display = 'block';
  if (appy) appy.classList.remove('hidden');

  if (introbox) {
    introbox.innerHTML = `
      <p id="dialogue-text" style="margin-bottom:10px;"><strong>Stranger:</strong> *Knock Knock* "Hey kid! I'm Appy Doctor, open the door!"</p>
      <div id="choices-container" style="display:flex; justify-content:center; gap:15px;">
        <button class="game-btn danger" onclick="chooseDoor(true)">YES (Open Door)</button>
        <button class="game-btn safe" onclick="chooseDoor(false)">NO (Keep Locked)</button>
      </div>
    `;
  }

  if (!document.getElementById('kitchen-arrow')) {
    const arrow = document.createElement('button');
    arrow.id = 'kitchen-arrow';
    arrow.className = 'game-btn';
    arrow.style.position = 'absolute';
    arrow.style.top = '20px';
    arrow.style.left = '20px';
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

function showClueText() {
  const popup = document.getElementById('clue-popup');
  if (popup) popup.classList.remove('hidden');
}

function closeClueText() {
  const popup = document.getElementById('clue-popup');
  if (popup) popup.classList.add('hidden');
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
    if (kid) kid.style.display = 'block';
    if (uiBox) uiBox.innerHTML = "<p style='color:#2ecc71; font-size: 1.2rem; font-weight: bold;'>YOU SURVIVED! You kept the door locked!</p>";
  }
}
