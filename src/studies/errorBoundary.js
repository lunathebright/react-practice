import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 재사용을 위해 노출 내용 props로 받아 사용
      return <h1>{this.props.fallBack}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
