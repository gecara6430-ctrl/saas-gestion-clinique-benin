
  // Simple Live Consultation Clock Incrementer
  (function initConsultationTimer() {
    let seconds = 14 * 60 + 28;
    const timerElem = document.getElementById('session-timer');
    if (!timerElem) return;

    setInterval(() => {
      seconds++;
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      
      const pad = (n) => n.toString().padStart(2, '0');
      timerElem.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }, 1000);
  })();
