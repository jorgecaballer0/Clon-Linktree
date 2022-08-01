import './App.css';

function App() {
  return (
    <div className='main-container-app'>
      <h1>
      Bienvenido a Tree Link
      </h1>
      <h4>
      Esta es una aplicación desarrollada con React para compartir tus links entre usuarios en un solo lugar.
      </h4>
      <h4>
      Basado en el sitio web <a href="https://linktr.ee/">Linktr</a>
      </h4>
      <p>
        Para empezar, debes iniciar sesión o crear una cuenta con Google.
      </p>

      <div className='login-container'>
        <button className='btn-home'>
          <a href='/login'>Comenzar</a>
        </button>
      </div>
    </div>
  );
}

export default App;
