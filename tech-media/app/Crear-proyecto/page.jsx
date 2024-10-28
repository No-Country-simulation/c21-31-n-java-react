import Nav from "@/components/nav";

export default function CrearProyecto() {
  return (
    <>
      <Nav></Nav>
      {/* <h1>Crear Publicación</h1> */}

      <div className="w-[65%] h-[360px] flex flex-col justify-top items-center mt-2 bg-gray-200 m-auto p-1 rounded-[10px] container-general-create-publi mt-20">
        <h1 className="w-full text-xl font-bold text-left mt-2 ml-2">
          Publicar Proyecto
        </h1>
        <div className="w-full flex justify-around items-center p-4 container-superior-publi">
          <div className="w-full flex flex-col justify-center items-center gap-1 mt-4 container-content-publi">
            <div className="flex w-full mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center mr-4 text-lg text-white">
                E
              </div>
              <h2>Ezequiel Ramos Lencina</h2>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Título del Proyecto"
                className="w-[75%] h-[100%] p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="w-full mb-2">
              <textarea
                type="text"
                placeholder="Descripción"
                className="w-[75%] h-[100%] p-2 border rounded-[7px] resize-none outline-none textarea-publi"
              />
            </div>
          </div>
          <div>
            <img src="https://via.placeholder.com/400x200" alt="" />
          </div>
        </div>
        <div className="w-full flex justify-end gap-4">
          <svg
            width="30px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.27209 20.7279L10.8686 14.1314C11.2646 13.7354 11.4627 13.5373 11.691 13.4632C11.8918 13.3979 12.1082 13.3979 12.309 13.4632C12.5373 13.5373 12.7354 13.7354 13.1314 14.1314L19.6839 20.6839M14 15L16.8686 12.1314C17.2646 11.7354 17.4627 11.5373 17.691 11.4632C17.8918 11.3979 18.1082 11.3979 18.309 11.4632C18.5373 11.5373 18.7354 11.7354 19.1314 12.1314L22 15M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="30px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.7625 21.9653 4.71225 19.9151C2.662 17.8648 2.662 14.5407 4.71225 12.4904L13.7279 3.47483C15.0947 2.108 17.3108 2.108 18.6776 3.47483C20.0444 4.84167 20.0444 7.05775 18.6776 8.42458L10.0156 17.0866C9.33213 17.7701 8.22409 17.7701 7.54068 17.0866C6.85726 16.4032 6.85726 15.2952 7.54068 14.6118L15.1421 7.01037"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="30px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="w-full text-end">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-3 mb-2">
            Publicar
          </button>
        </div>
      </div>
    </>
  );
}
