import "./option.css"
export default function Option({ OptionText,onClick,isSelected,disabled }){
    return(
        <button 
            className={`option-button ${isSelected ? 'selected':''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {OptionText}
        </button>
    )
}