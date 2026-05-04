import PropTypes from 'prop-types';

export function InfoCard({ icon: Icon, title, children }) {
  return (
    <article className="premium-card p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed text-primary">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="font-heading text-headline-sm text-primary">{title}</h3>
      <div className="mt-3 text-body-sm text-on-surface-variant">{children}</div>
    </article>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
