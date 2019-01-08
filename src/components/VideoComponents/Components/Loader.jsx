import React from 'react';

export default class Video extends React.Component {
    render() {
        return (
            <div onClick={this.props.mouseFirstClick}
                 onMouseMove={this.props.setCoordinates}
                 className={this.props.loader}>
                <div className="loading__text">
                    <h1>Loading</h1>
                    <div className="three-bounce">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                </div>
            </div>
        )
    }
}