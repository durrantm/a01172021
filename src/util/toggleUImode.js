const toggleUImode = (UImode, setUImode) => {
  const newMode = UImode && UImode.toLowerCase() === 'dark-mode' ? 'light-mode' : 'dark-mode';
  setUImode(newMode);
  localStorage.setItem('edaUImode', newMode);
  return newMode;
};
export default toggleUImode;