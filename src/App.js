import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './App.css';
import Axios from 'axios'

function App() {
  search = (keyword) => {
    console.log(keyword)
    Axios.get('https://google.com').then(result => {
      console.log(result.data)
    })
  }
  
  var title = "CodeMobiles"
  return (
    <div className="App">
      <strong>{title}</strong>
      <table className='NavBar'>
        <tbody>
          <tr>
            <td>
              <input style={{fontSize: 24, display: 'block', width: '100%', paddingLeft:8}} 
              placeholder='Enter Your Movies Keyword'
              onChange={(event) => {this.search(event.target.value)}}/>
              <img src={require('./assets/logo.svg')} width="50" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

var header = {}

export default App;
