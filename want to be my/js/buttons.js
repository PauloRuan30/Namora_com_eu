addEventListener('load', () => {
  const but = document.getElementById('button_nao');
  const bS = but.style;
  const bod = document.body;

  let clickCount = 0; // Contador de cliques no botão "Não?"

  but.onclick = function () {
    clickCount++; // Incrementa o contador de cliques

    if (clickCount > 8) {
      alert("CLICA logo no sim, porra"); // Exibe a mensagem após 8 cliques
    }

    let m = bod.getBoundingClientRect();
    let mw = m.width;
    let mh = m.height;
    let b = this.getBoundingClientRect();
    let x = Math.floor(Math.random() * mw);
    let y = Math.floor(Math.random() * mh);
    let w = b.width;
    let h = b.height;
    let xw = mw - w;
    let yh = mh - h;
    bS.top = (y > yh ? yh : y) + 'px';
    bS.left = (x > xw ? xw : x) + 'px';
  };
});