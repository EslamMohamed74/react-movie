import React, { Component } from "react";


import "./LoadMore.css";

class LoadMore extends Component {

    render() {
        return (
            <div className="rmdb-loadmorebtn">
                <button id="loadMore" type="button" onClick={this.props.loadMore}>Load more</button>
            </div>
        );
    }
}

export default LoadMore;