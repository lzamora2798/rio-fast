// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/logo.png";

function Planes({ bgImage, title, description }) {
  return (
    <MKBox component="section" py={2}>
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
          top={50}
          left={50}
          width={{ xs: "80%", lg: "30%" }}
          zIndex={1}
          opacity={0.6}
        />
        <Container
          sx={{ position: "relative", zIndex: 2, py: { xs: 0, lg: 15 }, pt: { xs: 40, lg: 5 } }}
        >
          <Grid
            container
            item
            xs={12}
            md={5}
            justifyContent="end"
            ml="auto"
            textAlign="end"
            right={10}
          >
            <MKTypography variant="h3" color="white" mb={1}>
              {title}
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={15}>
              {description}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

Planes.propTypes = {
  bgImage: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Planes;
