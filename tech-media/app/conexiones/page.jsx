import CardProyectosDestacados from "@/components/cardProyectosDestacados";
import Nav from "@/components/nav";

export default function Conexiones() {
  const proyectosDestacados = [
    {
      titulo: "ShoppySweet",
      categoria: "Marketing Digital",
      amigosEnComun: 3,
      tecnologias: ["HTML", "CSS", "JS", "JAVA", "POSTMAN"],
    },
  ];
  return (
    <>
	<Nav></Nav>
	<h1>Conexiones</h1>
      <CardProyectosDestacados proyectos={proyectosDestacados}></CardProyectosDestacados>
    </>
  );
}
