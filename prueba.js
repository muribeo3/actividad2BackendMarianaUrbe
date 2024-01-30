const ProductManager = require('./ProductManager');

// Ruta del archivo de productos
const filePath = 'productos_prueba.json';

// Crear una instancia de ProductManager
const productManager = new ProductManager(filePath);

//Obtener productos(debería ser un arreglo vacío[])
const initialProducts = productManager.getProducts();
console.log('Productos iniciales:', initialProducts);

// // Agregar un producto de prueba
// productManager.addProduct({
//     title: 'producto prueba',
//     description: 'Este es un producto prueba',
//     price: 200,
//     thumbnail: 'Sin imagen',
//     code: 'abc123',
//     stock: 25
// });

// // Obtener productos después de agregar uno
// const productsAfterAdd = productManager.getProducts();
// console.log('Productos después de agregar uno:', productsAfterAdd);

// Obtener y mostrar el producto recién agregado por ID
// const productIdToFind = 1;
// const foundProduct = productManager.getProductById(productIdToFind);
// console.log('Producto encontrado por ID:', foundProduct);

// // Actualizar un campo del producto
// const updatedProductData = {
//     price: 250,
//     description: 'Descripción actualizada'
// };
// productManager.updateProduct(productIdToFind, updatedProductData);

// // Obtener y mostrar el producto después de la actualización
// const productAfterUpdate = productManager.getProductById(productIdToFind);
// console.log('Producto después de la actualización:', productAfterUpdate);

// // Eliminar el producto
// productManager.deleteProduct(productIdToFind);

// // Obtener y mostrar los productos después de la eliminación
// const productsAfterDelete = productManager.getProducts();
// console.log('Productos después de la eliminación:', productsAfterDelete);