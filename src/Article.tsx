import * as React from 'react';
import {Link} from 'react-router-dom';

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
        <Link to={`/recipe/:${uuid}`} className="link">
            <article className="card featured">
                <div className="box"><img src={`http://localhost:3001${images.small}`}/></div>
                <header className="card-content">
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