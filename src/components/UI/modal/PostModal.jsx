import React, { useState } from 'react';
import MainButton from '../button/MainButton';
import KeyWordCheckbox from '../check-box/KeyWordCheckbox';
import './post-modal.css';


const PostModal = ({active, setActive, postItem}) => {
    // Использую хук useState для изменения состояния параметра checked в чекбоксе.
    const [checked, setChecked] = useState(false);
    const toggleChecked = () => {
      setChecked(!checked);
    };
    // Перебираю с помощью map полученный массив tags из пропрса postItem и принимаю пропс позицию.
    const postTags = postItem.tags.map((tag, pos) => {
        return (
            // Составляю уникальный id (для связываеия лейбла и инпута) из айди поста и значения тега.
            <KeyWordCheckbox key={pos} id={postItem.id + tag} value={checked} onChange={toggleChecked}>{tag}</KeyWordCheckbox>
        );
    });

    return (
        // Применяю список классов в зависимости от состояния переменной postModalActive,
        // она нахрдится в компоненте PostItem, так как эта переменная используется и для кнопки в посте.
        <div className={active ? 'post-modal active' : 'post-modal'} onClick={() => setActive(false)}>
            <div className={active ? 'post-modal__content active' : 'post-modal__content'} onClick={e => e.stopPropagation()}>
                <div className="post-modal__checkbox">{postTags}</div>
                <MainButton>Найти похожие</MainButton>
            </div>
        </div>
    );
};

export default PostModal;