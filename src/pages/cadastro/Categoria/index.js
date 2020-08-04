import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
  const initialsValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialsValues)

  const [category, setCategory] = useState([]);


  useEffect(() => {
    const URL = window.location.hostname.includes('https://coderflixdev.herokuapp.com/categorias')
      ? 'http://localhost:8080/categorias'
      : 'https://https://coderflixdev.herokuapp.com/categorias';

    fetch(URL).then(async (responseServer) => {
      const response = await responseServer.json();
      setCategory([
        ...response,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(element) {
        element.preventDefault();
        setCategory([
          ...category,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {category.length === 0 && (
        <div>
          Loading
        </div>
      )}

      <ul>
        {category.map((element) => (
          <li key={`${element.name}`}>
            {element.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
