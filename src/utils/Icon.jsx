import { icons as lucideIcons } from 'lucide-react';
import * as iconsaxIcons from 'iconsax-react';
import PropTypes from 'prop-types';

const Icon = ({ name, color = 'currentColor', size = 24, lib = 'lucide', className }) => {
  let IconComponent;

  if (lib === 'lucide') {
    IconComponent = lucideIcons[name];
  } else if (lib === 'iconsax') {
    IconComponent = iconsaxIcons[name];
  }

  if (!IconComponent) {
    // console.error(`Icon "${name}" not found in library "${lib}"`);
    return null;
  }

  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  lib: PropTypes.oneOf(['lucide', 'iconsax']),
  className: PropTypes.string,
};
