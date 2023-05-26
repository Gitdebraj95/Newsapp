import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
  }
  async componentDidMount(props){
    this.props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=12`;
   
    this.setState({loading: true});    
    let data = await fetch(url);
    this.props.changeProgress(30);
    let parseddata = await data.json();
    this.props.changeProgress(70);
    this.setState({articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false});
    this.props.changeProgress(100);
  }

  fetchMoreData = async (props)=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=12`;
    this.setState({page: this.state.page + 1});
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false
    });
  }
  render() {    
    return (
      <div>
        <div className="container" style={{marginTop: '70px'}}>
          <h1 className="text-center">NewsMonkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={this.state.loading && <Spinner/>}
        >
          <div className="container my-4">
          <div className="row my-4">
            {!this.state.loading && this.state.articles.map((ele)=>{
              return <div className="col-md-4 my-4">
                <NewsItem title={ele.title?ele.title:'No title found'} description={ele.description?ele.description:'No description found'} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} time={ele.publishedAt} source={ele.source.name}/>
              </div>
            })}
            </div>
          </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;
