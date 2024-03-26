import React from "react";
import { Container, Wrapper } from "../styles/productsStyles";
import Navbar from "../component/Navbar";

const Products = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        {/* <HeroSection />
        <ProductsSection />
        <FAQ />
        <Footer /> */}
      </Container>
    </Wrapper>
  );
};

export default Products;
