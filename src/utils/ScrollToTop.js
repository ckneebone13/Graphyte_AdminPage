import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  // We have to force the app to scroll to the top of content
  // upon route change
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").scrollTop = 0;
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
