
# React JS CoderHose - Chichilo 🍽️

Este es un proyecto realizado para el curso de React JS. Se trata de un ecommerce en el que podrás navegar por distintas categorías, buscar por producto, entrar al detalle del producto, añadir, eliminar, vaciar los mismos. Concretar y adquirir tu orden de compra de los productos que has seleccionado.

---
## Run Locally

* Clone el proyecto

```bash
  git clone https://github.com/NicolasRamosB/proyectoFinal_react_NicolasRamos.git
```

* Vaya al directorio

```bash
  cd my-app
```

* Instale dependencias

```bash
  npm install
```

* Inicie el server

```bash
  npm run start
```
---

## 🛠 Tecnologías Utilizadas
* [![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
* [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
* [![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
* [![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
* [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org/)

---
## ⚡ React Dependencias
Para que el proyecto se logre de una manera esperada utilicé las siguientes dependencias:



       ⚡ @react-icons/all-files: "^4.1.0",
       ⚡ @testing-library/jest-dom: "^5.16.4",
       ⚡ @testing-library/react: "^13.2.0",
       ⚡ @testing-library/user-event: "^13.5.0",
       ⚡ firebase: "^9.8.4",
       ⚡ react: "^18.2.0",
       ⚡ react-dom: "^18.2.0",
       ⚡ react-hook-form: "^7.33.1",
       ⚡ react-router-dom: "^6.3.0",
       ⚡ react-scripts: "5.0.1",
       ⚡ react-spinners: "^0.13.3",
       ⚡ react-transition-group: "^4.4.2",
       ⚡ reactstrap: "^9.1.1",
       ⚡ styled-components: "^5.3.5",
       ⚡ sweetalert2: "^11.4.23",
       ⚡ sweetalert2-react-content: "^5.0.1",
       ⚡ web-vitals: "^2.1.4"
    
### devDependencies: 
       ⚡ autoprefixer: "^10.4.7",
       ⚡ postcss: "^8.4.14",
       ⚡ react-icons: "^4.4.0",
       ⚡ tailwindcss: "^3.1.4"

--- 
    
## Funciones CartContext

* addToCart  => añade el producto al carrito. En el caso de que el producto ya esté en el carrito, esta función va a evitar que se genere otra línea de ItemCart, solo modificará la cantidad de dicho producto.

* getQuantity => esta función permite que cuando agregas productos al carrito se muestre la cantidad en el CartWidget.

* isInCart => reconoce si el producto está o no en el carrito.

* clearCart => esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

* removeItem => esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

* totalCost => esta función calcula el valor total de la compra.

---

## Firebase Database / Firestore

### Colección: Products. 
Cada producto tiene las siguientes características:

| Campo             | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| category | String | Categoria |
| description | String | Descripcion |
| img| String | Imagen |
| name | String | Nombre |
| pice | Number | Precio |
| stock | Number | Stock |
---
### Colección: Orders. 
Cada Orden tiene las siguientes características:

| Buyer           | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| email | String | Email|
| name | String | Nombre|
| phone | String | Telefono|
| date | Timestap | Date |


| Items            | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| id | String | id|
| category | String | Categoria |
| description | String | Descripcion |
| img| String | Imagen |
| name | String | Nombre |
| pice | Number | Precio |
| stock | Number | Stock |
| totalCost | Number | Total |

---
## 🔗 Links Personales

* [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicolas-ramos-161611219/)
* [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NicolasRamosB)

---

![Logo](https://i.ibb.co/rvMs37R/iconochichilo.jpg)

