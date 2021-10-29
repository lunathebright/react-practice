import React, { Component, useEffect, useState } from "react";

// class형
// const withRequset = (url) => (WrappedComponent) => {
//   return class extends Component {
//     state = {
//       data: null,
//     };

//     initialize() {
//       fetch(url)
//         .then((res) => res.json())
//         .then((res) => this.setState({ data: res }));
//     }

//     componentDidMount() {
//       this.initialize();
//     }

//     render() {
//       const { data } = this.state;
//       return <WrappedComponent {...this.props} data={data} />;
//     }
//   };
// };

// function형
const withRequest = (url) => (WrappedComponent) => {
  const Request = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    return data && <WrappedComponent data={data} />;
  };

  return Request;
};

export default withRequest;
