(() => {
  const acceptance = document.getElementById('accept-download');
  const download = document.getElementById('download-atlante');
  const hint = document.getElementById('download-hint');
  const update = () => {
    const enabled = acceptance.checked;
    download.setAttribute('aria-disabled', String(!enabled));
    download.tabIndex = enabled ? 0 : -1;
    if (enabled) {
      download.href = 'atlante.zip';
      download.setAttribute('data-goatcounter-click', 'download-atlante');
    } else {
      download.removeAttribute('href');
      download.removeAttribute('data-goatcounter-click');
    }
    hint.textContent = enabled ? 'Puoi scaricare DOMIA per Windows.' : 'Accetta le condizioni per abilitare il download.';
  };
  download.addEventListener('click', event => {
    if (!acceptance.checked) event.preventDefault();
  });
  download.addEventListener('keydown', event => {
    if (event.key === ' ' && acceptance.checked) {
      event.preventDefault();
      download.click();
    }
  });
  acceptance.addEventListener('change', update);
  window.addEventListener('pageshow', update);
  update();
})();
