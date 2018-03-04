document.querySelector("select").addEventListener("change", () => {
  document.querySelector("input").disabled = false;
  document.querySelector("input").type = "number";
  document.querySelector("input").step = 0.1;
});

document.querySelector('input').addEventListener('blur', (e) => {
  const product = document.querySelector("select").value;
  const rating = Number(e.target.value);

  if (rating < 0 || rating > 5) {
    alert('Invalid rating.');
    return;
  }
  const productToRate = Array.from(document.querySelectorAll('tr td:nth-child(2)')).find(td => td.getAttribute('data-product') === product);

  for (let i = 0; i < 5; i++) {
    const currentStarGroup = Array.from(productToRate.querySelectorAll('span.fa-layers'))[i];
    const currentStar = currentStarGroup.querySelector('.fa-star');
    const halfStar = currentStarGroup.querySelector('.fa-star-half');
    removeStar(currentStar, halfStar);
    if (i < Math.floor(rating)) {
      addStar(currentStar, halfStar);
    } else if (i === Math.floor(rating)) {
      if (rating % i === 0) {
        removeStar(currentStar, halfStar);
      } else if (parseFloat(Math.round(rating)) === Math.ceil(rating)) {
        addStar(currentStar, halfStar);
      } else {
        removeStar(currentStar, halfStar);
        halfStar.style.display = 'block';
      }
    }
  }
  productToRate.lastChild.textContent = rating;
});

function addStar(el, half) {
  el.classList.remove('unfilled');
  el.classList.add('filled');
  half.style.display = 'none';
}

function removeStar(el, half) {
  el.classList.remove('filled');
  el.classList.add('unfilled');
  half.style.display = 'none';
}
