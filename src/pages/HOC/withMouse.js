import React from "react";
//HOC la 1 function nhan vao mot component va tra ra 1 component
const withMouse = (Component) => {
  class WapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posX: 0,
        posY: 0,
      };
    }
    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove = (evt) => {
      this.setState({
        posX: evt.clientX,
        posY: evt.clientY,
      });
    };

    render() {
      return <Component {...this.state} {...this.props} />;
    }
  }

  return WapperComponent;
};

export default withMouse;
// withMouse(Component)
// connect(mapStateToProps)(Component)
