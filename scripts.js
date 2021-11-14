const manifestoBtn = document.querySelector(".open-manifesto");
manifestoBtn.addEventListener("click", showManifestoHandler);

const modalContainer = document.querySelector(".model-container");

modalContainer.addEventListener("click", (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModelHandler();
  }
});

function showManifestoHandler() {
  modalContainer.classList.add("is-visible");

  const manifestoContent = document.querySelector(".manifesto-model");

  const manifestoBody = document.importNode(manifestoContent.content, true);
  modalContainer.appendChild(manifestoBody);

  const closeBtn = modalContainer.querySelector(".close-model");
  closeBtn.addEventListener("click", hideModelHandler);
}

function hideModelHandler(e) {
  const manifestoBody = modalContainer.querySelector(".manifesto");
  modalContainer.removeChild(manifestoBody);
  modalContainer.classList.remove("is-visible");
}
