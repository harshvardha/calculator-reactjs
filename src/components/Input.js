const Input = ({ input, result }) => {
    return (
        <div className="input">
            <input
                id="input--equation"
                type="text"
                value={input}
                readOnly={true}
            />

            <input
                id="input--result"
                type="text"
                value={result}
                readOnly={true}
            />
        </div>
    )
}

export default Input