// Animação suave para os cards de plano
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transition = 'transform 0.3s ease';
    });
});

// Adiciona efeito de scroll suave para os botões de inscrição
document.querySelectorAll('.subscribe-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Obrigado pelo interesse! Em breve você poderá assinar o Cinneflix.');
    });
});

// Animação do header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0,0,0,0.9)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)';
    }
});