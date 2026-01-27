import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";



const Filter = ({filtered, setFiltered}) => {

    const options = ["All", "Pending" , "Finished"]
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="filter-container">
            <p className="select-selected" onClick={() => setIsOpen(!isOpen)}>
                {filtered}
                <span className='arrow'>{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </p>

            {isOpen && (
                <div className="select-items">
                    {options.map((opt) => (
                        <p
                            key={opt}
                            className="option"
                            onClick={() => {
                                setIsOpen(false);
                                setFiltered(opt)
                            }}
                        >
                            {opt}
                        </p>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Filter