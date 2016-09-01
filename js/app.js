

// my_news = [];

var Card = React.createClass ({

    getInitialState: function(){
        return{

        }
    },

    componentDidMount: function(){
        var component = this;
        jQuery.get('https://api.github.com/users/' + this.props.login, function(data) {
            component.setState(data);
        });
    },

   render: function(){
       return(
           <div className="user">
               <img src={this.state.avatar_url} alt="" width="80px"/>
               <h3 className="name">{this.state.name}</h3>
               <hr/>
           </div>
       )
   }
});

var Form = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();

        var loginInput = ReactDOM.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value)
    },

    render: function(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Login" ref="login"/>
                <button>Add</button>
            </form>
        )
    }
});

var Main = React.createClass({

    getInitialState: function(){
        return{
            logins: []
        };
    },

    addCard: function(loginToAdd){

        this.setState({
            logins: this.state.logins.concat(loginToAdd)
        })

    },

    render: function () {

        var cards = this.state.logins.map(function(login,index){
            return(
                <Card login={login} key={index}/>
            )
        });

        return (
            <div>
                <Form addCard={this.addCard}/>
                {cards}
            </div>
        )
    }

});

ReactDOM.render(
    <Main/>,
    document.getElementById('content')
);