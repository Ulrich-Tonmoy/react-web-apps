import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // ****************************************************************
  const getAutocompleteResults = (query: string): Promise<string[]> => {
    const data = [
      "New York",
      "Buffalo",
      "Rochester",
      "Yonkers",
      "Syracuse",
      "Albany",
      "New Rochelle",
      "Mount Vernon",
      "Schenectady",
      "Utica",
      "White Plains",
      "Hempstead",
      "Troy",
      "Niagara Falls",
      "Binghamton",
      "Freeport",
      "Valley Stream"
    ]
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          resolve(data.filter(d => d.toLowerCase().includes(query.toLowerCase()))))
      }, Math.random() * 1000);
    })
  }

  // ****************************************************************
  const useDebounce = (value: string, waitTime = 250) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebounceValue(value)
      }, waitTime)

      return () => { clearTimeout(timeout) }
    }, [value, waitTime])

    return debounceValue;
  }

  // ****************************************************************
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debounceQuery = useDebounce(query);
  const controller = new AbortController()

  useEffect(() => {
    let cancel = false;
    (async () => {
      setSuggestions([]);
      if (debounceQuery.length > 0) {
        const data = await getAutocompleteResults(debounceQuery);
        if (!cancel) setSuggestions(data);
      }
    })();

    return () => cancel = true;
  }, [debounceQuery])

  return (
    <div className="App">
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <div>{suggestions.map((suggestion) => <div key={suggestion}>{suggestion}</div>)}</div>
    </div>
  )
}

export default App
