export default function CardProyectosDestacados({ proyectos }) {
  console.log(proyectos);
  return (
    <>
      <div className="container mx-auto">
        <main>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.titulo}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h2 className="text-xl font-bold">{proyecto.titulo}</h2>
                <p className="text-gray-700">{proyecto.categoria}</p>
                {/* ... resto de los detalles del proyecto */}
              </div>
            ))}
          </section>
          {/* Otras secciones */}
        </main>
      </div>
    </>
  );
}
