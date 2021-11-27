import * as React from 'react';
interface Props {
    recipe?: Array<string>
    images: {
        full: string,
        medium: string,
        small: string
    },
    string?: string
}
const Article: React.FC<Props> = (props) => {
    return (
        <article className="card featured">
            {/* w_614,h_461/ */}
            <div className="box"><img src={`http://localhost:3001/img/queso_brat_scramble--s.jpg`}/></div>
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
    )
}


export default Article