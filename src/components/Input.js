const Input = ({ input, result }) => {
    return (
        <div className="input">
            <input
                id="input--equation"
                type="text"
                value={input}
                onKeyDown={(event) => event.preventDefault()}
            />

            <input
                id="input--result"
                type="text"
                value={result}
                onKeyDown={(event) => event.preventDefault()}
            />
        </div>
    )
}

export default Input