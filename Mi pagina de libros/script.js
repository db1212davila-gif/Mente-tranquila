document.addEventListener('DOMContentLoaded', () => {
    
    const libro = document.getElementById('libro');
    const wrapper = document.querySelector('.book-wrapper');
    const book3d = document.querySelector('.book-3d');
    
    if(wrapper && book3d) {
        // Efecto 3D con el mouse
        wrapper.addEventListener('mousemove', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 20;
            const rotateY = ((x - centerX) / centerX) * 20;
            
            book3d.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset al salir
        wrapper.addEventListener('mouseleave', () => {
            book3d.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    
    // Efecto de click en el libro
    if(libro) {
        libro.addEventListener('click', () => {
            libro.style.transform = 'scale(0.95)';
            setTimeout(() => {
                libro.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    console.log('✅ Página cargada correctamente');
});