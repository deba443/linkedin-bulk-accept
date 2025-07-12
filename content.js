function addBulkAcceptButton() {
  const existing = document.getElementById("bulk-accept-btn");
  if (existing) return;

  const targetEl = [...document.querySelectorAll("p")].find((li) =>
    li.innerText.trim().toLowerCase().includes("manage invitations")
  );
  if (!targetEl) {
    console.warn("Sent list item not found.");
    return;
  }

  // Create the new <p> element
  const currentEle = document.createElement("p");
  currentEle.className = targetEl.className;
  currentEle.innerText = "Bulk accept";
  currentEle.style.cursor = "pointer";
  currentEle.onclick = () => {
    const acceptButtons = [...document.querySelectorAll("button")].filter(
      (btn) => btn.innerText.trim().toLowerCase() === "accept"
    );
    acceptButtons.forEach((btn, index) => {
      setTimeout(() => btn.click(), index * 500); // Delay to avoid LinkedIn spam detection
    });
    alert(`${acceptButtons.length} invitations accepted.`);
  };
  // Insert after the 'Sent' <li>
  targetEl.parentNode.insertBefore(currentEle, targetEl.nextSibling);
}

window.addEventListener("load", () => {
  setTimeout(addBulkAcceptButton, 2000);
});
