import { useState } from 'react'
import { Container, Button, Input, Text } from './styles'
import { Configuration, OpenAIApi } from 'openai'

function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [placeholder, setPlaceholder] = useState(
    'Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..',
  )
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  })

  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`)
    const res = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
    })

    setResult(res.data.data[0].url)
  }
  return (
    <div className="app-main">
      <>
        <h2>Generate an Image using Open AI API</h2>

        <textarea
          className="app-input"
          placeholder={placeholder}
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>
        {result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      </>
    </div>
  )
}

export default App
