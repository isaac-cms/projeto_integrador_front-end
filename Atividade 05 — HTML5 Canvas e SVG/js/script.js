const canvas = document.getElementById('impactoCanvas');

if (canvas) {
  const ctx = canvas.getContext('2d');
  const dados = [
    { nome: 'Transporte', valor: 78 },
    { nome: 'Comércio local', valor: 64 },
    { nome: 'Menos resíduos', valor: 52 }
  ];

  const larguraBarra = 90;
  const espacamento = 95;
  const baseY = 270;
  const escala = 2.2;
  let progresso = 0;

  function desenharGrafico() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#263238';
    ctx.font = '700 18px system-ui';
    ctx.fillText('Indicadores de impacto sustentável', 30, 34);

    ctx.strokeStyle = '#b0bec5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(35, baseY);
    ctx.lineTo(canvas.width - 30, baseY);
    ctx.stroke();

    dados.forEach((item, index) => {
      const x = 65 + index * (larguraBarra + espacamento);
      const alturaFinal = item.valor * escala;
      const alturaAtual = Math.min(progresso * escala, alturaFinal);
      const y = baseY - alturaAtual;

      ctx.fillStyle = '#2e7d32';
      ctx.fillRect(x, y, larguraBarra, alturaAtual);

      ctx.fillStyle = '#1b5e20';
      ctx.font = '700 18px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(`${item.valor}%`, x + larguraBarra / 2, y - 10);

      ctx.fillStyle = '#455a64';
      ctx.font = '14px system-ui';
      ctx.fillText(item.nome, x + larguraBarra / 2, baseY + 28);
    });

    ctx.textAlign = 'start';
  }

  function animar() {
    progresso += 1.8;
    desenharGrafico();

    const maiorValor = Math.max(...dados.map((item) => item.valor));
    if (progresso < maiorValor) {
      requestAnimationFrame(animar);
    }
  }

  desenharGrafico();
  requestAnimationFrame(animar);
}