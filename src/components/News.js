import React, { Component, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
//import Carousel from './Carousel'


export class News extends Component {
static defaultProps={
    country:'in',
    pagesize:6,
    category:'general'
  }
  static propTypes={

    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string 
  }
  articles =[    {
    "source": {
      "id": "reuters",
      "name": "Reuters"},
    
    "author": "Reuters",
    "title": "US Steel to explore strategic alternatives after unsolicited bids - Reuters.com",
    "description": "United States Steel  said on Sunday it is initiating a formal review to evaluate strategic alternatives for the steel producer after receiving multiple unsolicited bids for part …",
    "url": "https://www.reuters.com/markets/commodities/us-steel-explore-strategic-alternatives-company-2023-08-13/",
    "urlToImage": "https://www.reuters.com/resizer/UDQIH6oQAb-DQdRrB1Oknw3zBg8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/X5DKHT4P7BJIDPMETRNEMMLZDM.jpg",
    "publishedAt": "2023-08-13T20:08:00Z",
    "content": "Aug 13 (Reuters) - United States Steel (X.N) said on Sunday it is initiating a formal review to evaluate strategic alternatives for the steel producer after receiving multiple unsolicited bids for pa… [+1418 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "YouTube"
    },
    "author": null,
    "title": "Rainbow Six Siege - Official 'Ram Takes The Tower Back' Anime Trailer - IGN",
    "description": "Rainbow Six Siege is introducing Ram to the fold with Operation Heavy Mettle. Take a look at the latest anime trailer where we see Ram going head-to-head wit...",
    "url": "https://www.youtube.com/watch?v=qZ2hc3KsSwQ",
    "urlToImage": "https://i.ytimg.com/vi/qZ2hc3KsSwQ/maxresdefault.jpg",
    "publishedAt": "2023-08-13T19:45:02Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "Gurman: Apple Planning Major 'Apple Watch X' Redesign to Introduce New Band System and More - MacRumors",
    "description": "Apple is planning a complete revamp of the Apple Watch for the device's tenth anniversary, according to Bloomberg's Mark Gurman.   In the...",
    "url": "https://www.macrumors.com/this,props.pagesize23/08/13/gurman-apple-watch-x-redesign-planned/",
    "urlToImage": "https://images.macrumors.com/t/XdaV_-3VoCGLtnbfoJldxfrJlPc=/1600x/article-new/this,props.pagesize22/09/f1662570472.jpg",
    "publishedAt": "2023-08-13T18:43:33Z",
    "content": "Apple is planning a complete revamp of the Apple Watch for the device's tenth anniversary, according to Bloomberg's Mark Gurman.\r\nIn the latest edition of his \"Power On\" newsletter, Gurman dubs the o… [+1885 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "NewOrleansSaints.com"
    },
    "author": null,
    "title": "Halftime update - NewOrleansSaints.com",
    "description": "Quarterback Derek Carr leads first-team offense on touchdown drive on opening series",
    "url": "https://www.neworleanssaints.com/news/new-orleans-saints-score-kansas-city-chiefs-2023-nfl-preseason-week-1-halftime",
    "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/saints/bhqa49zxouemwlrmw0wn",
    "publishedAt": "2023-08-13T18:24:45Z",
    "content": "Coach Dennis Allen saw enough and pulled all of his offensive starters after the first score and then watched his backups roll to a 17-7 halftime lead. Backup quarterback Jameis Winston threw a 29-ya… [+901 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "New York Post"
    },
    "author": "Associated Press",
    "title": "Popular weight-loss drugs like Wegovy may raise risk of complications under anesthesia: experts - New York Post ",
    "description": "Patients who take blockbuster drugs like Wegovy or Ozempic for weight loss may face life-threatening complications if they need surgery or other procedures that require empty stomachs for anesthesi…",
    "url": "https://nypost.com/this,props.pagesize23/08/13/weight-loss-drugs-like-wegovy-may-raise-risk-of-complications-under-anesthesia/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/this,props.pagesize23/08/wegovy-ozempic-anesthesia-comp.jpg?quality=75&strip=all&1691932439&w=1024",
    "publishedAt": "2023-08-13T17:42:00Z",
    "content": "Patients who take blockbuster drugs like Wegovy or Ozempic for weight loss may face life-threatening complications if they need surgery or other procedures that require empty stomachs for anesthesia.… [+5975 chars]"
  },
  {
    "source": {
      "id": "politico",
      "name": "Politico"
    },
    "author": null,
    "title": "Hunter Biden's attorney expects 'no new evidence' to be found by special counsel - POLITICO",
    "description": "Attorney General Merrick Garland granted special counsel status to David Weiss, the federal prosecutor who has overseen the years-long investigations into Hunter Biden.",
    "url": "https://www.politico.com/news/this,props.pagesize23/08/13/hunter-biden-attorney-special-counsel-00110990",
    "urlToImage": "https://static.politico.com/9f/2c/261a10d248f1957190205ff00758/biden-investigation-03311.jpg",
    "publishedAt": "2023-08-13T17:26:26Z",
    "content": "One, they wrote something and werent clear what they meant; two, they knew what they meant and misstated it to counsel; or, third, they changed their view as they were standing in court in Delaware, … [+1526 chars]"
  },
  {
    "source": {
      "id": "politico",
      "name": "Politico"
    },
    "author": null,
    "title": "Trump supporters and DeSantis super PAC officials spar at a Des Moines dive - POLITICO",
    "description": "A MAGA fan, a Never Back Downer and primary campaign emotions walk into a bar...",
    "url": "https://www.politico.com/news/this,props.pagesize23/08/13/trump-desantis-supporters-spar-iowa-bar-00110992",
    "urlToImage": "https://static.politico.com/07/9d/e889b8d54104a2f1c6a3a89b8678/election-2024-iowa-state-fair-70987.jpg",
    "publishedAt": "2023-08-13T17:14:33Z",
    "content": "The tension at the fairgrounds underscored just how vitriolic the primary season has grown between the two camps a reflection of the sharp-elbowed approach that each candidate has made central to the… [+2292 chars]"
  },
  {
    "source": {
      "id": "entertainment-weekly",
      "name": "Entertainment Weekly"
    },
    "author": null,
    "title": "Tom Jones, lyricist of long-running musical 'The Fantasticks,' dies - Entertainment Weekly News",
    "description": null,
    "url": "https://ew.com/theater/tom-jones-dead-the-fantasticks-lyricist/",
    "urlToImage": "https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/6/this,props.pagesize23/08/13/Tom-Jones-081323-01-2.jpg&w=640&h=360&q=90&c=cc",
    "publishedAt": "2023-08-13T17:05:00Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "The Action Network"
    },
    "author": "PJ Walsh",
    "title": "NASCAR Odds | Best Bet Pick for Indianapolis (Sunday, Aug. 13) - The Action Network",
    "description": "Read about NASCAR odds and our best bet pick for Indianapolis on Sunday, Aug. 13, 2023.",
    "url": "https://www.actionnetwork.com/nascar/nascar-odds-indianapolis-picks-predictions-sunday-august-13-2023",
    "urlToImage": "https://images.actionnetwork.com/blog/this,props.pagesize23/08/michael-mcdowell-1.jpg",
    "publishedAt": "2023-08-13T16:54:00Z",
    "content": "As a fan, I'm very excited about Sunday's NASCAR Cup Series Verizon 200 (2:30 p.m. ET, NBC) at Indianapolis Motor Speedway.\r\nThis circuit, which is the road course at Indianapolis, has produced some … [+1587 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "KESQ"
    },
    "author": "Tatum Larsen",
    "title": "Heavy traffic near Joshua Tree due to Perseid Meteor Shower - kuna noticias y kuna radio",
    "description": "Heavy traffic is expected through the end of the weekend near Joshua Tree National Park as people try to get clearer view of the Perseid meteor shower. To read Spencer Blum's full breakdown of what the Perseid Meteor Shower is, click here. Getting a clear vie…",
    "url": "https://kesq.com/news/this,props.pagesize23/08/13/heavy-traffic-near-joshua-tree-due-to-perseid-meteor-shower/",
    "urlToImage": "https://kesq.b-cdn.net/this,props.pagesize23/08/MGN_1280x960_10812P00-AIPZD.jpg",
    "publishedAt": "2023-08-13T16:51:58Z",
    "content": "Heavy traffic is expected through the end of the weekend near Joshua Tree National Park as people try to get clearer view of the Perseid meteor shower. \r\nTo read Spencer Blum's full breakdown of what… [+596 chars]"
  },
  {
    "source": {
      "id": "usa-today",
      "name": "USA Today"
    },
    "author": "Francisco Guzman",
    "title": "Nordstrom robbery: 'mob' steals up to $100k in Los Angeles, California - USA TODAY",
    "description": "A “mob of criminals” stole between $60,000 to $100,000 worth of merchandise from a Los Angeles, California, Nordstrom, police said.",
    "url": "https://www.usatoday.com/story/news/nation/this,props.pagesize23/08/13/nordstrom-robbery-los-angeles-california/70584637007/",
    "urlToImage": "https://www.usatoday.com/gcdn/presto/this,props.pagesize23/07/28/USAT/4231264e-5cdf-4c80-9dc6-2f525f3055bd-GettyImages-1399782865_2.jpg?crop=2120,1193,x0,y107&width=2120&height=1193&format=pjpg&auto=webp",
    "publishedAt": "2023-08-13T16:43:27Z",
    "content": "California police said a mob of criminals stole up to $100,000 worth of items from a Los Angeles mall Saturday afternoon.\r\nA group of people entered the Westfield Topanga Shopping Center in Los Angel… [+2673 chars]"
  },
  {
    "source": {
      "id": "fortune",
      "name": "Fortune"
    },
    "author": "Lance Lambert",
    "title": "Housing market outlook: Where to expect mortgage rates in 2024, according to 8 leading research firms - Fortune",
    "description": "On Friday, the average 30-year fixed mortgage rate jumped to 7.19%. But where will it go next?",
    "url": "https://fortune.com/this,props.pagesize23/08/13/housing-market-mortgage-rate-outlook-prediction-2024/",
    "urlToImage": "https://content.fortune.com/wp-content/uploads/this,props.pagesize23/08/GettyImages-171212132-e1691943827247.jpg?resize=1200,600",
    "publishedAt": "2023-08-13T16:25:00Z",
    "content": "On Friday, the average 30-year fixed mortgage rate jumped to 7.19%. Over the past few months, mortgage rates have climbed back up. Financial markets, which have reacted to stronger-than-expected labo… [+3033 chars]"
  },
  {
    "source": {
      "id": "newsweek",
      "name": "Newsweek"
    },
    "author": "Ellie Cook",
    "title": "Crimea Bridge Strikes 'Continue To Disrupt' Russian Logistics: ISW - Newsweek",
    "description": "Ukraine has pledged throughout its fight against Moscow to retake the annexed Crimean peninsula in the Black Sea.",
    "url": "https://www.newsweek.com/ukraine-russia-crimea-bridge-chonhar-kerch-strait-logistics-1819386",
    "urlToImage": "https://d.newsweek.com/en/full/2269018/crimea-kerch-bridge.jpg",
    "publishedAt": "2023-08-13T15:55:08Z",
    "content": "Kyiv's strikes on key bridges linking the annexed Crimean peninsula to southern Ukraine and to mainland Russia are impacting Moscow's ability to move resources and fend off Ukraine's ongoing countero… [+2928 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "SciTechDaily"
    },
    "author": null,
    "title": "Breaking Physics: Muon G-2 Experiment Reinforces Surprise Result, Setting Up “Ultimate Showdown” - SciTechDaily",
    "description": "Findings at Fermilab show discrepancy between theory and experiment, which may lead to new physics beyond the Standard Model. Physicists now have a brand-new measurement of a property of the muon called the anomalous magnetic moment that improves the precisio…",
    "url": "https://scitechdaily.com/breaking-physics-muon-g-2-experiment-reinforces-surprise-result-setting-up-ultimate-showdown/",
    "urlToImage": "https://scitechdaily.com/images/Sub-Atomic-Particle-Quantum-Physics-Art-Illustration.jpg",
    "publishedAt": "2023-08-13T15:33:40Z",
    "content": "ByFermi National Accelerator LaboratoryAugust 13, 2023\r\nFermilabs Muon g-2 experiment has unveiled a new precision measurement of the muons magnetic property, hinting at undiscovered particles and a … [+10610 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "New York Post"
    },
    "author": "Carl Campanile",
    "title": "Erie County refuses NYC migrants after two sex assaults at Buffalo-area hotels - New York Post ",
    "description": "In a stunning development, Democratic Mark Poloncarz said he’s refusing to accept any more migrants from NYC after two sexual assault incidents occurred at Buffalo-area hotels housing asylum …",
    "url": "https://nypost.com/this,props.pagesize23/08/13/ny-erie-county-denies-nyc-migrants-amid-sex-assaults-by-buffalo/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/this,props.pagesize23/08/newspress-collage-uh7ho8950-1691939764483.jpg?quality=75&strip=all&1691925419&w=1024",
    "publishedAt": "2023-08-13T15:18:00Z",
    "content": "Upstate Democratic Erie County Executive Mark Poloncarz said he’s refusing to accept any more migrants from New York City after two sexual assault incidents occurred at Buffalo-area hotels housing as… [+4506 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hollywood Reporter"
    },
    "author": "Pamela McClintock",
    "title": "Box Office: ‘Barbie’ and ‘Oppenheimer’ Lead (Again), ‘Last Voyage of the Demeter’ Capsizes With $6.5M - Hollywood Reporter",
    "description": "'Barbie' scores one of the best fourth weekends of all time domestically with $33.7 million, ahead of 'Spider-Man: No Way' home and just behind 'The Avengers.'",
    "url": "https://www.hollywoodreporter.com/movies/movie-news/barbie-oppenheimer-box-office-voyage-demeter-1235562270/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/this,props.pagesize23/08/Barbie-Oppenheimer-The-Last-Voyage-of-the-Demeter-Split-Everett-H-2023.jpg?w=1024",
    "publishedAt": "2023-08-13T15:16:25Z",
    "content": "Barbie continues to bedazzle everything in its path.\r\nThe Warner Bros. blockbuster grossed an estimated $33.7 million at the Aug. 11-13 box office in North America, the ninth-biggest fourth weekend o… [+4146 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "YouTube"
    },
    "author": null,
    "title": "Jey Uso lays out Roman Reigns and his brother Jimmy - WWE",
    "description": "After spearing Roman Reigns, Jey Uso superkicks his brother Jimmy for good measure.Stream WWE on Peacock https://pck.tv/3ZTjVE7 in the U.S. and on WWE Networ...",
    "url": "https://www.youtube.com/watch?v=HQdV5u1Q8dQ",
    "urlToImage": "https://i.ytimg.com/vi/HQdV5u1Q8dQ/maxresdefault.jpg",
    "publishedAt": "2023-08-13T15:00:13Z",
    "content": null
  },
  {
    "source": {
      "id": "politico",
      "name": "Politico"
    },
    "author": null,
    "title": "Rep. Raskin expresses faith in justice system to resolve Hunter Biden case - POLITICO",
    "description": "\"This is why we have a Justice Department,\" he said.",
    "url": "https://www.politico.com/news/this,props.pagesize23/08/13/raskin-hunter-biden-trump-00110977",
    "urlToImage": "https://static.politico.com/71/9a/aa29684f4551a3dda1c284e5da52/house-oversight-irs-whistleblowers-hearing-76667.jpg",
    "publishedAt": "2023-08-13T14:57:09Z",
    "content": "Raskin said the upgraded status for Weiss, who was appointed to his position by former President Donald Trump, serves to formalize his authority to pursue a case against Biden, wherever it may lead. … [+1792 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Rolling Stone"
    },
    "author": "Joseph Hudak",
    "title": "Morgan Wallen Shaves His Mullet — and Hopefully Kills a Hairstyle That Overstayed Its Welcome - Rolling Stone",
    "description": "It’s hair today, gone tomorrow for the country singer who was synonymous with the Tennessee waterfall",
    "url": "https://www.rollingstone.com/music/music-country/morgan-wallen-cuts-off-his-mullet-hair-1234806114/",
    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/this,props.pagesize23/08/GettyImages-1426805983-3.jpg?w=1600&h=900&crop=1",
    "publishedAt": "2023-08-13T14:49:01Z",
    "content": "Morgan Wallen will always be known for more than a few things — including bringing the mullet hairstyle back into fashion. But no more. When Wallen took the stage Friday night at Ohio Stadium in Colu… [+1888 chars]"
  },
  {
    "source": {
      "id": "associated-press",
      "name": "Associated Press"
    },
    "author": "CLAIRE RUSH, BEATRICE DUPUY, JENNIFER SINCO KELLEHER",
    "title": "As death toll from Maui wildfire reaches 93, effort to find and identify the dead is just beginning - The Associated Press",
    "description": "Authorities are warning that the effort to find and identify the dead in the Maui wildfire is just beginning. The blaze that razed a historic town and killed at least 93 people is already the deadliest U.S. wildfire in more than a century. Maui Police Chief J…",
    "url": "https://apnews.com/article/maui-hawaii-lahaina-deadliest-wildfire-fb2ebf6cd39c149a582b82eed6ac3930",
    "urlToImage": "https://dims.apnews.com/dims4/default/db3d7e9/2147483647/strip/true/crop/3900x2194+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F77%2Fe4%2F7243cefdb05aaa826605f63dec1a%2F8021c1cb27f84ef999c865ce6b543b19",
    "publishedAt": "2023-08-13T14:25:00Z",
    "content": "LAHAINA, Hawaii (AP) As the death toll from a wildfire that razed a historic Maui town climbed to 93, authorities warned that the effort to find and identify the dead was still in its early stages. T… [+6578 chars]"
  }
  ]
  constructor(){
    super();
    console.log("hello I am a constructor");
    this.state={
     
      articles:this.articles,
       loading:false,
       imgu:this.articles.urlToImage,
       page:1
    }
  }
 async componentDidMount(){

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cc6debfb4174276ac32f61b50c7f847&page=1&pagesize=${this.props.pagesize}`
    this.setState({
      loading:true
      });
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      imgu:parsedData.articles[0].urlToImage,
      loading:false
    })

  } 
 handleNext=async()=>{
if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pagesize))){


  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cc6debfb4174276ac32f61b50c7f847&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
  this.setState({
    loading:true
    });
  let data= await fetch(url);
  let parsedData= await data.json();
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles,
    imgu:parsedData.articles[0].urlToImage,
  loading:false})
  }

  }
  handlePrev=async()=>{

   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cc6debfb4174276ac32f61b50c7f847&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({
    loading:true
    });
    let data= await fetch(url);
    let parsedData= await data.json();
      this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      imgu:parsedData.articles[0].urlToImage,
    loading:false
  })
  }
  render() {
    return (<>
    {/*this.state.articles.map((element)=>{
 return<Carousel imgUrl={element.urlToImage} />})*/}
      <div className="container my-3">
        <h2 className='text-center'style={{margin: '40px 0px'}} >Newser-Top Headlines!</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!(this.state.loading)&&this.state.articles.map((element)=>{
      return  <div className="col-md-4"  key={element.url}>  
        <Newsitem  title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,90):"                                                        "} imgUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FG2QFNo2_fOr8yEvUa1lDyadNdpbfXf8ao6qkjtHrw0MWJqd439KQbhJoQ8osQgRgOw&usqp=CAU"} NewsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"}/>
       
        </div>  
       })}
</div>
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrev}> &laquo;Previous</button>
        <button  disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &raquo;</button>
      </div>
      </>
    )
  }
}

export default News
