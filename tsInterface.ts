interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

function calculateTotal(products: Product[]): number {
    return products.reduce((sum, product) => sum + product.price, 0);
}

// Get first element of any array
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Some test data to see the test the output of the function and see if the program works well
const sampleProducts: Product[] = [
    { id: 1, name: 'Widget', price: 9.99, description: 'Small widget' },
<<<<<<< add-readme
    { id: 2, name: 'Gadget', price: 19.94 },
=======
    { id: 2, name: 'Gadget', price: 19.90 },
>>>>>>> main
    { id: 3, name: 'Thingamajig', price: 4.50, description: 'Useful item' },
];

const total = calculateTotal(sampleProducts);
console.log(getFirstElement(sampleProducts)?.name);