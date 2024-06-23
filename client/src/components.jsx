
import {useRouteMatch, Link} from "react-router-dom";

function Home() {
    const match = useRouteMatch("/");

    return <section className="timestamp_wrapper">
        <h1 className="font_wrapper">Timestamp Generator</h1>
        <p>Accepted date formats:</p>
        <ul className="date_formats">
            <li>YYYY-MM-DD
                <ul>
                    <li><Link to="/1999-12-31">/1999-12-31</Link></li>
                </ul>
            </li>
            <li>-8640000000000000 &gt;= date (in milliseconds) &lt;= 8640000000000000
                <ul>
                    <li><Link to="/283247938183">/283247938183</Link></li>
                </ul>
            </li>
        </ul>
    </section>
}

export {Home};