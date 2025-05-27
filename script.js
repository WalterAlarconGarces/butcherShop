document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Cerrar el menú móvil si está abierto y se hizo clic en un enlace
            const mobileMenu = document.getElementById('mobile-menu');
            const menuToggle = document.getElementById('menu-toggle');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                // Cambiar ícono de hamburguesa a "cerrar" si es necesario
                if (menuToggle) {
                    menuToggle.innerHTML = '<i class="fas fa-bars fa-lg"></i>'; // Ícono de barras
                }
            }
        });
    });

    // Lógica para el menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            // Opcional: Cambiar el ícono del botón hamburguesa (bars a times y viceversa)
            if (mobileMenu.classList.contains('hidden')) {
                menuToggle.innerHTML = '<i class="fas fa-bars fa-lg"></i>'; // Ícono de barras
            } else {
                menuToggle.innerHTML = '<i class="fas fa-times fa-lg"></i>'; // Ícono de cerrar (X)
            }
        });
    }

    // Función para mostrar notificaciones (Toast)
    function showToast(message, duration = 3000) {
        const toast = document.getElementById('toastMessage');
        const toastText = document.getElementById('toastText');
        
        if (!toast || !toastText) {
            console.error("Elementos del Toast no encontrados.");
            return;
        }

        toastText.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    // Manejador de envío para el formulario de Pedido
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Lógica para enviar el pedido (ej: AJAX a un backend, o mail)
            const nombre = document.getElementById('nombre_pedido').value;
            showToast(`Gracias ${nombre}, tu pedido ha sido recibido. Te contactaremos pronto.`);
            orderForm.reset();
        });
    }

    // Manejador de envío para el formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Lógica para enviar el mensaje
            const nombre = document.getElementById('nombre_contacto').value;
            showToast(`Gracias ${nombre}, tu mensaje ha sido enviado. Te responderemos a la brevedad.`);
            contactForm.reset();
        });
    }

    // Placeholder para errores de carga de imágenes
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            // Reemplaza con una imagen placeholder genérica
            this.src = `https://placehold.co/${this.width || 400}x${this.height || 300}/cccccc/969696?text=Imagen+No+Disponible`;
            this.alt = "Imagen no disponible"; // Actualiza el alt text también
            console.warn(`Error al cargar imagen: ${this.src}. Reemplazada por placeholder.`);
        };
    });

    // Pequeño ajuste para el iframe del mapa si decides usarlo directamente.
    // Actualmente está comentado en el HTML y reemplazado por un div.
    // Si usas el iframe directamente, asegúrate que la URL sea correcta y accesible.
    // const mapFrame = document.querySelector('iframe[src*="googleusercontent.com/maps"]');
    // if (mapFrame) {
    //     // Podrías añadir aquí lógica para cargarlo de forma diferida o manejar errores.
    // }
});


document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('.scroll-link');
  const offsetPixels = 50; // Define la cantidad de píxeles a desplazar hacia abajo

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del div sin el '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - offsetPixels;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Opcional: para un desplazamiento suave
        });
      }
    });
  });
});