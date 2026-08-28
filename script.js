function showLevelSelect() {
  document.getElementById('start-screen').classList.remove('active');
  document.getElementById('level-screen').classList.add('active');
}

function startLevel1() {
  document.getElementById('level-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
}


function parentsLeave() {
  document.querySelector('.banana-dad').styledisplay = 'none';
  document.querySelector('.banana-mom').styledisplay = 'none';
  document.querySelector('.speech-bubble').innerHTML = "<strong>Banana Kid:</strong> Now I'm home alone! Time to check the house...";

  const btn = document.querySelector('#intro-ui-box .game-btn');
  btn.innerText = "Look Around";
  btn.onclick = function() {
    alert("Next scene ready!");
  };
}