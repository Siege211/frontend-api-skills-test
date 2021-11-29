import * as React from 'react';
import {Route, Link} from 'react-router-dom';

interface Props {
    images: {
        full: string,
        medium: string,
        small: string
    },
    title: string,
    uuid: string,
    description: string,
    servings: number,
}

const Article: React.FC<Props> = ({images, title, uuid, description, servings}) => {
    return (
        <Link to={`/recipe/:${uuid}`}>
        {/* <Link to={`/recipe/:${title.replace(/ /g,"_")}`}></Link> */}
            <article className="card featured">
                {/* TODO remove: w_614,h_461/ */}
                <div className="box"><img src={`http://localhost:3001${images.small}`}/></div>
                <header className="card-content">
                    {/* <span className="card-category chicken">food category</span> */}
                    <span className="card-header">{title}</span>
                    <span className="card-desc">{description}</span>
                </header>
                <footer className="card-content">
                    <div className="servings"><span>serves {servings}</span></div>
                    <div className="bookmark"></div>
                </footer>
            </article>
        </Link>
    )
}


export default Article