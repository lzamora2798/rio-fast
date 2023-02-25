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
// import bgImage from "assets/images/teleco.png";

// Routes
import newroutes from "newRoutes";
import footerRoutes from "footer.routes";
// import bgImage from "assets/images/teleco.png";

// Images

function Contacto() {
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
          mt: { xs: -4, lg: -8 },
          mb: 4,
          // backgroundImage: `url(${bgImage})`,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          opacity: 0.85,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography
          variant="h2"
          color="text"
          text
          mt={1}
          mb={1}
          px={{ xs: 6, lg: 12 }}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Contactanos{" "}
        </MKTypography>
        <Grid container spacing={2} pt={5}>
          <Grid item xs={12} lg={6}>
            <MKTypography
              variant="body1"
              color="black"
              text
              mt={1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1sm"],
                },
              })}
            >
              <strong> Telefono: </strong> 0996936415
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              text
              mt={1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1sm"],
                },
              })}
            >
              <strong> País: </strong> Ecuador
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              text
              mt={1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1sm"],
                },
              })}
            >
              <strong> Provincia: </strong> Chimborazo
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              text
              mt={1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1sm"],
                },
              })}
            >
              <strong> Ciudad: </strong> Riobamba
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              text
              mt={1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1sm"],
                },
              })}
            >
              <strong> Horario de atención : </strong> 9:00 am - 17:00 pm
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              text
              mt={1}
              mb={1}
              px={{ xs: 6, lg: 12 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1sm"],
                },
              })}
            >
              <strong> Direccción: </strong> César Dávila Andrade y Pedro Fermín Cevallos
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} position="relative" my={3}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63810.10581446967!2d-78.6930388329105!3d-1.6660812889721102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3a8255b072981%3A0xcb8509cd0a3fdf99!2sRiobamba!5e0!3m2!1sen!2sec!4v1677128102253!5m2!1sen!2sec"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="maps"
            />
          </Grid>
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Contacto;
