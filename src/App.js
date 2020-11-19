import { Component } from 'react';
import Prtis from './prtis'
import AddUser from './new_user'

// You import by saying import <CLASS>/<FUNCTION> from <FILE>

/*
function App() {
  return (
    <div className="App">
      <h1>Hey! Wassup!?</h1>
      <Prtis name="Pratik" alias="prtis"/>
      <Prtis name="Krishna" alias="uppalak"/>
    </div>
  );
}
*/
class App extends Component {
  state = {
    prtis : [
      { name: 'Pratik', alias: 'prtis@' },
      { name: 'Sai', alias: 'rathsai@' }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hey! Wassup!?</h1>
        <Prtis prtis={this.state.prtis}/>
        <AddUser/>
      </div>
    )
  }
}

export default App;
