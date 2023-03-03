import React, {FC} from 'react';
import s from './Display.module.css'

export type DisplayPropsType = {
    count: number
    disableIncButton: boolean
}

const Display: FC<DisplayPropsType> = (
    {
        disableIncButton,
        count
    }
) => {

    const displayStyle = s.display + (disableIncButton ? ' ' + s.error : '')

    return (
        <div className={displayStyle}>
            {count}
        </div>
    );
};

export default Display;