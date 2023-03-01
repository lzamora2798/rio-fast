// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/favicon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Rio Fast",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
  ],
  menus: [
    {
      name: "Empresa",
      items: [
        { name: "Inicio", route: "/home" },
        { name: "Servicios", route: "/servicios" },
        { name: "Quienes Somos", route: "/quienes-somos" },
        { name: "Contactanos", route: "/contacto" },
      ],
    },
    {
      name: "Informacion Adicional",
      items: [
        {
          name: "Contrato de servicios",
          href: `${window.location.origin}/Contrato.pdf`,
        },
        {
          name: "Guía de Seguridad y Control de Internet",
          href: `${window.location.origin}/CONSEJOS-DE-SEGURIDAD-DE-INTERNET.pdf`,
        },
        {
          name: "Reglamentos Abonados",
          href: `${window.location.origin}/reglamentos-abonados.pdf`,
        },
        {
          name: "Ley Organica de Telecomunicaciones",
          href: `${window.location.origin}/ley_organica_de_telecomunicaciones.pdf`,
        },
      ],
    },
    {
      name: "Enlaces Gubernamentales",
      items: [
        {
          name: "Arcotel",
          href: "https://www.arcotel.gob.ec/",
        },
        {
          name: "Mintel",
          href: "https://www.telecomunicaciones.gob.ec/",
        },
        {
          name: "Presidencia de la republica",
          href: "https://www.presidencia.gob.ec/",
        },
      ],
    },
    {
      name: "Leyes",
      items: [
        {
          name: "LEY ORGÁNICA DE LAS PERSONAS ADULTAS MAYORES (LOPAM)",
          href: `${window.location.origin}/LEY-ORGANICA-DE-LAS-PERSONAS-ADULTAS-MAYORES.pdf`,
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados. Copyright &copy; {date}
    </MKTypography>
  ),
};
