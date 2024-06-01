document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  sections.forEach(function(section) {
    const buttons = section.querySelectorAll('.button');
    buttons.forEach(function(button, index) {
      const watchedIcon = button.querySelector('.watched-icon');
      const episodeNumber = index + 1;
      const storageKey = `section${section.dataset.section}-watchedIcon${episodeNumber}`;
      const isWatched = localStorage.getItem(storageKey);

      if (isWatched === "true") {
        watchedIcon.style.display = "inline";
      }

     button.addEventListener('click', function () {
                const isWatched = localStorage.getItem(storageKey);

                if (isWatched === "true") {
                    watchedIcon.style.display = "inline";
                } else {
                    watchedIcon.style.display = "inline";
                    localStorage.setItem(storageKey, "true");
                }
            });
        });
    });
});
  // ++++++++++++++++++++++++++++++++++++++++++++++ 

function handleImageError(img) {
  img.src = 'https://i.imgur.com/MXnSqzd.png';
}
        // تطبيق تأخير عشوائي لكل عنصر .marquee
        document.querySelectorAll('.marquee').forEach((el, index) => {
            const delay = Math.random() * 6; // تأخير عشوائي يصل إلى 5 ثواني
            el.style.animationDelay = `${delay}s`;
        });
        
  // ++++++++++++++++++++++++++++++++++++++++++++++ 

