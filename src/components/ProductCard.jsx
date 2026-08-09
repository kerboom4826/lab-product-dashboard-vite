import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const cardClassName = product.inStock
    ? styles.card
    : `${styles.card} ${styles.outOfStockCard} outOfStockClass`;

  return (
    <Box className={cardClassName} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 3, borderRadius: 2 }}>
      <Box className={cardClassName}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">Price: {product.price}</Typography>
        <Typography variant="body2" color={product.inStock ? 'success.main' : 'error.main'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </Box>

      <Button variant="outlined" color="error" onClick={() => onRemove(product.id)}>
        Remove
      </Button>
    </Box>
  );
};

export default ProductCard;
