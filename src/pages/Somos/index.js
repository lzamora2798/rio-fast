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

function Somos() {
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
          mt={-1}
          mb={1}
          px={{ xs: 6, lg: 12 }}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Quienes Somos?{" "}
        </MKTypography>
        <MKTypography
          variant="h2"
          color="black"
          mt={10}
          mb={1}
          px={{ xs: 6, lg: 12 }}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Misión{" "}
        </MKTypography>
        <MKTypography
          variant="text"
          color="black"
          mt={1}
          mb={1}
          px={{ xs: 6, lg: 12 }}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["1l"],
            },
          })}
        >
          {
            "Proporcionar un servicio de calidad de acceso a internet, apoyados en: una constante innovación, tecnología avanzada, con conectividad eficiente y a aprecios accesibles. "
          }
        </MKTypography>
        <MKTypography
          variant="h2"
          color="black"
          mt={10}
          mb={1}
          px={{ xs: 6, lg: 12 }}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Visión{" "}
        </MKTypography>
        <MKTypography
          variant="text"
          color="black"
          mt={1}
          mb={1}
          px={{ xs: 6, lg: 12 }}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["1l"],
            },
          })}
        >
          {
            "Ser la mejor empresa de acceso a internet, con innovación, servicio y dedicación a sus clientes. "
          }
        </MKTypography>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Somos;
