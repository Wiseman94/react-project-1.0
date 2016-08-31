var my_news = [

    {
        author: 'Саша	Печкин',
        text: 'В	четверг,	четвертого	числа...',
        bigText:	'в	четыре	с	четвертью	часа	четыре	чёрненьких	чумазеньких	чертёнка	чертили	чёрными	чернилами	чертёж.'
    },
    {
        author: 'Просто	Вася',
        text: 'Считаю,	что	$	должен	стоить	35	рублей!',
        bigText:	'А	евро	42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно.	Скачать.	Лучший	сайт	-	http://localhost:3000',
        bigText:	'На	самом	деле	платно,	просто	нужно	прочитать	очень	длинное	лицензионное	соглашение'
    }
];

// my_news = [];

var Article = React.createClass ({

    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },

    getInitialState: function() {

        return {
            visible: false
        }
    },

    readMore: function(e){
        e.preventDefault();
        this.setState(
            {
                visible: true
            }
        )
    },

    render : function() {

        var author = this.props.data.author;
        var text = this.props.data.text;
        var bigText = this.props.data.bigText;
        var visible = this.state.visible;

        return (

         <div className="article">
             <p className="news-author">{author}</p>
             <p className="news-text">{text}</p>
             <a href="#" onClick={this.readMore} className={"news-readmore " + (visible ? 'none' : '')}>Read more</a>
             <p className={"news-bigtext " + (visible ? '': 'none')}>{bigText}</p>
         </div>
        )
    }
});

var News = React.createClass({

    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    getInitialState: function() {

        return {
            counter: 0
        }
    },

    clickCounter: function(){

        this.setState({counter: ++this.state.counter});
    },

    render: function () {

        var data = this.props.data;
        var newsTemplate;

        if(data.length > 0) {
            newsTemplate = data.map(function(item,index){

                return (

                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            });
        } else {

        newsTemplate = <div>No news to show</div>

        }

        return (
            <div className="news">
                {newsTemplate}
                 <div onClick={this.clickCounter} className={'news__count ' + (data.length > 0 ? '':'none')}>Total news count:{data.length}</div>

            </div>
        )
    }

});

var TestInput = React.createClass({


    showValue: function() {
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    },

    render: function(){

        return (
            <div>
                <input type="text" defaultValue="" ref="myTestInput" className="test-input" placeholder="Enter value"/>
                <button onClick={this.showValue} ref="alert-button" className="input-btn">Show value</button>
            </div>

        )
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3 className="title">News</h3>
                <TestInput	/>
                <News  data={my_news}  />
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);