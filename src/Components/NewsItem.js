// apiKey = 1e51d3227f6e47389e28b682efc40730 old
// apiKey = d7f26fae72c048dc8dc1950f65ba4179 new
import React from 'react'

const NewsItem = (props ) =>{


        let { title, description, imgUrl, newsUrl, author, date , source } =props;

        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display : 'flex', justifyContent : 'flex-end' , position : 'absolute', right: '0'}}>
                        <span className="badge rounded-pill bg-danger">
                            {source} 
                        </span>
                    </div>
                    <img src={!imgUrl ? "https://images.hindustantimes.com/tech/img/2023/02/16/1600x900/asterfolio-PjoJga8EovQ-unsplash_1645007221190_1676539212933_1676539212933.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem 
