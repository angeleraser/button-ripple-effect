const rippleElements = document.querySelectorAll("[data-ripple]");

function createRipple({ offsetX, offsetY, size }) {
  const spanEl = document.createElement("span");
  spanEl.classList.add("ripple");
  spanEl.style.top = `${offsetY}px`;
  spanEl.style.left = `${offsetX}px`;
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;
  return spanEl;
}

function insertRipple(element, { offsetX, offsetY }) {
  const { width, height } = element.getBoundingClientRect();

  const ripple = createRipple({
    offsetX,
    offsetY,
    size: Math.max(width, height),
  });

  element.appendChild(ripple);
  setTimeout(() => element.removeChild(ripple), 1000);
}

function setupRippleEffect(element) {
  const area = document.createElement("span");
  area.classList.add("ripple-area");
  element.appendChild(area);
  element.addEventListener("click", (event) => insertRipple(area, event));
}

rippleElements.forEach(setupRippleEffect);