/* Website-only navigation around the independently delivered demo. */
(() => {
  if (new URLSearchParams(location.search).get('tour') === 'stage' && parent !== window) return;
  const makeLink = () => {
    const link = document.createElement('a');
    link.className = 'website-home-link';
    link.href = '../../index.html';
    link.setAttribute('aria-label', '返回川序官网首页');
    link.innerHTML = '<span aria-hidden="true">←</span><span>返回官网</span>';
    link.addEventListener('click', () => {
      const player = document.querySelector('.tour-player');
      if (player && !player.hidden) player.querySelector('.tour-exit').click();
    });
    return link;
  };
  document.querySelector('.header-inner').append(makeLink());
  const player = document.querySelector('.tour-player');
  if (player) {
    const bar = document.createElement('div');
    bar.className = 'website-tour-topbar';
    bar.append(makeLink());
    player.prepend(bar);
  }
})();
