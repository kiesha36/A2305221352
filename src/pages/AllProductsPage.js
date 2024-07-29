
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import ProductList from '../components/ProductList';

    const AllProductsPage = () => {
        const [products, setProducts] = useState([]);
        const [filters, setFilters] = useState({
            category: '',
            company: '',
            rating: '',
            priceRange: [0, 1000],
            availability: '',
        });

        useEffect(() => {
            axios.get('http://20.244.56.144/test/products')
                .then(response => {
                    const productsWithId = response.data.map(product => ({
                        ...product,
                        id: `${product.company}-${product.category}-${product.name}`.replace(/\s+/g, '-').toLowerCase(),
                    }));
                    setProducts(productsWithId);
                })
                .catch(error => {
                    console.error('There was an error fetching the products!', error);
                });
        }, []);

        const filteredProducts = products.filter(product => {
            // Add filtering logic based on filters state
            return true;
        });

        return (
            <div>
                <h1>All Products</h1>
                <ProductList products={filteredProducts} />
            </div>
        );
    };

    export default AllProductsPage;