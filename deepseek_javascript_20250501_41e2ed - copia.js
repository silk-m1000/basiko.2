// Ejemplo: Añadir productos al carrito
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h4').textContent;
        alert(`¡${productName} añadido al carrito!`);
    });
});

// Menú móvil (opcional)
// Puedes expandir esto para hacer un menú hamburguesa en móviles