import React from "react";

const withForm = (Component) => {
  class WapperComponent extends React.Component {
      state = {
          count: 0,
      }

      handelClick = () => {
          this.setState(state => {
              return {
                  count: state.count + 1,
              }
          })
      }
    render() {
      return <Component name="Cybersoft" count={this.state.count} onClick={this.handelClick}/>;
    }
  }

  return WapperComponent;
};

class ComponentA extends React.Component {

  render() {
      const {name, onClick, count} = this.props
    return <div>
        <h1>{name}</h1>
        <button className="btn btn-primary" onClick={onClick}>Click</button>
        <p>{count}</p>
    </div>
  }
}

export const ComponentAWithForm = withForm(ComponentA);

class ComponentB extends React.Component {
  render() {
    const {name, onClick, count} = this.props
    return <div>
        <h4>{name}</h4>
        <button className="btn btn-primary" onClick={onClick}>Click</button>
        <p>{count}</p>
    </div>
  }
}

export const ComponentBWithForm = withForm(ComponentB);
