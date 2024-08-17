import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
  let {title,description,imgUrl,NewsUrl,author,date}=this.props;
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>
        
  <img src={imgUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small class="text-muted">By {author} on date {new Date(date).toGMTString()}</small></p>

    <a href={NewsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  } 
}

export default Newsitem
