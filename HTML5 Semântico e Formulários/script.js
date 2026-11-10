const video = document.querySelector('#eco-video');
const status = document.querySelector('#format-status');

if (video && status) {
  const sources = [...video.querySelectorAll('source')];
  const supported = sources.map(source => ({type: source.type,result: video.canPlayType(source.type),src: source.src})).filter(item => item.result);
  if (supported.length) {
    const preferred = supported.find(item => item.result === 'probably') || supported[0];
    status.textContent = `Navegador: suporte detectado para ${preferred.type.split('/')[1].toUpperCase()} (${preferred.result}).`;
  } else {
    status.textContent = 'Navegador: nenhum dos formatos de vídeo foi reconhecido.';
  }
}