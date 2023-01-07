import "./ProjectImg2.css";
import { Component } from "react";

interface Props {
  heading: string;
  text: string;
}

class Projectimg2 extends Component<Props> {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Projectimg2;
