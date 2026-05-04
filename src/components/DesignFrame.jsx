import PropTypes from 'prop-types';

export function DesignFrame({ title, src }) {
  return (
    <iframe
      title={title}
      src={src}
      className="block min-h-[1600px] w-full border-0 bg-white"
      loading="eager"
    />
  );
}

DesignFrame.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
