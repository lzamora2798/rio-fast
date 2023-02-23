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
    name: "Fast Rio",
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
        { name: "Contactanos", route: "#" },
      ],
    },
    {
      name: "Normas y Regulaciones",
      items: [
        {
          name: "Norma de Calidad de Servicios de Valor Agregado de Internet",
          href: "#",
        },
        {
          name: "Guía de Seguridad y Control de Internet",
          href: "#",
        },
        {
          name: "Normal de Calidad SVA",
          href: "#",
        },
      ],
    },
    {
      name: "Enlaces Gubernamentales",
      items: [{ name: "arcotel", href: "https://www.arcotel.gob.ec/" }],
    },
    {
      name: "Leyes",
      items: [
        {
          name: "LEY ORGÁNICA DE LAS PERSONAS ADULTAS MAYORES (LOPAM)",
          href: "#",
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
