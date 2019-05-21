import React, { Component } from "react"
import { getRandomColor } from "../utils/colors"

export default class Logo extends Component {
  state = {
    fill: this.props.fill,
  }
  handleMouseOver = () => {
    this.setState({
      fill: getRandomColor(),
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
              width="155.4px"
              height="62.2px"
              viewBox="0 0 155.4 62.2"
            >
              <title>{title}</title>
              <path
                fill={fill}
                d="M27.3,37.3c1.1,0.6,2.3,0.9,3.7,0.9c4.3,0,7.6-3.2,7.6-7.1c0-1-0.3-2.1-0.7-3L27.3,37.3z M31,24c-4.3,0-7.6,3.2-7.6,7.1
	c0,1.1,0.3,2.2,0.7,3.1L34.8,25C33.6,24.4,32.4,24,31,24z M124.5,0c-5.4,0-10.6,1.4-15,3.8C104.3,6.7,98,6.7,92.8,3.9
	C88.4,1.4,83.2,0,77.8,0c-5.5,0-10.6,1.4-15,3.9c-5.2,2.9-11.5,2.8-16.7-0.1C41.6,1.4,36.5,0,31,0C13.8,0-0.1,14,0,31.2
	c0.1,17.1,14,31,31.1,31c5.5,0,10.6-1.4,15-3.9c5.1-2.9,11.4-2.9,16.6,0c4.5,2.5,9.6,3.9,15,3.9c5.5,0,10.6-1.4,15-3.9
	c5.1-2.9,11.4-2.9,16.6,0c4.5,2.5,9.6,3.9,15,3.9c17.1,0,31.1-13.9,31.1-31C155.6,14,141.7,0,124.5,0z M44.6,22.3l-2.8,2.5
	c1.4,1.9,2.1,4.1,2.1,6.4c0,6.4-5.8,11.6-12.9,11.6c-2.7,0-5.2-0.7-7.4-2.1l-1,0.9c-0.6,0.5-1.2,0.8-1.9,0.8h-2.3
	c-0.9,0-1.5-0.4-1.5-1.2c0-0.4,0.2-0.8,0.6-1.2l2.8-2.4c-1.4-1.9-2.2-4-2.2-6.4c0-6.4,5.7-11.6,12.8-11.6c2.8,0,5.3,0.7,7.6,2.2
	l1.1-1c0.6-0.5,1.2-0.8,1.9-0.8h2.3c0.9,0,1.5,0.4,1.5,1.1C45.3,21.5,45.1,21.9,44.6,22.3z M91.2,22l-11,11.6v7.2
	c0,0.9-0.6,1.5-1.5,1.5h-2c-0.9,0-1.5-0.6-1.5-1.5v-7.2L64.3,22c-0.3-0.3-0.4-0.6-0.4-0.9c0-0.7,0.4-1.2,1.2-1.2h3
	c0.8,0,1.3,0.2,1.8,0.9l7.9,8.6l7.9-8.6c0.6-0.7,1.1-0.9,1.9-0.9h3c0.7,0,1.2,0.4,1.2,1.2C91.6,21.5,91.5,21.8,91.2,22z M136.3,42.2
	h-2.4c-0.8,0-1.4-0.3-1.7-0.9l-1.7-3.5h-12.3l-1.7,3.5c-0.3,0.6-0.8,0.9-1.7,0.9h-2.3c-0.9,0-1.4-0.5-1.4-1.2c0-0.3,0.1-0.5,0.2-0.8
	l10-19.4c0.3-0.6,0.8-0.9,1.6-0.9h2.8c0.8,0,1.4,0.3,1.7,0.9l10,19.4c0.1,0.3,0.2,0.5,0.2,0.8C137.7,41.7,137.1,42.2,136.3,42.2z
	 M120.5,33.4h7.9l-3.9-8.1L120.5,33.4z"
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
              width="56px"
              height="56px"
              viewBox="0 0 56 56"
            >
              <title>{title}</title>
              <path
                fill={fill}
                d="M13.6,10.5c-1.9,0-3.3,1.4-3.3,3.1c0,0.5,0.1,0.9,0.3,1.4l4.6-4C14.8,10.7,14.2,10.5,13.6,10.5z M40.8,43.4h3.4l-1.7-3.5
L40.8,43.4z M12,16.3c0.5,0.3,1,0.4,1.6,0.4c1.9,0,3.3-1.4,3.3-3.1c0-0.5-0.1-0.9-0.3-1.3L12,16.3z M52.1,32.8
c-1.7-1.7-3.7-2.8-5.8-3.5c-2.5-0.7-4.4-2.6-5.2-5.1c-0.6-2.1-1.8-4.2-3.5-5.8c-1.7-1.7-3.7-2.8-5.8-3.5c-2.5-0.7-4.4-2.7-5.1-5.2
c-0.6-2-1.7-4.1-3.4-5.7C17.9-1.3,9.3-1.3,4,4s-5.3,13.9,0,19.2c1.7,1.7,3.7,2.8,5.8,3.5c2.5,0.7,4.4,2.6,5.1,5.1
c0.6,2.1,1.8,4.2,3.5,5.8c1.7,1.7,3.7,2.8,5.8,3.5c2.5,0.7,4.4,2.6,5.1,5.1c0.6,2.1,1.8,4.2,3.5,5.8c5.3,5.3,13.9,5.3,19.2,0
C57.4,46.8,57.4,38.2,52.1,32.8z M19.6,9.7l-1.2,1.1c0.6,0.8,0.9,1.8,0.9,2.8c0,2.8-2.5,5.1-5.6,5.1c-1.2,0-2.3-0.3-3.2-0.9L10,18.2
c-0.3,0.2-0.5,0.3-0.8,0.3H8.1c-0.4,0-0.6-0.2-0.6-0.5c0-0.2,0.1-0.3,0.3-0.5L9,16.4c-0.6-0.8-0.9-1.8-0.9-2.8
c0-2.8,2.5-5.1,5.6-5.1c1.2,0,2.3,0.3,3.3,1l0.5-0.4c0.3-0.2,0.5-0.3,0.8-0.3h1c0.4,0,0.6,0.2,0.6,0.5C19.9,9.4,19.8,9.6,19.6,9.7z
 M34,24.5l-4.8,5.1v3.1c0,0.4-0.3,0.6-0.6,0.6h-0.9c-0.4,0-0.6-0.3-0.6-0.6v-3.1l-4.8-5.1c-0.2-0.1-0.2-0.3-0.2-0.4
c0-0.3,0.2-0.5,0.5-0.5h1.3c0.3,0,0.6,0.1,0.8,0.4l3.4,3.7l3.4-3.7c0.3-0.3,0.5-0.4,0.8-0.4h1.3c0.3,0,0.5,0.2,0.5,0.5
C34.1,24.2,34.1,24.4,34,24.5z M47.7,47.3h-1c-0.4,0-0.6-0.1-0.7-0.4l-0.7-1.5h-5.4l-0.8,1.5c-0.1,0.3-0.4,0.4-0.7,0.4h-1
c-0.4,0-0.6-0.2-0.6-0.5c0-0.1,0-0.2,0.1-0.3l4.4-8.5c0.1-0.3,0.4-0.4,0.7-0.4h1.1c0.4,0,0.6,0.1,0.7,0.4l4.4,8.5
c0,0.1,0.1,0.2,0.1,0.3C48.3,47.1,48.1,47.3,47.7,47.3z"
              />
            </svg>
          </span>
        )
    }
  }
}
