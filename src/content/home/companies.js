/**
 * Para agregar una nueva compañía:
 * 1. Añade un nuevo objeto al array `partners`.
 * 2. Si tienes el logo SVG o PNG, coloca el path en `logoSrc`.
 * 3. El componente lo renderizará automáticamente sin modificar el código.
 */
export const companiesContent = {
  title: "Trabajamos con compañías líderes en Estados Unidos",
  description:
    "Te ayudamos a comparar opciones para encontrar la cobertura que mejor se adapte a tus necesidades.",
  partners: [
    {
      id: "ambetter",
      name: "Ambetter",
      logoSrc: null,          // TODO: "/logos/ambetter.svg"
      initials: "AMB"
    },
    {
      id: "florida-blue",
      name: "Florida Blue",
      logoSrc: null,
      initials: "FLB"
    },
    {
      id: "oscar",
      name: "Oscar Health",
      logoSrc: null,
      initials: "OSC"
    },
    {
      id: "aetna",
      name: "Aetna",
      logoSrc: null,
      initials: "AET"
    },
    {
      id: "cigna",
      name: "Cigna",
      logoSrc: null,
      initials: "CIG"
    },
    {
      id: "united",
      name: "UnitedHealth",
      logoSrc: null,
      initials: "UHC"
    },
    {
      id: "molina",
      name: "Molina Healthcare",
      logoSrc: null,
      initials: "MOL"
    },
    {
      id: "humana",
      name: "Humana",
      logoSrc: null,
      initials: "HUM"
    },
    {
      id: "centene",
      name: "Centene",
      logoSrc: null,
      initials: "CEN"
    },
    {
      id: "anthem",
      name: "Anthem (BCBS)",
      logoSrc: null,
      initials: "BCB"
    }
  ]
};
