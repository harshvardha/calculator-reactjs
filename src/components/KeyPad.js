import { FiRotateCcw } from "react-icons/fi"
import { TbEqual } from "react-icons/tb"

const KeyPad = ({ handleInput, handleResult, allClear, refresh }) => {
    return (
        <div className="keypad">
            <div className="keypad--row">
                <button className="keypad--buttons keypad--unary--operators" type="button" onClick={allClear}>AC</button>
                <button className="keypad--buttons keypad--unary--operators" type="button">+/-</button>
                <button className="keypad--buttons keypad--unary--operators" value={"%"} type="button" onClick={(event) => handleInput(event)}>%</button>
                <button className="keypad--buttons keypad--last" value={"/"} type="button" onClick={(event) => handleInput(event)}>/</button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" value={"7"} type="button" onClick={(event) => handleInput(event)}>7</button>
                <button className="keypad--buttons keypad--numbers" value={"8"} type="button" onClick={(event) => handleInput(event)}>8</button>
                <button className="keypad--buttons keypad--numbers" value={"9"} type="button" onClick={(event) => handleInput(event)}>9</button>
                <button className="keypad--buttons keypad--last" value={"x"} type="button" onClick={(event) => handleInput(event)}>x</button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" value={"4"} type="button" onClick={(event) => handleInput(event)}>4</button>
                <button className="keypad--buttons keypad--numbers" value={"5"} type="button" onClick={(event) => handleInput(event)}>5</button>
                <button className="keypad--buttons keypad--numbers" value={"6"} type="button" onClick={(event) => handleInput(event)}>6</button>
                <button className="keypad--buttons keypad--last" value={"-"} type="button" onClick={(event) => handleInput(event)}>{'\u002D'}</button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" value={"1"} type="button" onClick={(event) => handleInput(event)}>{'\u0031'}</button>
                <button className="keypad--buttons keypad--numbers" value={"2"} type="button" onClick={(event) => handleInput(event)}>2</button>
                <button className="keypad--buttons keypad--numbers" value={"3"} type="button" onClick={(event) => handleInput(event)}>3</button>
                <button className="keypad--buttons keypad--last" value={"+"} type="button" onClick={(event) => handleInput(event)}>{'\u002B'}</button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" type="button" onClick={refresh}><FiRotateCcw /></button>
                <button className="keypad--buttons keypad--numbers" value={"0"} type="button" onClick={(event) => handleInput(event)}>0</button>
                <button className="keypad--buttons keypad--numbers" value={"."} type="button" onClick={(event) => handleInput(event)}>{'\u2022'}</button>
                <button className="keypad--buttons keypad--last" type="button" onClick={handleResult}><TbEqual /></button>
            </div>
        </div>
    )
}

export default KeyPad