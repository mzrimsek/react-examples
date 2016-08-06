import React, {Component} from 'react';

export default class Snippet extends Component{
  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="heading">
            <h1 className="title is-2">{this.props.name}</h1>
            <h2 className="subtitle is-4">{this.props.description}</h2>
          </div>
          <div className="columns">
            <div className="column is-half">
              <h1 className="title is-3">Code</h1>
              <div className="box">
                <code>
                  export default class Example extends Component{

                  }
                </code>
              </div>
            </div>
            <div className="column is-half">
              <h1 className="title is-3">Results</h1>
              <div>
                <div>component elements</div>
                <div>output</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
