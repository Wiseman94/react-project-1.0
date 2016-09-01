

'use strict';

var my_news = [
    {
        "author": "OwensPotter",
        "text": "In fugiat consequat aute do anim commodo excepteur proident nisi mollit labore sunt eu est. Eiusmod cillum id aliqua Lorem ad aliquip eu culpa culpa velit esse amet consectetur. Mollit commodo eiusmod ut aute labore aliquip mollit irure fugiat. Fugiat qui eiusmod aliquip duis proident consectetur ut. Est excepteur ullamco commodo duis commodo proident.\r\n",
        "bigText": "Consectetur eiusmod est incididunt et voluptate irure duis et reprehenderit dolor. Ipsum sunt commodo dolor ut sint laboris reprehenderit laborum consequat nisi in tempor amet. Est ullamco reprehenderit pariatur laborum. Eiusmod adipisicing laboris incididunt consectetur pariatur est in id dolor. Non consectetur tempor irure ipsum velit mollit esse nostrud voluptate amet cupidatat magna anim.\r\n",
        "date": "11:29 20.06.90"
    },
    {
        "author": "AudreyBush",
        "text": "Esse eu ex labore eu velit adipisicing aute. Ipsum aute duis eiusmod reprehenderit eu dolor magna labore ex. Consectetur consequat est adipisicing qui dolor sint in laboris ex incididunt proident.\r\n",
        "bigText": "Pariatur duis sit excepteur tempor exercitation reprehenderit in irure labore laborum ullamco est labore. Tempor do aute adipisicing tempor est ad laboris fugiat enim dolore. Cupidatat irure pariatur dolor aute laboris laborum exercitation.\r\n",
        "date": "04:46 09.04.02"
    },
    {
        "author": "WebsterSanford",
        "text": "Et velit labore deserunt cillum pariatur ad pariatur cupidatat voluptate qui excepteur sit consectetur. Deserunt cupidatat laboris minim veniam commodo voluptate. Nostrud reprehenderit consequat qui consectetur magna Lorem do ex pariatur. Est aliqua consequat culpa dolore ullamco id ipsum proident est laborum pariatur dolor. Reprehenderit consequat et labore non. Dolore duis aute laborum pariatur incididunt. Nulla tempor in adipisicing id et elit sunt.\r\n",
        "bigText": "Velit laboris voluptate culpa occaecat ex sunt sit sint. Et deserunt fugiat elit ut commodo irure laboris. Et cillum pariatur sit duis amet quis ad laborum sit Lorem incididunt cillum nostrud ex.\r\n",
        "date": "22:47 05.09.78"
    },
    {
        "author": "BurksMccall",
        "text": "Voluptate quis amet cillum ex mollit id nisi. Et aute veniam officia eu commodo ea nulla eiusmod ipsum tempor. Sit nisi aliqua officia aliquip elit qui ut labore nisi sint commodo velit. Labore quis veniam dolor commodo dolore fugiat esse est. Ipsum aliqua enim ullamco laborum anim quis nostrud id consectetur culpa magna.\r\n",
        "bigText": "Consectetur fugiat commodo nisi deserunt fugiat culpa consectetur dolor tempor sint duis reprehenderit ex officia. Sit dolore eiusmod deserunt ad eu culpa id laborum commodo consequat ex sunt. Labore excepteur ut et voluptate ex qui quis tempor excepteur sit reprehenderit cillum. Adipisicing officia irure magna adipisicing laboris enim commodo voluptate sunt ex commodo. Laboris tempor mollit sint officia in labore cupidatat laborum tempor tempor dolor voluptate sint. Mollit occaecat id eiusmod aute Lorem et proident anim consequat non nostrud incididunt eu.\r\n",
        "date": "14:37 09.03.83"
    },
    {
        "author": "LauriHarmon",
        "text": "Sunt deserunt fugiat laboris sunt exercitation veniam. Velit tempor in nisi non anim sit fugiat dolor elit. Aliqua consequat excepteur velit aliqua deserunt in. Do ut amet irure labore enim elit veniam proident.\r\n",
        "bigText": "Magna ipsum nulla qui in dolore ut consectetur. Minim eiusmod laboris pariatur ut ullamco minim amet eu nostrud Lorem irure. Enim magna ullamco elit consequat consequat esse ipsum ad amet proident. Quis consequat est ullamco aliqua magna. Reprehenderit Lorem mollit quis adipisicing.\r\n",
        "date": "07:15 27.11.07"
    },
    {
        "author": "FannyValenzuela",
        "text": "Velit fugiat eiusmod sit ex sunt laboris. Exercitation amet est reprehenderit consequat ea. Cillum sunt tempor consectetur incididunt. Voluptate tempor ex proident velit eiusmod. Sit laborum cillum cillum ipsum. Cillum irure id laborum id aliquip sunt in et aliqua esse et laboris. Ex dolor Lorem duis nulla elit qui est ullamco pariatur laborum velit et.\r\n",
        "bigText": "Nostrud nostrud consectetur deserunt amet. Nulla id proident fugiat cillum dolor dolor nostrud quis quis sunt. Voluptate cupidatat incididunt minim mollit aliquip laboris eiusmod velit fugiat proident nostrud. Aute in veniam nisi dolore nulla proident proident Lorem eiusmod sunt occaecat anim id. Ullamco aliquip cillum eiusmod occaecat irure culpa in.\r\n",
        "date": "20:43 19.05.86"
    },
    {
        "author": "SavageNorris",
        "text": "Quis culpa ut ad fugiat velit sint labore ex. Consequat tempor ullamco aute aute cillum proident veniam excepteur cupidatat tempor elit ex ea enim. Ullamco ut et quis labore cillum sint commodo anim. Id proident cupidatat quis nisi irure. Nulla labore excepteur ullamco magna ex excepteur mollit do. Anim labore irure sunt do dolore deserunt laboris qui est consequat aliqua officia.\r\n",
        "bigText": "Irure ad amet consequat ad aute tempor ad irure sint. Enim elit fugiat elit voluptate ex culpa anim aliquip reprehenderit non excepteur irure labore duis. Exercitation quis irure enim voluptate laboris nisi sunt elit culpa voluptate reprehenderit cillum cillum velit. Proident laborum ad dolor consectetur laboris ullamco cillum culpa ea ut ad labore sit. Enim nulla laborum commodo labore velit ex eu. Aliquip nisi quis dolore et sint quis veniam consectetur occaecat nulla adipisicing ullamco aliquip.\r\n",
        "date": "12:34 18.11.14"
    },
    {
        "author": "RichmondAlvarez",
        "text": "Eu sunt irure irure tempor ad id occaecat quis exercitation ut dolore occaecat. Tempor cillum elit consequat eiusmod ad eu. Adipisicing eiusmod eiusmod adipisicing sit incididunt nulla magna nostrud enim. Eiusmod anim minim aliquip aliqua.\r\n",
        "bigText": "Non do est id reprehenderit anim elit magna exercitation qui nulla. Eiusmod irure eu ut esse pariatur elit est adipisicing deserunt ad nisi deserunt do. Anim ea pariatur pariatur deserunt sint et aliquip amet. Fugiat ut qui ex non esse incididunt sunt adipisicing commodo dolore et consectetur.\r\n",
        "date": "10:47 20.10.86"
    },
    {
        "author": "JudithMitchell",
        "text": "Reprehenderit nostrud officia consequat qui id ipsum qui. Occaecat esse irure nostrud Lorem laborum aliquip tempor culpa eiusmod. Irure mollit nulla exercitation deserunt minim quis incididunt nulla proident culpa non sunt.\r\n",
        "bigText": "Dolor nostrud consequat ea adipisicing non eu excepteur fugiat pariatur. Enim velit est sunt exercitation officia mollit proident qui minim mollit in. Incididunt dolore dolore culpa amet magna laboris non. Qui excepteur esse non adipisicing. Cillum qui mollit voluptate deserunt do sint.\r\n",
        "date": "03:48 26.03.91"
    },
    {
        "author": "LydiaFord",
        "text": "Ipsum sint non do est adipisicing nisi qui sunt non aute sint sunt tempor. In esse duis aliqua sint incididunt ut fugiat et pariatur laborum sit nisi consequat. Laboris labore nostrud tempor aliquip cillum. Qui amet enim sint eiusmod duis laborum tempor ut occaecat sint mollit officia labore elit. Duis esse quis officia in laboris cupidatat.\r\n",
        "bigText": "Aute nisi elit qui incididunt deserunt esse proident excepteur pariatur id. Lorem officia magna anim nostrud voluptate. Amet officia irure Lorem aliquip. Id amet nulla excepteur fugiat ut.\r\n",
        "date": "10:59 30.10.93"
    },
    {
        "author": "BeatriceRamsey",
        "text": "Lorem sint aliquip velit voluptate reprehenderit est. Magna ad eiusmod est eu ad. Incididunt consequat qui cupidatat adipisicing fugiat anim excepteur sit voluptate non mollit labore. Aliquip cillum officia reprehenderit deserunt magna ea id. Occaecat velit consequat incididunt consequat esse enim non. Labore esse sit id voluptate sunt ut deserunt eiusmod nulla ea aliqua minim proident fugiat.\r\n",
        "bigText": "Culpa incididunt exercitation enim eiusmod. Ex enim ea eiusmod sunt adipisicing nulla ipsum labore. Tempor labore aliquip eu exercitation elit nisi irure ipsum anim sit. Amet enim consequat tempor dolore duis voluptate ad nisi laborum nostrud. Pariatur eu incididunt esse nisi deserunt voluptate quis do cupidatat incididunt nostrud occaecat esse.\r\n",
        "date": "00:22 04.07.97"
    },
    {
        "author": "ElisabethRay",
        "text": "Do cupidatat consequat nulla do adipisicing irure Lorem deserunt Lorem fugiat ullamco anim exercitation nulla. Incididunt ex culpa dolor eu veniam proident dolore pariatur minim non culpa ad fugiat. Lorem proident eiusmod ex nulla dolore amet anim mollit mollit eiusmod.\r\n",
        "bigText": "Irure adipisicing ullamco est non elit irure aliquip dolor amet magna aute ut. Duis est proident laborum duis veniam commodo enim laboris nulla dolore elit amet. Laborum labore ea tempor excepteur Lorem mollit dolore reprehenderit aliqua dolor. Exercitation velit cupidatat anim culpa id reprehenderit dolore laboris consequat. In aliqua consectetur ex ut nisi. Exercitation excepteur magna cupidatat veniam eiusmod eu consequat id. Pariatur cillum minim occaecat aliqua nulla non culpa fugiat.\r\n",
        "date": "02:12 26.07.71"
    },
    {
        "author": "TraceyWilkins",
        "text": "Pariatur aliqua in fugiat aliqua dolor fugiat laborum in proident cillum ad cillum. Dolor laboris anim sunt ex esse sit ut deserunt in. Lorem cupidatat non pariatur magna incididunt amet sint sit mollit aute. Et anim Lorem proident ex velit eiusmod. Do sit enim aliquip aliquip ullamco sunt qui. Occaecat voluptate dolore commodo laboris Lorem anim.\r\n",
        "bigText": "Velit qui voluptate ipsum labore mollit nostrud labore dolor aliqua esse laboris fugiat consectetur qui. Do esse ea proident mollit occaecat aliquip velit consectetur voluptate consectetur proident dolor pariatur. Quis proident mollit amet qui minim minim consectetur ullamco deserunt excepteur officia Lorem amet officia. Cupidatat sint velit et pariatur enim ipsum proident.\r\n",
        "date": "03:01 05.12.09"
    },
    {
        "author": "ChasityOrtega",
        "text": "Excepteur velit esse dolor Lorem sint fugiat reprehenderit deserunt cillum excepteur voluptate anim deserunt. Deserunt pariatur non excepteur ex sit eu irure quis minim in minim Lorem velit. Aute reprehenderit irure ad est sint cillum sint sint ut. Fugiat laboris incididunt incididunt aliquip irure commodo veniam sunt velit aute esse.\r\n",
        "bigText": "Ea aliquip esse cupidatat velit ullamco. Elit et occaecat minim deserunt occaecat labore amet ad tempor. Deserunt ad cupidatat ad laboris. Do non amet ullamco duis pariatur magna nisi. Anim magna ex excepteur esse laboris deserunt tempor culpa dolor fugiat. Aute occaecat dolor eiusmod anim ullamco consectetur excepteur sunt minim do occaecat pariatur ad.\r\n",
        "date": "21:19 30.09.78"
    },
    {
        "author": "CarterGlenn",
        "text": "Id aute sunt proident voluptate reprehenderit in sunt nisi esse et. Eiusmod cillum laboris proident aute ad non proident consectetur. Ut laboris aliquip laborum eiusmod do nulla esse sit consectetur nulla id ut ad. Incididunt pariatur voluptate eiusmod ut amet reprehenderit minim anim aliqua et. Elit quis sint consectetur tempor sunt aliquip nisi cillum ullamco laborum fugiat.\r\n",
        "bigText": "Fugiat non incididunt Lorem nulla dolor consectetur pariatur enim laboris magna consectetur sit id consectetur. Laborum amet sint officia reprehenderit. Id ea ipsum nostrud dolore qui ex mollit consequat ea est laborum aute nisi. Nisi qui culpa cupidatat pariatur nostrud fugiat consectetur magna id. Adipisicing cupidatat mollit incididunt qui exercitation adipisicing culpa consectetur.\r\n",
        "date": "13:27 11.05.07"
    },
    {
        "author": "AlissaStafford",
        "text": "Nulla anim fugiat proident consectetur proident veniam excepteur excepteur reprehenderit mollit ipsum mollit. Anim sunt nostrud culpa aute ipsum esse irure incididunt ad pariatur qui laborum. Do commodo pariatur duis culpa mollit et tempor nisi cillum mollit elit dolor est aliquip. Exercitation eiusmod laboris veniam labore sit amet eiusmod cupidatat excepteur adipisicing ex. Exercitation nisi quis adipisicing nostrud ut culpa sunt esse commodo. Sint ea in elit sunt. Enim do elit cupidatat adipisicing.\r\n",
        "bigText": "Magna occaecat proident pariatur pariatur. Est pariatur reprehenderit cillum cillum pariatur ex ea. Voluptate quis consectetur sunt ad veniam veniam elit quis velit esse est fugiat.\r\n",
        "date": "12:30 01.09.89"
    },
    {
        "author": "ChavezCharles",
        "text": "Consequat eu commodo occaecat veniam excepteur commodo officia amet incididunt. Duis ex minim duis sit sit aute commodo commodo non aliquip dolore aute officia minim. Laborum consectetur amet eiusmod eu nisi ullamco in laborum. Voluptate magna cupidatat cillum voluptate. Sint proident voluptate labore deserunt ea qui enim fugiat voluptate deserunt id nisi fugiat. Eu veniam aute sint qui dolor magna laboris qui esse aliqua. Nostrud culpa excepteur eu duis enim.\r\n",
        "bigText": "Aliquip aute labore commodo consequat enim adipisicing ipsum dolor commodo incididunt. Velit eiusmod proident eu est qui. Velit ea ullamco adipisicing anim anim.\r\n",
        "date": "18:45 28.06.09"
    },
    {
        "author": "ZamoraShaw",
        "text": "Duis eiusmod ullamco eiusmod velit labore tempor. Laboris ut nisi tempor laborum sint ullamco. Sunt officia minim pariatur amet Lorem labore non.\r\n",
        "bigText": "Cillum exercitation dolore irure elit aliquip. Deserunt commodo nulla cupidatat laborum commodo ipsum consequat exercitation elit aliqua ex. Dolore ullamco consectetur aute deserunt excepteur laborum amet elit. Veniam Lorem consequat tempor ea magna amet velit ut incididunt veniam adipisicing sunt.\r\n",
        "date": "11:21 18.06.92"
    },
    {
        "author": "MaciasCruz",
        "text": "Aute sint officia aliquip aliquip do in amet aliqua nostrud est pariatur duis. Culpa ut labore occaecat fugiat ex id consectetur veniam dolor ad eu aliqua nostrud et. Eu sit aute eiusmod eu veniam qui non laboris dolor deserunt. Laboris cillum commodo est anim non. Labore est nostrud irure exercitation dolore ea aliquip dolore qui incididunt. Voluptate fugiat commodo culpa ipsum non mollit do aliqua consectetur. Sunt voluptate deserunt laborum dolore do non sit deserunt.\r\n",
        "bigText": "Esse do qui excepteur consequat irure consectetur ipsum cupidatat. In dolore nisi ex adipisicing reprehenderit esse ad consequat ad tempor. Aliqua ut eiusmod in esse non laboris irure adipisicing exercitation ex. Cupidatat exercitation id elit consectetur commodo deserunt laborum amet occaecat. Dolor elit aliqua sit dolore.\r\n",
        "date": "17:00 01.05.96"
    },
    {
        "author": "MejiaHouse",
        "text": "Cillum velit incididunt nulla aute irure proident anim elit esse aliqua labore. Aliquip excepteur consectetur veniam consectetur pariatur consequat aute pariatur. Duis pariatur pariatur excepteur labore ea ut id consequat duis. Incididunt est incididunt cillum do anim ullamco magna. Reprehenderit elit enim pariatur ex anim fugiat mollit sit nulla. Aliqua irure nostrud adipisicing cillum sit sint fugiat. Ex excepteur ex aliqua eiusmod nisi eu fugiat sint cillum labore irure non consequat incididunt.\r\n",
        "bigText": "Ad occaecat aliquip aute magna sit aliquip irure laboris voluptate incididunt excepteur. Fugiat tempor laboris enim anim aliquip eiusmod enim ad et incididunt do et voluptate in. Dolore cupidatat labore ex nulla. Consequat eiusmod irure non quis laboris quis. Exercitation cillum ut mollit tempor est non tempor ut. Fugiat adipisicing fugiat amet aute.\r\n",
        "date": "06:56 14.03.01"
    }
];

