import React from 'react';
import './tooltip.styles.css';

const ToolTip = ({ name, size }) => (
    <p className = { `${size} toolTip`}>{name}</p>
);

export default ToolTip;
