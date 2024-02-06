import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState('');
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => setAmount(event.target.value);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      <div>
        <label htmlFor='usd'>USD</label>
        <input id='usd' type='number' placeholder='USD' onChange={onChange} />
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {amount / coin.quotes.USD.price}{' '}
              {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
