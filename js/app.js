

'use strict';

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

window.ee	=	new	EventEmitter();

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

var AddNews = React.createClass({

    getInitialState: function() {

        return {
            authorEmpty: true,
            textEmpty: true,
            ruleUnchecked: true
        };
    },

    componentDidMount:	function()	{
        ReactDOM.findDOMNode(this.refs.author).focus();
    },

    onBtnClickHandler: function (e) {

        e.preventDefault();
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = textEl.value;
        var item = [
            {author: author,
                text: text,
                bigText: '...'
            }
        ];

        /*	Сгенерируй	событие	'News.add'	и	передай	в качестве	данных	-	item. 	*/

        window.ee.emit('News.add',	item)

        textEl.value = '';
        this.setState({textEmpty:	true});
    },

    onFieldChange: function(fieldName, e){

        if (e.target.value.trim().length > 0) {
            this.setState({['' + fieldName]: false})
        } else {
            this.setState({['' + fieldName]: true})
        }
    },

    onCheckChange: function (e) {
        this.setState({ruleUnchecked: !this.state.ruleUnchecked});
    },

    render: function(){

        var authorEmpty = this.state.authorEmpty,
            textEmpty = this.state.textEmpty,
            ruleUnchecked = this.state.ruleUnchecked;

        return (
            <form className='add cf'>
                <input type='text'
                       onChange={this.onFieldChange.bind(this, 'authorEmpty')}
                       className='add__author' defaultValue=''
                       placeholder='Ваше имя'
                       ref='author'
                />
                <textarea onChange={this.onFieldChange.bind(this, 'textEmpty')}
                          className='add__text' defaultValue=''
                          placeholder='Текст новости'
                          ref='text'/>
                <input type='checkbox'
                       onChange={this.onCheckChange}
                       defaultChecked={false}
                       ref='checkrule' />
                <label className='add__checkrule'> Я согласен с правилами </label>
                <button onClick={this.onBtnClickHandler}
                        className='add__btn'
                        ref='insert-news_button'
                        disabled={authorEmpty || textEmpty || ruleUnchecked}>

                    Добавить новость

                </button>
            </form>

        )
    }
});

var App = React.createClass({

    getInitialState: function() {

        return {
            news: my_news
        };
    },

    componentDidMount: function () {
        /*	Слушай	событие	"Создана	новость" если событие произошло, обнови	this.state.news	*/

        var self = this;
        window.ee.addListener('News.add', function (item) {
            var nextNews = item.concat(self.state.news); /*	Мы	создали	новый массив, в	котором	первым элементом поставили новую новость, чтобы	она	была верхней в списке.
             */
            self.setState({news: nextNews});
        });
    },
    componentWillUnmount: function () {
        /*	Больше	не	слушай	событие	"Создана	новость"	*/
        window.ee.removeListener('News.add');
    },

    render: function () {
        return (
            <div className="app">
                <h3 className="title">News</h3>
                <AddNews/>
                <News  data={this.state.news}  />
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);