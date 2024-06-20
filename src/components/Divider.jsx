import PropTypes from "prop-types";

const Divider = ({ vertical }) => {
  if (vertical) {
    console.log(vertical);
    return <div className="h-full w-0.5 bg-borderPrimary" />;
  }

  return <div className="h-0.5 w-full bg-borderPrimary" />;
};

Divider.propTypes = {
  vertical: PropTypes.bool,
};

export default Divider;
