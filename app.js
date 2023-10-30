const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})






function displayFullScreen(videoSrc) {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenVideo = document.getElementById('fullscreen-video');

    fullscreen.style.display = 'block';
    fullscreenVideo.src = videoSrc;
    fullscreenVideo.load(); // Charger la vidéo
    fullscreenVideo.play(); // Lire la vidéo

    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    } else if (fullscreen.mozRequestFullScreen) {
        fullscreen.mozRequestFullScreen();
    } else if (fullscreen.webkitRequestFullscreen) {
        fullscreen.webkitRequestFullscreen();
    } else if (fullscreen.msRequestFullscreen) {
        fullscreen.msRequestFullscreen();
    }

    // Ajouter un gestionnaire d'événements pour la touche Échap
    document.addEventListener('keydown', exitFullScreenOnEscape);
}

function closeFullScreen() {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenVideo = document.getElementById('fullscreen-video');

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    fullscreen.style.display = 'none';
    fullscreenVideo.pause();
    fullscreenVideo.currentTime = 0;

    // Retirer le gestionnaire d'événements pour la touche Échap
    document.removeEventListener('keydown', exitFullScreenOnEscape);
}

function exitFullScreenOnEscape(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closeFullScreen();
    }
}




    // Fonction pour rechercher l'image par identifiant
    function rechercherImage() {
        var barreRecherche = document.getElementById('barreRecherche').value.toLowerCase();
        var images = document.querySelectorAll('.image');
        var noResultMessage = document.querySelector('.no-result-message');
        var resultFound = false;
  
        images.forEach(function(image) {
          var identifiant = image.id.toLowerCase();
          var isVisible = false;
  
          if (identifiant.includes(barreRecherche)) {
            isVisible = true;
            resultFound = true;
          }
  
          if (isVisible) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });
  
        // Afficher le message seulement si aucun résultat n'est trouvé
        if (!resultFound) {
          noResultMessage.style.display = 'block';
        } else {
          noResultMessage.style.display = 'none';
        }
      }
  
  
  
          // JavaScript pour ajuster l'opacité après le chargement de la page
          const htmlElement = document.querySelector('html');
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          htmlElement.style.opacity = 1; // Définit l'opacité à 1 avec un léger délai pour l'effet de fondu
        }, 100);
      });






          // Affiche l'image en plein écran
    function showFullscreen(image) {
        const fullscreen = document.getElementById("fullscreen");
        const fullscreenImage = document.getElementById("fullscreenImage");
        fullscreenImage.src = image.src;
        fullscreen.style.display = "block";
      }
  
      // Cache l'image en plein écran
      function hideFullscreen() {
        const fullscreen = document.getElementById("fullscreen");
        fullscreen.style.display = "none";
      }