import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsApp() {
  const goToWs = () => {
    window.open("https://wa.me/+593996936415", "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        textAlign: "end",
        color: "green",
        zIndex: "100",
        width: "100%",
      }}
    >
      <WhatsAppIcon style={{ transform: "scale(2.8)" }} onClick={goToWs} />
    </div>
  );
}

// Planes.propTypes = {
//   bgImage: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default WhatsApp;
