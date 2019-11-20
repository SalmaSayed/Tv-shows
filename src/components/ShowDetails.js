import React from "react";
import { getShow } from "../utils/APIs/axios";
class ShowDetails extends React.Component {
  componentDidMount() {
    getShow(this.props.match.params.id).then(response => {
      console.log(response.data);
    });
  }
  render() {
    return <div>ShowDetails</div>;
  }
}

export default ShowDetails;
