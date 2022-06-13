import { FiRotateCcw } from "react-icons/fi"
import { BsDot } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { TbDivide, TbEqual } from "react-icons/tb"
import { MdOutlineClose } from "react-icons/md"


const KeyPad = () => {
    return (
        <div className="keypad">
            <div className="keypad--row">
                <button className="keypad--buttons keypad--unary--operators" type="button">AC</button>
                <button className="keypad--buttons keypad--unary--operators" type="button">+/-</button>
                <button className="keypad--buttons keypad--unary--operators" type="button">%</button>
                <button className="keypad--buttons keypad--last" type="button"><TbDivide /></button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" type="button">7</button>
                <button className="keypad--buttons keypad--numbers" type="button">8</button>
                <button className="keypad--buttons keypad--numbers" type="button">9</button>
                <button className="keypad--buttons keypad--last" type="button"><MdOutlineClose /></button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" type="button">4</button>
                <button className="keypad--buttons keypad--numbers" type="button">5</button>
                <button className="keypad--buttons keypad--numbers" type="button">6</button>
                <button className="keypad--buttons keypad--last" type="button"><AiOutlineMinus /></button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" type="button">1</button>
                <button className="keypad--buttons keypad--numbers" type="button">2</button>
                <button className="keypad--buttons keypad--numbers" type="button">3</button>
                <button className="keypad--buttons keypad--last" type="button"><AiOutlinePlus /></button>
            </div>
            <div className="keypad--row">
                <button className="keypad--buttons keypad--numbers" type="button"><FiRotateCcw /></button>
                <button className="keypad--buttons keypad--numbers" type="button">0</button>
                <button className="keypad--buttons keypad--numbers" type="button"><BsDot /></button>
                <button className="keypad--buttons keypad--last" type="button"><TbEqual /></button>
            </div>
        </div>
    )
}

export default KeyPad