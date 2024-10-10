export default function UsuarioEdit() {
  return (
    <>
      <div className="mt-4">
        {/* Aquí irá la lógica para mostrar múltiples proyectos */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <input
            type="text"
            placeholder="&nbsp;Título del Proyecto"
            className="outline-none mb-6 border border-gray-500 rounded-[7px]"
          />
          <textarea
            className="w-full h-[20vh] text-gray-500 resize-none outline-none border border-gray-500 rounded-[7px]"
            placeholder="&nbsp;Descripción del proyecto"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Editar Proyecto
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Añadir Proyecto
          </button>
        </div>
      </div>
    </>
  );
}
