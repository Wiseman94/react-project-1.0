var Button = React.createClass({

    btnHandleClick: function(){

        this.props.btnHandleClick(this.props.increment);
    },

    render: function(){
        return(
         <button onClick={this.btnHandleClick} className="increment-btn btn">+{this.props.increment}</button>
        )
    }
});

var Result = React.createClass({

    render: function(){
        return (
            <div className="result">{this.props.counterResult}</div>
        )
    }
});

var Main = React.createClass({

    getInitialState: function(){
        return {counter: 0}
    },

    handleClick: function(increment){
        this.setState({counter: this.state.counter + increment});
    },

    render: function(){
        return (
            <div className="counter-section">
                <Button btnHandleClick={this.handleClick} increment={1}/>
                <Button btnHandleClick={this.handleClick}  increment={5}/>
                <Button btnHandleClick={this.handleClick}  increment={10}/>
                <Result counterResult={this.state.counter}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Main/>,
    document.getElementById('content')
);