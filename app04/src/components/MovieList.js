import React from 'react';

const MovieList =({movie}) =>{
    return(
        <>
        <div className="card">
            <h5 className="card-header">{movie.no}</h5>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.date}</p>
                <a href="#" className="btn btn-primary mt">수정</a>
                <a href="#" className="btn btn-primary">삭제</a>
            </div>

            
            
            
        </div>
        </>
    ); 
}

export default MovieList;