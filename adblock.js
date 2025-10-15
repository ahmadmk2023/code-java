(function(){
  if (window.__adblock_checked) return;
  window.__adblock_checked = true;

  function showPopup() {
    const overlay = document.createElement('div');
    overlay.id = 'adblock-overlay';
    overlay.innerHTML = `
      <div class="adblock-popup">
        <h2>🚫 تم اكتشاف مانع الإعلانات</h2>
        <p>الرجاء تعطيل مانع الإعلانات لدعم موقعنا ❤️</p>
        <button id="adblock-close-btn">لقد عطّلت مانع الإعلانات</button>
      </div>
    `;
    document.body.appendChild(overlay);

    const style = document.createElement('style');
    style.textContent = `
      #adblock-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        font-family: Tahoma, sans-serif;
        direction: rtl;
      }
      .adblock-popup {
        background: #fff;
        padding: 25px 30px;
        border-radius: 14px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 0 25px rgba(0,0,0,0.3);
      }
      .adblock-popup h2 { color: #d32f2f; margin-top: 0; }
      .adblock-popup p { color: #333; margin-bottom: 20px; }
      #adblock-close-btn {
        background: #2196f3; color: #fff;
        border: none; padding: 10px 16px;
        border-radius: 8px; cursor: pointer;
      }
      #adblock-close-btn:hover { background: #0b7dda; }
    `;
    document.head.appendChild(style);
    document.getElementById('adblock-close-btn').onclick = ()=>overlay.remove();
  }

  function detectAdblock() {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-banner ad-unit ad-test';
    bait.style.cssText = 'width:1px;height:1px;position:absolute;left:-9999px;top:-9999px;';
    document.body.appendChild(bait);

    setTimeout(()=>{
      const hidden = getComputedStyle(bait).display === 'none' || bait.offsetHeight === 0;
      bait.remove();
      if (hidden) showPopup();
    }, 800);
  }

  window.addEventListener('load', detectAdblock);
})();
