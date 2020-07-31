import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import dadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'


function Home() {
  return (
    <div >
      <Menu />


      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"cçlkasncçlakcnçalscknascçlkn"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

    </div>
  );
}

export default Home;
