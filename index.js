
class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct(title, description,price, thumbnail,stock, code) {
               if (title && description && price && thumbnail && stock & code) {
            const existingCode = this.products.map(p => p.code).includes(code);
            if (existingCode) {
                console.log('Visible code')
            } else {
                this.products.push({
                    id: this.products.lenght,
                    title: "test product",
                    description: "this is a test product",
                    price: 200,
                    thumbnail: "No image",
                    stock: 10,
                    code
                })
            }
        } else {
            console.log('ERROR: missing values')
        }

    }    

    getProductById(idProduct) {
        const product = this.products.find((prod) => prod.id === idProduct)   //mejor usar find() que map()   
        if(product){      
         console.log("PRODUCT FOUND!")      
         console.log(product)      
         return product      
        }else{      
         console.log("PRODUCT NOT FOUND!")      
         return []
      
        }
      
       }
    getProducts(){
        return this.products
    }

}

const productManager = new ProductManager()
productManager.addProduct('title', 'description', 'price', 'thumbnail', 'code', 'stock')
productManager.addProduct("producto prueba", "esto es un producto prueba", 200, "Sin imagen", "abc123", 25)
productManager.getProductById()
productManager.getProducts()