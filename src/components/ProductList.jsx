import React from 'react';
import { Stack, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <Typography variant="body1">No products available.</Typography>;
  }

  return (
    <Stack spacing={2}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </Stack>
  );
};

export default ProductList;
