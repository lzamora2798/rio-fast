import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CallIcon from "@mui/icons-material/Call";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const newroutes = [
  {
    name: "Inicio",
    icon: <HomeIcon />,
    route: "/home",
  },
  {
    name: "Servicios",
    icon: <RssFeedIcon />,
    route: "/servicios",
  },
  {
    name: "Quienes Somos",
    icon: <GroupIcon />,
    route: "/quienes-somos",
  },
  {
    name: "Contactanos",
    icon: <CallIcon />,
    route: "/contacto",
  },
];

export default newroutes;
