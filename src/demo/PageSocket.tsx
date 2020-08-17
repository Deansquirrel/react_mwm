import BaseComponent from '@/components/BaseComponent ';
import React from 'react';

interface IState {
  sData: number;
}

interface IData {
  num: number;
}

class PageSocket extends BaseComponent<{}, IState> {
  ws!: WebSocket;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      sData: 0.0,
    };
  }

  componentDidMount() {
    if (super.componentDidMount != undefined) {
      super.componentDidMount();
    }
    this.ws = new WebSocket('ws://192.168.8.99:8090');
    this.ws.onopen = () => {
      console.log('send data');
      this.ws.send('send data');
    };

    this.ws.onmessage = evt => {
      let d: IData = JSON.parse(evt.data);
      console.log(d.num);
      this.setState({
        sData: d.num,
      });
    };

    this.ws.onclose = () => {
      console.log('closed');
    };
  }

  componentWillUnmount() {
    if (super.componentWillUnmount != null) {
      super.componentWillUnmount();
    }
    this.ws.close();
  }

  render() {
    return <div>{this.state.sData}</div>;
  }
}

export default PageSocket;