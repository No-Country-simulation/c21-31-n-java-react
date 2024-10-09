"use client";

import Nav from "@/components/nav";
import { useUserStore } from "@/store"; // Importa el store para obtener el usuario
import "./user.css";

export default function Usuario() {
  const user = useUserStore((state) => state.user); // Obtén el usuario del store

  return (
    <>
      <Nav></Nav>
      <div className="container-info-user">
        <a href="" className="icon icon-edit">
          <svg
            width="25px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div className="container-img">
          <img
            src={user?.image || "/default-user.png"}
            alt="Imagen usuario"
            className="w-20 h-20 rounded-full"
          />
          {/* <a href="" className="icon icon-edit-image">
            <svg
              width="25px"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a> */}
        </div>
        <div className="container-names-user">
          <div className="container-name-user">
            <h1 className="name-user">{user?.name || "Nombre del Usuario"}</h1>
          </div>
          <div className="container-apodo-user">
            <h2 className="apodo-user">
              {user?.nickname || "Apodo del Usuario"}
            </h2>
          </div>
          <div className="container-description-user">
            <p className="texto-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              ullam, vero quidem eos ad eveniet dolor qui cupiditate modi sunt
              at consectetur quisquam veniam fuga illo, eaque eum. Laudantium,
              debitis!
            </p>
          </div>
        </div>
      </div>

      <div className="container-sobre-mi">
        <a href="" className="icon icon-edit">
          <svg
            width="25px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div className="container-title-sobre-mi">
          <h1 className="title-sobre-mi">Sobre Mi</h1>
        </div>
        <div className="container-info-sobre-mi">
          <p className="texto-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam,
            vero quidem eos ad eveniet dolor qui cupiditate modi sunt at
            consectetur quisquam veniam fuga illo, eaque eum. Laudantium,
            debitis! <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vero
            dignissimos eos rerum repudiandae dolorum ullam eaque aliquid
            veritatis quas nesciunt, a officia natus omnis quae qui quisquam.
            Et, tempore!
          </p>
        </div>
      </div>

      <div className="container-proyectos">
        <a href="" className="icon icon-edit">
          <svg
            width="25px"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <h1 className="title-proyectos">Proyectos</h1>
        <h2 className="title-proyecto">Titulo del Proyecto</h2>
        <div className="container-info-project">
          <div className="container-img-project">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Preview Proyecto"
              className="img-preview-proyecto"
            />
          </div>
          <div className="container-description-project">
            <p className="texto-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              ullam, vero quidem eos ad eveniet dolor qui cupiditate modi sunt
              at consectetur quisquam veniam fuga illo, eaque eum. Laudantium,
              debitis! <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vero
              dignissimos eos rerum repudiandae dolorum ullam eaque aliquid
              veritatis quas nesciunt, a officia natus omnis quae qui quisquam.
              Et, tempore! <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vero
              dignissimos eos rerum repudiandae dolorum ullam eaque aliquid
              veritatis quas nesciunt, a officia natus omnis quae qui quisquam.
              Et, tempore! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Cum vero dignissimos eos rerum repudiandae dolorum ullam
              eaque aliquid veritatis quas nesciunt, a officia natus omnis quae
              qui quisquam. Et, tempore! <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vero
              dignissimos eos rerum repudiandae dolorum ullam eaque aliquid
              veritatis quas nesciunt, a officia natus omnis quae qui quisquam.
              Et, tempore!
            </p>
          </div>
        </div>
        <div className="container-button-add-project">
          <a href="">
            <button className="button-add-project">Añadir Proyecto</button>
          </a>
        </div>
      </div>
    </>
  );
}
