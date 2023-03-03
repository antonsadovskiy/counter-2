import React, {FC} from 'react';
import s from './Button.module.css'

export type ButtonPropsType = {
    name: string
    callback: () => void
    disableIncButton?: boolean
    disableResetButton?: boolean
    disableSetButton?: boolean
}

const Button: FC<ButtonPropsType> = (
    {
        name,
        callback,
        disableIncButton,
        disableResetButton,
        disableSetButton
    }
) => {

    const onClickHandler = () => {
        callback()
    }

    const error = disableIncButton || disableResetButton || disableSetButton

    return (
        <div className={s.button}>
            <button disabled={error} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;