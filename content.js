function addBulkAcceptButton() {
  const existing = document.getElementById("bulk-accept-btn");
  if (existing) return;

  const showAllButton=[...document.querySelectorAll('button')].find((btn)=>btn.innerText.trim().toLowerCase() === 'show all')
  if(!showAllButton){
    console.warn("Show all button not found")
    return;
  }

  const bulkSpan = document.createElement("button");
// Copy computed styles from the "Show all" span
  const computedStyles = window.getComputedStyle(showAllSpan);
  for (let prop of computedStyles) {
    bulkSpan.style[prop] = computedStyles.getPropertyValue(prop);
  }
  bulkSpan.innerText = "Bulk Accept";
  bulkSpan.id = "bulk-accept-btn";
  bulkSpan.style.marginLeft = "8px";
  bulkSpan.style.cursor = "pointer";
  
  
  bulkSpan.onclick = () => {
    const acceptButtons = [...document.querySelectorAll('button')].filter(btn =>
      btn.innerText.trim().toLowerCase() === 'accept'
    );
    acceptButtons.forEach((btn, index) => {
      setTimeout(() => btn.click(), index * 500); // Delay to avoid LinkedIn spam detection
    });
    alert(`${acceptButtons.length} invitations accepted.`);
  };

  const target = document.querySelector('.mn-invitation-manager__container') || document.body;
  target.prepend(button);
}

window.addEventListener('load', () => {
  setTimeout(addBulkAcceptButton, 2000);
});
