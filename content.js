function addBulkAcceptButton() {
  const existing = document.getElementById("bulk-accept-btn");
  if (existing) return;

  const button = document.createElement("button");
  button.innerText = "Bulk Accept Invitations";
  button.id = "bulk-accept-btn";
  button.style.padding = "10px 20px";
  button.style.backgroundColor = "#0073b1";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.margin = "20px";
  button.style.fontWeight = "bold";
  
  button.onclick = () => {
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
