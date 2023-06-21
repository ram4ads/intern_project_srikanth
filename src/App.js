import { useQuery,gql} from '@apollo/client'
import './App.css'

const GetGraphQuery = gql`
query {
  messages {
    items{
      id 
      subject
      type
      view_href
    }
    
  }
}
`

function App() {
  const {error, loading, data} = useQuery(GetGraphQuery)

  if (error) <div>Error Message</div>
  if(loading) <div>...Loading</div>

  return (
    <>
    <h1>List</h1>
    {data &&
  
    data.messages.items.map(e => {
      return (
        <div className='msgContainer'>
          <h2>id : {e.id}</h2>
        <h2>sub : {e.subject}</h2>
        <h3>type  : {e.type}</h3>
        <h4>view_href : {e.view_href}</h4>
        </div>
      )
    })
    
  }
  </>
  )
}

export default App
