const refs = {
    fontSizeControl: document.getElementById('font-size-control'),
    textEl: document.getElementById('text'),
  };
  
  refs.fontSizeControl.addEventListener('input', size => {
    refs.textEl.style.fontSize = `${size.currentTarget.value}px`;
  });