import React, { Component } from 'react';//Why is { Component } needed?
import List from './List'
import './App.css';
import STORE from './store';

//Questions throughout//
class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  }

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
            //Custom props?//
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App;