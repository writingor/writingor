import React from 'react';
import css from './KeyWordCheckbox.module.css';


const KeyWordCheckbox = ({ children, ...props }) => {

    return (
        <div className={css.KeyWordCheckbox}>
            <input
                className={css.KeyWordCheckbox__input}
                id={props.isNameIdFor}
                name={props.isNameIdFor}
                type={"checkbox"}
                value={props.checked}
                onChange={props.toggleChecked}
            />
            <label
                className={css.KeyWordCheckbox__label}
                htmlFor={props.isNameIdFor}
            >
                {children}
            </label>
        </div>
    );
};

export default KeyWordCheckbox;