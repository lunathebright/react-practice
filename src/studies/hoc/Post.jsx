import React, { Component, useEffect, useState } from "react";
import withRequest from "./withRequest";

// class Post extends Component {
//   // state = {
//   //   data: null,
//   // };

//   // async initialize() {
//   //   try {
//   //     const response = await axios.get(
//   //       "https://jsonplaceholder.typicode.com/posts/1"
//   //     );
//   //     this.setState({
//   //       data: response.data,
//   //     });
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }

//   // componentDidMount() {
//   //   this.initialize();
//   // }

//   render() {
//     const { data } = this.props;

//     if (!data) return null;
//     return (
//       <div>
//         {data.posts.map((post) => (
//           <>
//             <h1>{post.title}</h1>
//             <p>{post.contents}</p>
//           </>
//         ))}
//       </div>
//     );
//     // return <div>{JSON.stringify(data)}</div>;
//   }
// }

function Post({ data }) {
  return (
    <div>
      {data.posts.map((post) => (
        <>
          <h1>{post.title}</h1>
          <p>{post.contents}</p>
        </>
      ))}
    </div>
  );
}

export default withRequest("/posts.json")(Post);
