let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregar producto
function agregarAlCarrito(id, nombre, precio) {
  const producto = carrito.find(p => p.id === id);
  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-lista");
  if (!contenedor) return;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-gray-500'>El carrito está vacío.</p>";
    return;
  }

  let html = "<ul class='divide-y'>";
  let total = 0;
  carrito.forEach((p, index) => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;
    html += `
      <li class="flex justify-between items-center py-2">
        <span>${p.nombre} (x${p.cantidad})</span>
        <span>S/. ${subtotal.toFixed(2)}</span>
        <button onclick="eliminarDelCarrito(${index})" class="text-red-600 hover:underline">Eliminar</button>
      </li>
    `;
  });
  html += `</ul><p class="mt-4 font-bold">Total: S/. ${total.toFixed(2)}</p>`;
  contenedor.innerHTML = html;
}

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Mostrar al cargar
document.addEventListener("DOMContentLoaded", mostrarCarrito);
