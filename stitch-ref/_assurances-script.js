
  // Simple reactive filter logic for client-side fluidity
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#insurance-tabs .tab-btn');
    const searchInput = document.getElementById('filter-search');
    const statusSelect = document.getElementById('filter-status');
    const rows = document.querySelectorAll('#claims-table .claim-row');

    let currentInsurer = 'all';

    function applyFilters() {
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const selectedStatus = statusSelect ? statusSelect.value : 'all';

      rows.forEach(row => {
        const rowInsurer = row.getAttribute('data-insurer');
        const rowStatus = row.getAttribute('data-status');
        const rowText = row.innerText.toLowerCase();

        const matchesInsurer = (currentInsurer === 'all' || rowInsurer === currentInsurer);
        const matchesStatus = (selectedStatus === 'all' || rowStatus === selectedStatus);
        const matchesSearch = (!searchTerm || rowText.includes(searchTerm));

        if (matchesInsurer && matchesStatus && matchesSearch) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
          t.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
        });
        tab.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');
        tab.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
        currentInsurer = tab.getAttribute('data-insurer') || 'all';
        applyFilters();
      });
    });

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (statusSelect) statusSelect.addEventListener('change', applyFilters);
  });
