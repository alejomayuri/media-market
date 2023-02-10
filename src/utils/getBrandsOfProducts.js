const getBrandsOfProducts = (products, field) => {
    const getBrandOfProducts = products.map((product) => {
        return product[field];
    });
    const uniqueBrands = [...new Set(getBrandOfProducts)];
    return uniqueBrands;
}

export default getBrandsOfProducts;