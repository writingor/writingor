import React from 'react';
import './post-modal.css';


const PostModal = ({active, setActive, children}) => {

    return (
        <div className={active ? 'post-modal active' : 'post-modal'} onClick={() => setActive(false)}>
            <div className={active ? 'post-modal__content active' : 'post-modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default PostModal;