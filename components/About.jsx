


const About = () => {
  return (
    <div
      id="about"
      className="font-globalFont max-w-xl  flex flex-col mt-4 p-5 pb-0 mx-auto justify-center items-center  text-gray-300"
    >
      <h1 className="text-2xl font-bold pb-8">ACERCA DE MI</h1>
      <div className="mt-5 ">
        <div className="flex flex-col   md:flex-row gap-4 ">
          <img
            src="https://cdn.create.vista.com/api/media/small/460532624/stock-photo-young-african-american-girl-smiling"
            alt="about"
            className="w-full h-70 md:w-40  object-cover  rounded-lg"
          />
          <div className="my-2">
            <p className="text-gray-400 text-base text-center md:text-left">
            Soy profesional en desarrollo web con  3 años de experiencia, me encargo de crear y mantener sitios web y aplicaciones web.
            </p>
            <br />
            <p className="text-gray-400 text-lg text-center md:text-left">
             Mi trabajo implica combinar habilidades de programación, diseño y comunicación para desarrollar soluciones en línea que sean visualmente atractivas, funcionales y eficientes.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-5 gap-2">
          <div className="shadow-lg bg-gray-800 p-10 rounded-lg text-center w-full md:w-1/3">
            <h1 className="text-xl font-bold ">Empresas</h1>
            <p className="text-gray-400 text-2xl font-semibold "> 2 </p>
          </div>
          <div className="shadow-lg bg-gray-800 p-10  rounded-lg text-center w-full md:w-1/3">
            <h1 className="text-xl font-bold">Experience</h1>
            <p className="text-gray-400 text-2xl font-semibold "> 3 año </p>
          </div>

          <div className="shadow-lg bg-gray-800 p-10  rounded-lg text-center w-full md:w-1/3">
            <h1 className="text-xl font-bold">Proyectos Completados</h1>
            <p className="text-gray-400 text-2xl font-semibold "> 10 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About