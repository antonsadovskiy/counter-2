import React, {FC} from 'react';
import Display from "./Display/Display";
import Button from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    incCounter: () => void
    resetCounter: () => void
    disableIncButton: boolean
    disableResetButton: boolean
    backToSettings: () => void
}

const Counter: FC<CounterPropsType> = (
    {
        count,
        incCounter,
        resetCounter,
        disableIncButton,
        disableResetButton,
        backToSettings
    }
) => {

    return (
        <div className={s.counter}>
            <Display count={count} disableIncButton={disableIncButton}/>
            <div className={s.buttons}>
                <Button name={"inc"}
                        callback={incCounter}
                        disableIncButton={disableIncButton}/>
                <Button name={"reset"}
                        callback={resetCounter}
                        disableResetButton={disableResetButton}/>
                <Button name={"settings"}
                        callback={backToSettings}/>
            </div>
        </div>
    );
};

export default Counter;