// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/logo.png";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 2 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={50}
          width={{ xs: "80%", lg: "30%" }}
          zIndex={1}
          opacity={0.4}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={10} justifyContent="end" mx="auto" textAlign="end">
            <MKTypography variant="h3" color="white" mb={1}>
              Instalacion gratuita!!!
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={10} left={250}>
              Parte de nuestros beneficios es la instalación gratuita de nuestros equipos,
              contáctanos a nuestros números telefónicos para más información.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="/contacto"
              sx={{ mb: 2 }}
            >
              Contactanos!
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
