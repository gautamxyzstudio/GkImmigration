import PropTypes from 'prop-types';

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children }) {
  return (
    <Tag className={`reveal-up ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </Tag>
  );
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};
