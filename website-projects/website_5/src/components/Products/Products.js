import React from 'react';

import { ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from "./ProductElements";

const Products = (props) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{props.heading}</ProductsHeading>
      <ProductWrapper>
        {props.data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt}/>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products