import React, { useState } from 'react';

import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';

const PaswordInput = ({ password, setPassword }) => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };
  return (
    <div>
      <input
        type={type}
        id="password"
        style={{ paddingRight: '45px' }}
        placeholder="Enter your password..."
        required
        onChange={e => setPassword(e.target.value)}
      />
      <span id="span" onClick={handleToggle}>
        <Icon icon={icon} size={20} />
      </span>
    </div>
  );
};

export default PaswordInput;
