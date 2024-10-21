function loadMatches() {
    const matchList = document.getElementById('matchList');

    matchData.matches.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.className = 'match';

        matchDiv.innerHTML = `
          <h3>${match.team1} vs ${match.team2}</h3>
          <p>Waktu: ${new Date(match.time).toLocaleString('id-ID')}</p>
          <div class="countdown" id="countdown-${match.team1}-${match.team2}">Loading...</div>
          <button class="live-button" id="live-${match.team1}-${match.team2}" onclick="location.href='${match.link}'">Tonton Live</button>
        `;

        matchList.appendChild(matchDiv);

        startCountdown(match.time, `countdown-${match.team1}-${match.team2}`, `live-${match.team1}-${match.team2}`);
    });
}

function startCountdown(matchTime, countdownId, liveButtonId) {
    const countdownElement = document.getElementById(countdownId);
    const liveButton = document.getElementById(liveButtonId);
    const matchDate = new Date(matchTime).getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = matchDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Sedang Berlangsung!";
            liveButton.style.display = "inline-block";
            return;
        }

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours}j ${minutes}m ${seconds}d`;
    }, 1000);
}

function scrollToMatches() {
    document.getElementById('matches').scrollIntoView({
        behavior: 'smooth'
    });
}
