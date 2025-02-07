import React, { useState } from "react";

const imgBasePath = "img/";
const imgFront_pagePath = "img/caratulas/";

// Home component.
export const BackgroundHome = () => {
  const handleButtonClick = () => {
    const demoElement = document.querySelector('.grid-demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="home">
      <div className="logotipo">
        <img src={`${imgBasePath}Logotipo.png`} alt="Logo de la Unidad Planeación" />
      </div>

      <div className="ciudad">
        <img src={`${imgBasePath}ciudad.png`} alt="Logo de Biblioteca Digital de Planeación" />
      </div>

      <div className="homeText">
        <h2>Reconocimiento<span> a las Buenas Prácticas</span> de <span>Planeación Municipal</span></h2>
        <div className="container_home-button" onClick={handleButtonClick}>
          <button aria-label="Botón de desplazamiento hacia abajo" className="home-button scroll-down" onClick={handleButtonClick}>Proyectos Reconocidos</button>
        </div>
      </div>
    </section>
  );
};

// aboutUs component.
export const AboutUs = () => {
  return (
    <section className="AboutUs">
      <div className="AboutUsIMG wow animate__animated animate__backInUp">
        <img src="img/aboutUs.png" alt="Persona leyendo nube de palabras" loading="lazy" />
      </div>
      <div className="AboutUstxt">
        <h3 className="wow animate__animated animate__fadeInRight">¡Descubre y difunde las mejores prácticas en Planeación Municipal!</h3>
        <p className="wow animate__animated animate__fadeInRight">¡Revive los logros que han transformado nuestro estado! Explora las experiencias que han impulsado el desarrollo en los municipios de Hidalgo.<span> ¿Qué son las buenas prácticas de Planeación Municipal?</span>  Son acciones que han llevado a cabo nuestras administraciones públicas locales, enfocadas en la Planeación Democrática, Desarrollo Regional y Metropolitano, Planeación del Territorio, Objetivos del Desarrollo Sostenible y Evaluación. ¡Descubre cómo se plantean estas prácticas para mejorar nuestra calidad de vida!</p>
      </div>
    </section>
  );
};





// seccionBar component.
export function SeccionBar() {
  return (
    <div className="seccion-bar">
      <img src="img/fondoSecc.jpg" alt="Persona leyendo nube de palabras" loading="lazy" />
    </div>
  );
}

// Demo component.
export const Demo = ({ children }) => (
  <section className="grid-demo">
    {children}
  </section>
);
// Documents component.
export const Documents = ({ children }) => (
  <div className="documents">
    <div className="containerSubTiDoc wow animate__animated animate__zoomIn">
      <h2 className="subtitulo">PROYECTOS</h2>
    </div>
    {children}
  </div>
);

// Button component.
export const CenteredButton = ({ link, text }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="button-container">
      <button className="centered-button" onClick={handleClick}>{text}</button>
    </div>
  );
};


// Filter selection component.
export const Select = ({ values, onChange, icon }) => (

  <div className={"control"}>
    <div className="control-icon">
      <i className="material-icons">{icon}</i>
    </div>
    <div className="select-arrow">
      <i className="material-icons">&#xE313;</i>
    </div>
    <select className="control-field form-control" onChange={onChange} defaultValue={values[0]} name="Filtro">
      {values.map(value => (
        <option key={value} value={value.toLowerCase()}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

// Input component.
export const Input = ({ onKeyUp }) => (
  <div className={"control"}>
    <div className="control-icon">
      <i className="material-icons">&#xE8B6;</i>
    </div>
    <input
      className={"control-field search-field form-control"}
      onKeyUp={onKeyUp}
      type="text"
      placeholder={"Buscar..."}
      name="Buscador de documentos"
    />
  </div>
);


// Tooltip component
const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

// Modal component
const Modal = ({ children, isOpen, onClose, booksData }) => {
  if (!isOpen) {
    return null;
  }
  const { municipio, name, año, description, ftSrc, peSrc } = booksData;

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-closed'}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <img src={imgSrc} alt={`Imagen de ${name}`} /> */}
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Año de Convocatoria: {año}</p>
        <p>Municipio: {municipio.join(', ')}</p>
        <div className="containerDownload">
          <a href={ftSrc} download target="_blank" className="cta">
            <span>Ficha técnica
            </span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
          <a href={peSrc} download target="_blank" className="cta">
            <span>Presentación ejecutiva</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <div className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
};


// Card content.
export const CardContent = React.memo(
  ({ municipio, name, año, description, ftSrc, peSrc }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const truncatedName = name.length > 37 ? `${name.slice(0, 37)}...` : name;
    const booksData = {
      municipio, name, año, description, ftSrc, peSrc
    };

    return (
      <>
        <div className="book-card-container" onClick={() => setIsModalOpen(true)}>
          <div className="book-card">
            <Tooltip text={name}>
              <div className="book-card__image">
                <img src={`${imgFront_pagePath}${municipio[0]}.jpg`} alt={`Imagen de ${name}`} />
              </div>
              <h3 className="book-card__name">
                <span>{truncatedName}</span>
              </h3>
            </Tooltip>

            <span className="book-card__year">
              <span>{año}</span>
              <svg className="right">
                <use xlinkHref="#icon-rounded-slim-tri-bottom-right">
                  <svg
                    id="icon-rounded-slim-tri-bottom-right"
                    viewBox="0 0 32 32"
                  >
                    <title>rounded-slim-tri-bottom-right</title>
                    <path
                      className="path1"
                      d="M13.472 2.944l-9.312 26.016c-0.64 1.824-2.368 3.040-4.32 3.040v-32.096h17.92c-1.92 0-3.648 1.216-4.288 3.040z"
                    />
                  </svg>
                </use>
              </svg>
              <svg className="left">
                <use xlinkHref="#icon-rounded-slim-tri-bottom-left">
                  <svg id="icon-rounded-slim-tri-bottom-left" viewBox="0 0 32 32">
                    <title>rounded-slim-tri-bottom-left</title>
                    <path
                      className="path1"
                      d="M18.56 2.848l9.312 26.080c0.64 1.824 2.4 3.040 4.32 3.040v-32.192h-17.984c1.952 0.032 3.68 1.248 4.352 3.072z"
                    />
                  </svg>
                </use>
              </svg>


            </span>

          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} booksData={booksData} />
      </>
    );
  }
);

// Switch component.
export const Switch = React.forwardRef(({ children }, ref) => (
  <div className="container">
    <div className="screenframe">
      <div className="screen" ref={ref}>
        {children}
      </div>
    </div>
  </div>
));


// Foouter component.
export const Foouter = ({ children }) => (
  <section className="foouter"
    style={{ backgroundImage: `url(img/foouter.webp)`, }}>
    <div className="foouterLogo">
      <img src="img/LogotipoBlanco.webp" alt="Logo de la Unidad Planeación en blanco" />
    </div>
    <div className="fooutertxt">
      <div className="foouterBar"></div>
      <h1>Reconocimiento a las Buenas<span>Prácticas de Planeación Municipal</span></h1>
      <div className="foouterInfo">
        <h2>Unidad de Planeación y Prospectiva</h2>
        <div className="foouterUbicacion">
          <img src="img/ubicacion.webp" alt="Icono de ubicación" />
          <p>Plaza Juárez S/N Col. Centro <span>Pachuca de Soto, Hidalgo, México.</span></p>
        </div>
      </div>
    </div>
    {children}
  </section>
);