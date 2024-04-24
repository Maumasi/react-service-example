export default (ctx: any) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ctx.logo} className="App-logo" alt="logo" />
                <h1>{ctx.title}</h1>
                <p>{ctx.description}</p>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <ul>
                {ctx.items.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}