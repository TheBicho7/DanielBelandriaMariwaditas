const productos = [
{
    id: 1 , 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3W4vKhQQ_I4PlKsrKXM5wljQIEV_5eXaKw&usqp=CAU",
    title: "Rolling Papers OCB",
    price: 5000,
    Category: "Rolling Papers" ,
    stock: 100, 
    detail: "rolling paper de combustion lenta"
},
{
    id: 2,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrLVQe1DD__pTC24SXmUHV9sIrirEyMuZbA&usqp=CAU" ,
    title: "Rolling Papers Lion Circus",
    price: 5000,
    Category: "Rolling Papers" ,
    stock: 100, 
    detail: "rolling paper de combustion lenta"
},
{
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLbC2AAZX5TUkv5c-HQ15LkYkvJ8zfyQi1A&usqp=CAU",
    title: "Maquina para Enrollar",
    price: 15000,
    Category: "Herramientas" ,
    stock: 100, 
    detail: "Maquina para Enrollar cinta de fibra"
},
{
    id: 4,
    img: "data:image/jpeg;base64,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",
    title: "Destilado de THC",
    price: 80000 ,
    Category: "Destilados" ,
    stock: 100, 
    detail: "Destilado de Flor Gorilla Glue"
}
];

export function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos), 2000);
    });
  }

  export function getOneProduct(idParams) {
    return new Promise((resolve) => {

      let productoReq = productos.find((item) => {
        return item.id === Number(idParams);
      });
      setTimeout(() => resolve(productoReq), 1500);
    });
  }

  export function getProductsByCategory(idCategoryParams) {
    return new Promise((resolve) => {
      let arrayFilterProductos = productos.filter(
        (item) => item.Category === idCategoryParams
      );
      setTimeout(() => resolve(arrayFilterProductos), 1500);
    });
  }