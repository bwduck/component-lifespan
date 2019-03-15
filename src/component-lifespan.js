import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function useLifespan(callback) {
  const time = useRef(0);

  useEffect(() => {
    time.current = Date.now();
    return () => callback(Date.now() - time.current);
  }, []);
}

const ComponentLifespan = ({ children, updateElapsedTime }) => {
  useLifespan(updateElapsedTime);

  return children;
};

ComponentLifespan.propTypes = {
  children: PropTypes.node,
  updateElapsedTime: PropTypes.func,
};

export default ComponentLifespan;
