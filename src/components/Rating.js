import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    var inc = false
    var dec = false
    if (this.props.rating < nextProps.rating) {
      inc = true
      dec = false
    } else if (this.props.rating > nextProps.rating) {
      inc = false
      dec = true
    }
    this.setState({
      increasing: inc,
      decreasing: dec
    })
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;