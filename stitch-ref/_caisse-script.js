
  (function () {
    const navLinks = document.querySelectorAll('aside nav a[data-path]');
    navLinks.forEach((link) => {
      if (link.getAttribute('data-path') === 'caisse-et-assurances') {
        link.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-high', 'hover:text-on-surface');
        link.classList.add('bg-primary-container', 'text-on-primary-container');
      }
    });

    const paymentBtns = document.querySelectorAll('.payment-btn');
    const refLabel = document.getElementById('ref-label');
    const txInput = document.getElementById('tx-input');
    const txSuffix = document.getElementById('tx-suffix');
    const changeDisplay = document.getElementById('change-display');
    const changeAmount = document.getElementById('change-amount');
    let activeMethod = 'especes';
    const netToPay = 8000;

    paymentBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeMethod = btn.getAttribute('data-method');
        paymentBtns.forEach((b) => {
          b.classList.remove('bg-primary-container', 'text-on-primary-container', 'shadow-sm');
          b.classList.add('bg-surface-container-low', 'text-on-surface');
        });
        btn.classList.remove('bg-surface-container-low', 'text-on-surface');
        btn.classList.add('bg-primary-container', 'text-on-primary-container', 'shadow-sm');

        txInput.value = '';
        changeDisplay.classList.add('hidden');
        changeDisplay.classList.remove('flex');

        if (activeMethod === 'especes') {
          refLabel.textContent = 'Montant reçu en espèces (pour rendu de monnaie)';
          txInput.type = 'number';
          txInput.placeholder = 'Ex: 10000';
          txSuffix.classList.remove('hidden');
        } else {
          refLabel.textContent = 'Référence de transaction (optionnel)';
          txInput.type = 'text';
          txInput.placeholder = 'Ex: TXN-8849201';
          txSuffix.classList.add('hidden');
        }
      });
    });

    txInput.addEventListener('input', () => {
      if (activeMethod === 'especes') {
        const val = parseInt(txInput.value, 10);
        if (!isNaN(val) && val >= netToPay) {
          changeAmount.textContent = (val - netToPay).toLocaleString('fr-FR') + ' FCFA';
          changeDisplay.classList.remove('hidden');
          changeDisplay.classList.add('flex');
        } else {
          changeDisplay.classList.add('hidden');
          changeDisplay.classList.remove('flex');
        }
      }
    });

    const validateBtn = document.getElementById('validate-payment-btn');
    const successBanner = document.getElementById('payment-success-banner');
    validateBtn.addEventListener('click', () => {
      successBanner.classList.remove('hidden');
      successBanner.classList.add('flex');
      validateBtn.classList.add('opacity-90');
    });
  })();
