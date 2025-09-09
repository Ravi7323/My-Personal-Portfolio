function changeBackground() {
  const select = document.getElementById('colorSelect');
  const color = select.value;
  document.body.style.backgroundColor = color;
}

const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
