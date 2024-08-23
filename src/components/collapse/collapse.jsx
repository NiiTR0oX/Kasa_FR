import './collapse.scss';
import ArrowUp from './../../assets/images/collapse/ArrowUp.png';
import ArrowDown from './../../assets/images/collapse/ArrowDown.png';
import { useState } from 'react';

export default function Collapse({ title, content }) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse">
                <div className='collapse_title' onClick={() => setToggle(!toggle)}>
                    <h3>{title}</h3>
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={toggle ? ArrowUp : ArrowDown} 
                        alt="show content" 
                    />
                </div>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => (
                        <p key={index}>{item}</p>
                    )) : content}
                </div> 
            </div>
        </>
    );
}
