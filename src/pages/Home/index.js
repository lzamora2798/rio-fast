// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Home/sections/Counters";
// import Information from "pages/Home/sections/Information";
// import DesignBlocks from "pages/Home/sections/DesignBlocks";
// import Pages from "pages/Home/sections/Pages";
import Testimonials from "pages/Home/sections/Testimonials";
import Download from "pages/Home/sections/Download";

// // Presentation page components
// import BuiltByDevelopers from "pages/Home/components/BuiltByDevelopers";

// Routes
import newroutes from "newRoutes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/land.jpg";

function Home() {
  return (
    <>
      <DefaultNavbar
        routes={newroutes}
        action={{
          type: "internal",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          opacity: 0.85,
        }}
      >
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
              Fast Rio{" "}
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={12} justifyContent="center" display="flex" mx="auto">
            <MKTypography
              variant="body1"
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
              Internet en todos lados y para todos!
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
        <Counters />
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={12} sx={{ textAlign: { xs: "center", lg: "center" } }}>
              <MKTypography
                variant="h2"
                color="secondary"
                mt={-1}
                mb={1}
                px={{ xs: 6, lg: 12 }}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Nuestros Planes de Internet{" "}
              </MKTypography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <FilledInfoCard
                variant="gradient"
                color="primary"
                icon="flag"
                title="Plan Básico"
                description="Costo: $20.00"
                velocidad="Velocidad: 12mbps"
                action={{
                  type: "internal",
                  route: "/servicios",
                  label: "Contratalo",
                }}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <FilledInfoCard
                variant="gradient"
                color="primary"
                icon="flag"
                title="Plan Home"
                description="Costo: $22.00"
                velocidad="Velocidad: 20mbps"
                action={{
                  type: "internal",
                  route: "/servicios",
                  label: "Contratalo",
                }}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <FilledInfoCard
                variant="gradient"
                color="primary"
                icon="flag"
                title="Plan Smart"
                description="Costo: $24.00"
                velocidad="Velocidad: 30mbps"
                action={{
                  type: "internal",
                  route: "/servicios",
                  label: "Contratalo",
                }}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <FilledInfoCard
                variant="gradient"
                color="primary"
                icon="flag"
                title="Plan Coorporativo"
                description="Costo: $50.00"
                velocidad="Velocidad: 50mbps"
                action={{
                  type: "internal",
                  route: "/servicios",
                  label: "Contratalo",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Gracias por tu atención!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Estamos en las siguientes redes sociales
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Twitter
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Facebook
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
