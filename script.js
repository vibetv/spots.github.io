document.addEventListener('DOMContentLoaded', loadMatches);
function loadMatches() {
  const matchList = document.getElementById('matchList');

  fetch('streams.json')
    .then(response => response.json())
    .then(data => {
      data.matches.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.className = 'match';

        matchDiv.innerHTML = `
          <h3>${match.team1} vs ${match.team2}</h3>
          <p>${match.time}</p>
          <a href="${match.link}" target="_blank">Tonton Sekarang</a>
        `;

        matchList.appendChild(matchDiv);
      });
    })
    .catch(error => console.error('Error loading matches:', error));
}

function scrollToMatches() {
  document.getElementById('matches').scrollIntoView({ behavior: 'smooth' });
}
