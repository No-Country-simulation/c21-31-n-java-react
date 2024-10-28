import Nav from "@/components/nav";

export default function EditPublicaciones() {
  return (
    <>
      <Nav></Nav>
      <div className="mt-20 p-4">
        <div className="flex w-[75%] m-auto bg-gray-100 p-2 rounded-lg shadow-md container-edit-project">
          <div className="w-[75%] contianer-1-edit-project">
            <h1 className="mt-4 mb-4 text-xl font-bold">Editar Publicaciones</h1>
            <div className="flex flex-col w-[50%] gap-4 mb-4 sub-container-1">
              <label htmlFor="">Titulo actual de la Publicación </label>
              <input
                type="text"
                placeholder="&nbsp;Título de la Publicación"
                className="w-[75%] h-[35px] rounded-lg outline-none border border-zinc-300 inputs"
              />

              <textarea
                type="text"
                placeholder="&nbsp;Descripción de la Publicación"
                className="w-[75%] h-[85px] rounded-lg outline-none border border-zinc-300 resize-none inputs"
              />
            </div>
          </div>
          <div className="flex flex-col relative">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Imagen preview Proyecto"
              className="rounded-lg"
            />
            <div className="w-full flex justify-end mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300">
                Confirmar edición
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
