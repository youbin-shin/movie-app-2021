import React from "react";

class Detail extends React.Component {
    // 영화 클릭없이 url에 수동적으로 이동할 경우 state가 없다
    // 이 경우 componentDidMount로 state가 있는지 확인하고
    // history를 이용하여 홈으로 보내준다. => redirect
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/')
        }
    }
    render() {
        const { location } = this.props
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail