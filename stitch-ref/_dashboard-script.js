
  // Simple interactive filter toggle for the patient queue list
  const filterAll = document.getElementById('filter-all');
  const filterActive = document.getElementById('filter-active');
  const filterWaiting = document.getElementById('filter-waiting');

  const buttons = [filterAll, filterActive, filterWaiting];

  function setActiveTab(selectedBtn) {
    buttons.forEach(btn => {
      if (btn === selectedBtn) {
        btn.className = 'px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap';
      } else {
        btn.className = 'px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm transition-colors whitespace-nowrap';
      }
    });
  }

  if (filterAll) filterAll.addEventListener('click', () => setActiveTab(filterAll));
  if (filterActive) filterActive.addEventListener('click', () => setActiveTab(filterActive));
  if (filterWaiting) filterWaiting.addEventListener('click', () => setActiveTab(filterWaiting));
