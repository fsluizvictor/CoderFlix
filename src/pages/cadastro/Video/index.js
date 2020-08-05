import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';

import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=FtW7MYvcy68',
    categoria: 'Complexidade de Algoritmos',
  });

  return (
    <PageDefault>
      <h1>
        Página de Cadastro de Vídeo
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        videoRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 2,
        })
          .then(() => {
            console.log('cadastrou');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url do Vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