console.log(my_news);

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
        var date = this.props.data.date;
        var visible = this.state.visible;

        return (

            <div className="article-wrap">
                <div className="article">
                    <p className="news-author">{author}</p>
                    <p className="news-text">{text}</p>
                    <a href="#" onClick={this.readMore} className={"news-readmore " + (visible ? 'none' : '')}>Read more</a>
                    <p className={"news-bigtext " + (visible ? '': 'none')}>{bigText}</p>
                    <p className="news-date">{date}</p>
                </div>
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

    render: function () {

        var data = this.props.data;
        var newsTemplate;

        if(data.length > 0) {
            newsTemplate = data.map(function(item,index){

                return (

                    <Article data={item} key={index}/>
                )
            });
        } else {

            newsTemplate = <div>No news to show</div>

        }

        return (
            <div className="news-section">
                <div className="news">
                    {newsTemplate}
                </div>

                <div className={'news__count ' + (data.length > 0 ? '':'none')}>
                    Total news count:{data.length}
                </div>
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

        window.ee.emit('News.add',	item);

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
        // var date = new Date();

        var authorEmpty = this.state.authorEmpty,
            textEmpty = this.state.textEmpty,
            ruleUnchecked = this.state.ruleUnchecked;

        return (
            <form className='add cf'>
                <input type='text'
                       onChange={this.onFieldChange.bind(this, 'authorEmpty')}
                       className='add__author' defaultValue=''
                       placeholder='Your name'
                       ref='author'
                />
                <textarea onChange={this.onFieldChange.bind(this, 'textEmpty')}
                          className='add__text' defaultValue=''
                          placeholder='Type your news'
                          ref='text'/>

                <div className="news-checkbox">

                    <label>
                        <input id='checkbox' type='checkbox'
                               onChange={this.onCheckChange}
                               defaultChecked={false}
                               ref='checkrule' />
                        I agree
                    </label>
                </div>

                <button onClick={this.onBtnClickHandler}
                        className='add__btn'
                        ref='insert-news_button'
                        disabled={authorEmpty || textEmpty || ruleUnchecked}>

                    Add news

                </button>
            </form>

        )
    }
});

var App = React.createClass({

    newsAuthorSearch: function(event) {
        var inputValue = event.target.value.toLowerCase();
        var filterNews = my_news.filter(function(el){

            var searchedValue = el.author.toLowerCase();

            return searchedValue.indexOf(inputValue) !== -1;
        });

        this.setState({
            news: filterNews
        })

    },

    newsTextSearch: function(event) {
        var inputValue = event.target.value.toLowerCase();
        var filteredNews = my_news.filter(function(el){

            var searchedValue = el.text.toLowerCase();

            return searchedValue.indexOf(inputValue) !== -1;
        });

        this.setState({
            news: filteredNews
        })

    },

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
            console.log(self.state.news);
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

                <div className="news-search">
                    <input type="text" onChange={this.newsAuthorSearch} className="news-search-field" placeholder="Search by author"/>
                    <input type="text" onChange={this.newsTextSearch} className="news-search-field" placeholder="Search by key-words"/>
                </div>

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