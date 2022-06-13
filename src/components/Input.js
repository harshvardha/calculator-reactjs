const Input = () => {
    return (
        <div className="input">
            <input
                id="input--result"
                type="text"
                placeholder=""
                onKeyDown={(event) => event.preventDefault()}
            />

            <input
                id="input--result"
                type="text"
                placeholder="0"
                onKeyDown={(event) => event.preventDefault()}
            />
        </div>
    )
}

export default Input