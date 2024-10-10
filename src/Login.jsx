import React, { useState } from 'react';
import Mensaje from './Mensaje';

const usuarios = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
  },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContraseñaChange = (e) => setContraseña(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();


    const usuarioValido = usuarios.find((usuario) => usuario.email === email);

    if (usuarioValido && usuarioValido.username === contraseña) {
      setMensaje(`Bienvenido, ${usuarioValido.name}!`);
    } else {
      setMensaje('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="contraseña">Contraseña (Username):</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={handleContraseñaChange}
          required
        />

        <button type="submit">Iniciar sesión</button>
      </form>

      {mensaje && <Mensaje mensaje={mensaje} />}
    </div>
  );
};

export default Login;
