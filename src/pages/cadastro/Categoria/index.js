import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

  const initialsValues = {
    name: 'Categoria Inicial',
    description: 'Descrição Inicial',
    color: '#000'
  }

  const [category, setCategory] = useState(['Teste'])
  const [value, setValue] = useState(initialsValues)

  return (
    <PageDefault>
      <h1>Cadastro de Category: {value.nome}</h1>

      <form onSubmit={function handleSubmit() {
        setCategory([
          ...category,
          value
        ])
      }}>

        <div>
          <label>
            Nome da Category:
          <input
              type="text"
              value={value.name}
              onChange={() => {
                setCategory([
                  ...category,
                  value
                ])
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={value.description}
              onChange={() => {
                setCategory([
                  ...category,
                  value
                ])
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={value.color}
              onChange={() => {
                setCategory([
                  ...category,
                  value
                ])
              }}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {category.map((category, indice) => {
          return (
            <li key={`${category}${indice}`} >
              {category}
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