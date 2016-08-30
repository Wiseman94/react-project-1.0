var my_news = [

    {
        author: 'Саша	Печкин',
        text: 'В	четверг,	четвертого	числа...'
    },
    {
        author: 'Просто	Вася',
        text: 'Считаю,	что	$	должен	стоить	35	рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно.	Скачать.	Лучший	сайт	-	http://localhost:3000'
    }
];

// my_news = [];

var Article = React.createClass ({

    render : function() {

        var author = this.props.data.author;
        var text = this.props.data.text;

        return (

         <div className="article">
             <p className="news-author">{author}</p>
             <p className="news-text">{text}</p>
         </div>
        )
    }
});

var News = React.createClass({
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
                 <div className={'news__count ' + (data.length > 0 ? '':'none')}>Total news count:{data.length}</div>

            </div>
        )
    }

});

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3 className="title">News</h3>
                <News  data={my_news}  />
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);