import React, { useEffect, useState } from 'react';
import MainButton from '../button/MainButton';
import KeyWordCheckbox from '../check-box/KeyWordCheckbox';
import './post-modal.css';


const PostModal = ({ active, setActive, postItem }) => {
    // Использую хук useState для изменения состояния параметра checked в чекбоксе.
    const [checked, setChecked] = useState(true);
    // Меняю значение при клике. 
    const toggleChecked = () => {
        setChecked(!checked);
    };
    // Перебираю с помощью map полученный массив tags из пропрса postItem и принимаю пропс позицию.
    const postTags = postItem.tags.map((tag) => {
        return (
            // Составляю уникальный id (для связываеия лейбла и инпута) из айди поста и значения тега.
            <KeyWordCheckbox key={postItem.id + tag} id={postItem.id + tag} checked={checked} onChange={toggleChecked}>{tag}</KeyWordCheckbox>
        );
    });

    return (
        // Применяю список классов в зависимости от состояния переменной postModalActive,
        // она нахрдится в компоненте PostItem, так как эта переменная используется и для кнопки в посте.
        <div className={active ? 'post-modal active' : 'post-modal'} onClick={() => setActive(false)}>
            <div className={active ? 'post-modal__content active' : 'post-modal__content'} onClick={e => e.stopPropagation()}>
                <ul className='post-modal__ul'>
                    <li className='post-modal__li'><button className='post-modal__button' href="#" onClick={(e) => e.preventDefault}>Поделиться</button></li>
                    <li className='post-modal__li'><button className='post-modal__button' href="#" onClick={(e) => e.preventDefault}>Сообщить об ошибке</button></li>
                    <li className='post-modal__li'><button className='post-modal__button' href="#" onClick={(e) => e.preventDefault}>Пожаловаться</button></li>
                    <li className='post-modal__li'><p className='post-modal__info'>Опубликовано: <span>08.04.2022 в 16:34</span></p></li>
                    <li className='post-modal__li'><p className='post-modal__info'>Отредактировано: <span>08.04.2022 в 16:43</span></p></li>
                </ul>
                <div className="post-modal__checkbox">{postTags}</div>
                <MainButton>Найти похожие</MainButton>
            </div>
        </div>
    );
};

export default PostModal;