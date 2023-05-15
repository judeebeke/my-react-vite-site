import PropTypes from 'prop-types';

const Heading = (props) => {
 const headingTitle = props
  return (
    <div className="flex flex-col text-center items-center justify-center mb-6">
      <h2 className="font-bold text-4xl pb-6 text-lowDark">{headingTitle.headingTitle}</h2>
      <span className="section-title-line-one"></span>
      <span className="section-title-line-two"></span>
    </div>
  );
};

Heading.propTypes = {
  headingTitle: PropTypes.string.isRequired
}

export default Heading;
