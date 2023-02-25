// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// import Download from "pages/Home/sections/Download";
import Planes from "pages/Home/sections/Planes";
import coop from "assets/images/coop.png";
import basico from "assets/images/basico.png";
import home from "assets/images/home.png";
import smart from "assets/images/smart.png";

// Routes
import newroutes from "newRoutes";
import footerRoutes from "footer.routes";

// Images

function Servicios() {
  return (
    <>
      <DefaultNavbar
        routes={newroutes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox minHeight="20vh" width="100%">
        <Container>
          <Grid container item xs={12} lg={12} justifyContent="center" display="flex" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {" "}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Planes
          bgImage={basico}
          title="Plan Básico"
          description="Este plan de internet es dedicado para las personas con necesidades básicas de conexión, que desean ver videos,  películas, escuchar música , chatear y demás actividades de ocio. Su capacidad de 12mbps con compartición de 1:1 simétrica a través de fibra de vidrio permite a los usuarios disfrutar de un internet sin interrupciones."
        />
        <Planes
          bgImage={home}
          title="Plan Home"
          description="Este plan de internet es dedicado para las familias con necesidades de conexión, que desean utilizar el internet en diferentes dispositivos simultáneamente, Su capacidad de 20mbps con compartición de 1:1 simétrica a través de fibra de vidrio permite a los usuarios disfrutar de un internet sin interrupciones. "
        />
        <Planes
          bgImage={smart}
          title="Plan Smart"
          description="Este plan de internet es dedicado para las familias con necesidades de conexión, que desean utilizar el internet en su máxima capacidad, como juegos en línea o reuniones online de estudio o trabajo. Su capacidad de 30mbps con compartición de 1:1 simétrica a través de fibra de vidrio permite a los usuarios disfrutar de un internet sin interrupciones."
        />
        <Planes
          bgImage={coop}
          title="Plan Coorporativo"
          description="Este plan de internet es dedicado para pequeñas o medianas empresas, que desean utilizar el internet con en su máxima capacidad, para descargar constantemente documentos, subirlos de regreso a la web, envió de correos pesados y uso en varios dispositivos. Su capacidad de 50mbps con compartición de 1:1 simétrica a través de fibra de vidrio permite a los usuarios disfrutar de un internet sin interrupciones."
        />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Servicios;
