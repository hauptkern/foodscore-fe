import { writable } from 'svelte/store';

const storedProducts = localStorage.getItem('scannedProducts');
const initialProducts = storedProducts ? JSON.parse(storedProducts) : [];

export const scannedProducts = writable(initialProducts);

scannedProducts.subscribe((products) => {
    localStorage.setItem('scannedProducts', JSON.stringify(products));
});