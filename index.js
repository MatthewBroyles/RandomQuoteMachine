function App(){
    
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes,setRandomQuotes] = React.useState('');
    const [randomColor,setRandomColor] = React.useState('#16a085');

    React.useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuotes(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
            setRandomQuotes(quotes[randIndex])
        getNewColors();
    }
    const getNewColors = () => {
        var colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];
        var randColorIndex = Math.floor(Math.random() * colors.length)
            setRandomColor(colors[randColorIndex])
        
    }
    
    return (
        <div style={{backgroundColor:randomColor, minHeight: '100vh'}}>
            <div className = "container pt-5" id='pog' >
            
                <div className="card">
                    <div className='card-body'>
                        {randomQuotes ? (
                            <>
                            <h5 className="card-title">&quot;{randomQuotes.text}&quot;</h5>
                            <p className="card-text">- {randomQuotes.author || "No Author"}</p>
                            </>


                        ) : (
                            <h2>Loading</h2>
                        )}
                        <div className='container' id='buttons'>
                        <div className="row">
                            <div class="col-md-auto">
                                <button onClick={getNewQuote} id='newquote'className='btn col-sm' style={{backgroundColor:randomColor}}>New Quote</button>
                            </div>
                                <div class='col-md'></div>
                                <div class='col-md-auto'>
                                    <a href=
                                    {"https://twitter.com/intent/tweet?text=" + '"' + randomQuotes.text + '" ' + randomQuotes.author}
                                    className="btn col-sm" target="_blank" >
                                        <i className='btn fa fa-twitter' style={{backgroundColor:randomColor}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
                <div class='footer'>By: <a id='github' href='https://github.com/MatthewBroyles'>Matthew Broyles</a></div>
            

            </div>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('app'))
