import React from 'react';
import defaultDataset from "./dataset"
import './assets/styles/style.css'
import { AnswersList, Answer } from "./components/index";

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
      <div className="c-section">
        <div className="c-box">
          <AnswersList />
        </div>
      </div>
    );
  }
}
