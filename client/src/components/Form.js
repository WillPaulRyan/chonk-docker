import React from 'react';
import './Form.css';

export default class Form extends React.Component {
  state = {
    url: ''
  }

  handleChange = (event) => {
    this.setState({url: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    await fetch('/api/url/shorten', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({longUrl: this.state.url})
    })
      .then(res => res.json())
      .then(data => {
        this.setState({url: data.shortUrl})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="form-container">
        <form id="form" method="post" onSubmit={this.handleSubmit.bind(this)}>
          <input type="url"
            id="url"
            value={this.state.url}
            onChange={this.handleChange}
            placeholder="Paste your URL here..."
            autoComplete="off"
            required
          />
          <input type="image" id="button" 
            src="/button.png" alt="Chonk!" />
        </form>
  
      </div>
    );
  }
}