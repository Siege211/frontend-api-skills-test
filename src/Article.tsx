import * as React from 'react';
import {Route, Link} from 'react-router-dom';

interface Props {
    recipe?: Array<string>
    images: {
        full: string,
        medium: string,
        small: string
    },
    title?: string,
    uuid: string
}

const Article: React.FC<Props> = ({images, title, uuid}) => {
    return (
        <Link to={`/recipe/:${uuid}`}>
        {/* <Link to={`/recipe/:${title.replace(/ /g,"_")}`}></Link> */}
            <article className="card featured">
                {/* TODO remove: w_614,h_461/ */}
                <div className="box"><img src={`http://localhost:3001${images.small}`}/></div>
                <header className="card-content">
                    <span className="card-category chicken">food category</span>
                    <span className="card-header">recipe name</span>
                    <span className="card-desc">recipe short description goes here.</span>
                </header>
                <footer className="card-content">
                    <div className="contributor"><span className="contributor-name">by <a href="#">Bryan</a></span></div>
                    <div className="bookmark"></div>
                </footer>
            </article>
        </Link>
    )
}


export default Article