import React, { Component } from "react"
// import { getRandomColor } from "../utils/colors"

export default class Logo extends Component {
  state = {
    fill: this.props.fill,
  }
  handleMouseOver = () => {
    this.setState({
      fill: "#5f97d1",
    })
  }
  handleMouseOut = () => {
    this.setState({
      fill: this.props.fill,
    })
  }
  render() {
    let { type, title } = this.props
    const { fill } = this.state
    title = title || "Øyafestivalen"
    switch (type) {
      case "hor":
      case "horizontal":
        return (
          <span
            className="Logo Logo--horizontal"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            <svg
              className="Logo__svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="500px"
              height="174.1px"
              viewBox="0 0 500 174.1"
            >
              <title>{title}</title>
              <path
                fill={fill}
                d="M224.1,104h22v66.1h-22V104z M450.2,3.9h-8.4l-6.3,16.8h6.3L450.2,3.9z M500,10c-0.4,4.7-3.7,13.7-9,27.4
	c-5.3,13.6-8.9,22.8-12.2,27.7c-4,5.9-7.9,8.3-11.7,8.3c-3.8,0-5.9-2.4-5.3-8.3c0.4-4.8,4-14,9.2-27.7c5.2-13.7,8.9-22.7,12.1-27.4
	c3.9-5.5,7.7-7.6,11.4-7.6C498.2,2.4,500.4,4.5,500,10z M490.5,13c-2.9,0-4.3,3.2-7.9,12.5c-0.8,1.9-1.6,4.1-2.6,6.6l-4.5,11.6
	c-1.1,2.7-2,5.1-2.8,7.2c-3.5,9-4.2,11.7-1.4,11.7c2.8,0,4.2-3,7.8-12.3c0.8-1.9,1.6-4.1,2.6-6.6l4.4-11.5c1.1-2.7,2-5.1,2.8-7.2
	C492.3,16,493.2,13,490.5,13z M454.9,45.8c1.2-1.5,2.4-2.8,3.6-4.1c2.4-2.7,4.5-5,6.1-7.5c2.8-4.1,5.1-8.5,7.1-13.8
	c4.5-11.6,3.4-17.9-3.1-17.9c-6.9,0-12.5,6.5-18.1,21.1c-0.1,0.3-0.3,0.7-0.4,1.1c-0.1,0.2-0.3,0.9-0.5,1.4h6.9c0.3-0.9,0.7-2,1-2.8
	c2.8-7.2,4.9-10.1,6.9-10.1c1.9,0,1.8,2.3-0.3,7.9c-1.5,4-3.1,6.9-5,9.6c-1.6,2.1-3.4,4.2-5.4,6.3c-1,1.1-2.1,2.3-3.2,3.5
	c-8,9.2-13.9,18.8-18,29.5c-0.1,0.4-0.3,0.7-0.4,1.1s-0.4,1.2-0.4,1.2h19.7l4.6-11.8h-12.2c2.4-4.3,6-8.4,11.1-14.5V45.8z
	 M379.9,3.9L441,170.2h-29.6l-14.8-43h-64.8l-15,43h-28.9L348.7,3.9H379.9z M388.8,104l-24.7-72.2L339.4,104H388.8z M140.6,26
	c12.2,14.9,19,35.6,19,61c0,54.2-30.5,87.1-79.7,87.1c-23.1,0-42-7.2-55.6-20.4L8.5,171l-5.7-5.1L19,148C6.8,133.2,0,112.5,0,87
	C0,32.6,30.5,0,79.8,0c23,0,41.9,7.3,55.6,20.3L151.2,3l5.7,5.1L140.6,26z M37.8,127.4L117.4,40c-8.9-10.6-21.7-16.2-37.6-16.2
	c-31.7,0-51.6,22.8-51.6,63.2C28.2,103.6,31.6,117.2,37.8,127.4z M131.4,87c0-16.6-3.4-30.2-9.5-40.5l-79.6,87.4
	c8.9,10.6,21.7,16.3,37.5,16.3C111.7,150.2,131.4,127.2,131.4,87z M180.6,82.3h21.7V3.9h-21.7V82.3z M289.3,3.9h-21.7v78.4h-21.5
	V104h21.7V82.3h21.5V3.9z M202.4,82.3V104h21.7V82.3H202.4z"
              />
            </svg>
          </span>
        )
      default:
        return (
          <span className="Logo Logo--diagonal">
            <svg
              className="Logo__svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="500px"
              height="174.1px"
              viewBox="0 0 500 174.1"
            >
              <title>{title}</title>
              <path
                fill={fill}
                d="M224.1,104h22v66.1h-22V104z M450.2,3.9h-8.4l-6.3,16.8h6.3L450.2,3.9z M500,10c-0.4,4.7-3.7,13.7-9,27.4
	c-5.3,13.6-8.9,22.8-12.2,27.7c-4,5.9-7.9,8.3-11.7,8.3c-3.8,0-5.9-2.4-5.3-8.3c0.4-4.8,4-14,9.2-27.7c5.2-13.7,8.9-22.7,12.1-27.4
	c3.9-5.5,7.7-7.6,11.4-7.6C498.2,2.4,500.4,4.5,500,10z M490.5,13c-2.9,0-4.3,3.2-7.9,12.5c-0.8,1.9-1.6,4.1-2.6,6.6l-4.5,11.6
	c-1.1,2.7-2,5.1-2.8,7.2c-3.5,9-4.2,11.7-1.4,11.7c2.8,0,4.2-3,7.8-12.3c0.8-1.9,1.6-4.1,2.6-6.6l4.4-11.5c1.1-2.7,2-5.1,2.8-7.2
	C492.3,16,493.2,13,490.5,13z M454.9,45.8c1.2-1.5,2.4-2.8,3.6-4.1c2.4-2.7,4.5-5,6.1-7.5c2.8-4.1,5.1-8.5,7.1-13.8
	c4.5-11.6,3.4-17.9-3.1-17.9c-6.9,0-12.5,6.5-18.1,21.1c-0.1,0.3-0.3,0.7-0.4,1.1c-0.1,0.2-0.3,0.9-0.5,1.4h6.9c0.3-0.9,0.7-2,1-2.8
	c2.8-7.2,4.9-10.1,6.9-10.1c1.9,0,1.8,2.3-0.3,7.9c-1.5,4-3.1,6.9-5,9.6c-1.6,2.1-3.4,4.2-5.4,6.3c-1,1.1-2.1,2.3-3.2,3.5
	c-8,9.2-13.9,18.8-18,29.5c-0.1,0.4-0.3,0.7-0.4,1.1s-0.4,1.2-0.4,1.2h19.7l4.6-11.8h-12.2c2.4-4.3,6-8.4,11.1-14.5V45.8z
	 M379.9,3.9L441,170.2h-29.6l-14.8-43h-64.8l-15,43h-28.9L348.7,3.9H379.9z M388.8,104l-24.7-72.2L339.4,104H388.8z M140.6,26
	c12.2,14.9,19,35.6,19,61c0,54.2-30.5,87.1-79.7,87.1c-23.1,0-42-7.2-55.6-20.4L8.5,171l-5.7-5.1L19,148C6.8,133.2,0,112.5,0,87
	C0,32.6,30.5,0,79.8,0c23,0,41.9,7.3,55.6,20.3L151.2,3l5.7,5.1L140.6,26z M37.8,127.4L117.4,40c-8.9-10.6-21.7-16.2-37.6-16.2
	c-31.7,0-51.6,22.8-51.6,63.2C28.2,103.6,31.6,117.2,37.8,127.4z M131.4,87c0-16.6-3.4-30.2-9.5-40.5l-79.6,87.4
	c8.9,10.6,21.7,16.3,37.5,16.3C111.7,150.2,131.4,127.2,131.4,87z M180.6,82.3h21.7V3.9h-21.7V82.3z M289.3,3.9h-21.7v78.4h-21.5
	V104h21.7V82.3h21.5V3.9z M202.4,82.3V104h21.7V82.3H202.4z"
              />
            </svg>
          </span>
        )
    }
  }
}
