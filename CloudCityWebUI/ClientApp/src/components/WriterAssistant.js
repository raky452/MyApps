import React, { Component } from 'react';
import './WriterAssistant.css';

export class WriterAssistant extends Component {

    constructor(props) {
        super(props);
        this.supportedLanguages = { TELUGU: { value: 0, name: "Telugu" } };
        this.state = {
            selectedLanguage: this.supportedLanguages.TELUGU,
            textRows: 20,
            editorCode: "",
            editorCodeValid: false,
            CodeInvalidError: ""
        };
        this.handleUsercodeValidation = this.handleUsercodeValidation.bind(this);
        this.handleCodeTextChange = this.handleCodeTextChange.bind(this);
    }

    handleUsercodeValidation() {
        if (this.state.editorCode.length > 0) {
            let errorMsg = this.state.editorCode + " is invalid";
            this.setState({ CodeInvalidError: errorMsg });
            //this.setState({ editorCodeValid: true });
        }
    }

    handleCodeTextChange(event) {
        this.setState({ editorCode: event.target.value });
        this.setState({ CodeInvalidError: "" });
    }

    render() {
        let secretCodeValidVutton = <button className="SecretCodeSubmitButton" onClick={this.handleUsercodeValidation}>SUBMIT</button>
        let codeTextField = <input type="text" value={this.state.editorCode} onChange={this.handleCodeTextChange} />;
        let ErrorLabel = <label className="errorLabel">{this.state.CodeInvalidError} </label>;
        if (!this.state.editorCodeValid) {
            return (
                <div>
                    <div>
                        <h1>Hello, User!</h1>
                        <h2>Welcome to Clagrad's Writer Assistant</h2>
                        <p>It is an AI based text recognize/encode/decode platform, this platform provides you the below features:</p>
                        <ul>
                            <li><strong>Text Recognization</strong>.<em>Upload</em> your image file then select <em>language</em> from the top right corner, then this tool will process the uploaded file and give you the editor to modify the file's text in the selected language and download the file.</li>
                            <li><strong>Text Encryption</strong>.Upload/create a file, then encrypt the file with the provided options.</li>
                            <li><strong>Text Decryption</strong>.Select the Encrypted format and upload the encrypted file to view the text.</li>
                            <li><strong>Text To Speech</strong>.<code>Under development</code>, Our AI assistant will read the text file.</li>
                            <li><strong>Speech To Text</strong>.<code>Under development</code>, Our AI assistant will record your voice to generate text file from it, this file can be input for the above listed features.</li>
                        </ul>
                        <p>Please enter your <code>Secret Code</code> in the below text box, then click on <code>Submit</code> to use the above listed features.</p>
                    </div>
                    <div>
                        {codeTextField}{secretCodeValidVutton}
                    </div>
                    <div>
                        {ErrorLabel}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="TextAreaDiv">
                        <textarea className="TextAreaProps" rows={this.state.textRows} placeholder={this.state.selectedLanguage.name} />
                    </div>
                    <div className="topright">
                        {this.state.selectedLanguage.name}
                    </div>
                </div>
            );
        }
    }
}