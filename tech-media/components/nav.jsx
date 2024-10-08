export default function Nav() {
  return (
    <nav className="w-full h-12 flex justify-between items-center p-2.5">
      <div className="container-logo">
        <h1>TechMedia</h1>
      </div>
      <div className="w-1/2 h-12 flex justify-around items-center">
        <a href="">Inicio</a>
        <a href="">Comunidad</a>
        <a href="">Conexiones</a>
        <a href="">Proyectos</a>
        <a href="">Recursos</a>
      </div>
      <div className="container-login">
        <button>
          <a href="/login">Log In</a>
        </button>
      </div>
    </nav>
  );
}
