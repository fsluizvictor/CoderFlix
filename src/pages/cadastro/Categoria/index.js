import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const initialsValues = {
    name: '',
    description: '',
    color: ''
  }

  const [category, setCategory] = useState([])
  const [values, setValues] = useState(initialsValues)

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(element) {
    setValue(
      element.target.getAttribute('name'),
      element.target.value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(element) {
        element.preventDefault()
        setCategory([
          ...category,
          values
        ])

        setValues(initialsValues)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="submit"
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

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {category.map((category, indice) => {
          return (
            <li key={`${category}${indice}`} >
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault >
  )
}

export default CadastroCategoria;