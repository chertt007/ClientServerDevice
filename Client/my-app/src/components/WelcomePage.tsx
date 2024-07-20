// src/components/WelcomePage.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Импортируем стили для карусели
import styled from "styled-components";

const CarouselContainer = styled(Box)`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  .carousel .slide img {
    width: 100%;
    height: auto;
  }

  .carousel .legend {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const WelcomePage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      padding={2}
    >
      <Typography variant="h3" gutterBottom>
        Добро пожаловать в Компанию
      </Typography>
      <Typography variant="h6" paragraph>
        Мы рады приветствовать вас! Пожалуйста, войдите или зарегистрируйтесь, чтобы продолжить.
      </Typography>
      <CarouselContainer mt={4}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} dynamicHeight>
          <div>
            <img src="/images/irregataion1-petP.png" alt="Автополив 1" />
            <p className="legend">Система автополива 1</p>
          </div>
          <div>
            <img src="/images/irregation-petP.png" alt="Автополив 2" />
            <p className="legend">Система автополива 2</p>
          </div>
        </Carousel>
      </CarouselContainer>
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/login" sx={{ m: 1 }}>
          Войти
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/register" sx={{ m: 1 }}>
          Регистрация
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
