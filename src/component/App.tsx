
import {inject, observer } from 'mobx-react'
import * as React from 'react'

import { IMobxStore } from '../models/IMobxStore'
 
interface IAppProps {
  mobxStore?: IMobxStore  //  这里比较关键 ？表示可或缺，如果没有就会报错。
}
 
@inject('mobxStore')
@observer
class App extends React.Component<IAppProps, {}> {
 
  public render() {
    const {greeting} = this.props.mobxStore!;
    
    return (
      <div className="App">
        <header className="App-header">
            {greeting}
          <button onClick={this.clickHandler}>Change Greeting</button>
        </header>
        
      </div>
    );
  }
 
  private clickHandler = (): void =>{
    const {setName} = this.props.mobxStore!;
    setName("lkq");
  }
}
 
export default App