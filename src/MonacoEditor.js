import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code here',
    };
  }

  editorDidMount(editor, monaco) {
    console.log('Editor mounted!');
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
    this.setState({ code: newValue });
  }

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: true,
    };

    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange.bind(this)}
        editorDidMount={this.editorDidMount.bind(this)}
      />
    );
  }
}

export default CodeEditor;
