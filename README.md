comandos de git
git init: inicia el proyecto git
git add añadir archivos al proyecto git
git status checkea que archivos estan en el proyecto
git config user.email "correo aquí"
git config user.name "nombre aquí"
git commit -m "Nombre de version"
git branch -M main 
git branch -M "subrama"
git remote add origin "Link de github"
git push -u origin main
git push -u origin "subrama"

// script.js
function toggleModoOscuro() {
  document.body.classList.toggle('modo-oscuro');
}

Estilos
/* Estilos generales */
body {
    background-color: white;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Modo oscuro */
body.modo-oscuro {
    background-color: gray;
    color: white;
}

/* Estilo del encabezado */
header {
    text-align: center;
    padding: 20px;
    background-color: #222;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.1);
}

/* Navegación */
nav ul {
    list-style: none;
    padding: 0;
    text-align: center;
    background-color: #333;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
}

nav ul li {
    margin: 10px;
}

nav ul li a {
    color: #00ffcc;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #ffcc00;
}

/* Estilos para secciones */
section {
    margin: 20px;
    padding: 20px;
    background-color: #aaa;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.1);
}

section.modo-oscuro {
    background-color: #111;
}

/* Títulos */
h1, h2 {
    text-align: center;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);
}

/* Imágenes adaptables */
img {
    max-width: 100%;
    height: auto;
}

/* Responsividad: tabletas y móviles */
@media screen and (max-width: 768px) {
    h1 {
        font-size: 24px;
    }

    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin: 5px 0;
    }

    section {
        margin: 10px;
        padding: 15px;
    }
}