import React from 'react';

const Checkbox = ({ label, checked, onChange, ...props }) => {
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={onChange} {...props} />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;