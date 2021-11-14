const manifestoBtn = document.querySelector('.open-manifesto');
manifestoBtn.addEventListener('click', showManifestoHandler);


 const modelContainer = document.querySelector('.model-container');

modelContainer.addEventListener('click', hideModelHandler);

function showManifestoHandler() {
  modelContainer.classList.add('is-visible');

  const manifestoContent = document.querySelector('.manifesto-model');

  const manifestoBody = document.importNode(manifestoContent.content, true);
  modelContainer.appendChild(manifestoBody);
  
  const closeBtn = modelContain.querySelector('.close-model');
  closeBtn.addEventListener('click', hideModelHandler);
}

function hideModelHandler() {
  const manifestoBody = modelContainer.querySelector('.manifesto');
  modelContainer.removeChild(manifestoBody);
  modelContainer.classList.remove('is-visible');
}

