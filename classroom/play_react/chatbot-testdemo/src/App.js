import './App.css';
import defaultDataset from "./dataset"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
