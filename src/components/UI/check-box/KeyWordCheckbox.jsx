import React from 'react';
import css from './KeyWordCheckbox.module.css';


const KeyWordCheckbox = ({ children, id, ...props }) => {

    return (
        <div {...props} className={css.KeyWordCheckbox}>
            <input
                className={css.KeyWordCheckbox__input}
                id={id}
                name={id}
                type={"checkbox"}
                value={props.checked}
                onChange={props.toggleChecked}
            />
            <label
                className={css.KeyWordCheckbox__label}
                htmlFor={id}
            >
                {children}
            </label>
        </div>
    );
};

export default KeyWordCheckbox;