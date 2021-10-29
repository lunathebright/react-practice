import React, { Component } from "react";
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
  console.log(data);
  return (
    <div>
      <div>
        {data.posts.map((post) => (
          <>
            <h1>{post.title}</h1>
            <p>{post.contents}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default withRequest("/posts.json")(Post);
