
import {useState, useEffect} from "react";
import {useRouteMatch, Link, Switch, Route, useParams} from "react-router-dom";

function Home() {
    const match = useRouteMatch("/");

    return <>
        <section className="timestamp_wrapper">
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
        <Switch>
            <Route path="/:date">
                <Timestamps />
            </Route>
        </Switch>
    </>
}

function Timestamps() {
    const {params} = useRouteMatch("/:date");
    let [data, setData] = useState({});
    let className = (
        Object.keys(data).length === 2 ? "complete" :
        Object.keys(data).length === 1 ? "error" : "pending"
    );

    useEffect( () => {
        async function get_timestamps() {
            const response = await fetch(`https://timestamps-microservice.netlify.app/api/dates/${params.date}`, {
                credentials: "omit",
                mode: "cors"
            });
            if (!response.ok) {
                return {error: "Whoops...there's a problem getting timestamps!"}
            }
            const new_data = await response.json();
            setData(new_data);
        }
        get_timestamps();
        return

    }, [params.date]);

    return <>
        <div className={`status ${className}`}>
            {
                className === "complete" ? <>
                    <p className="timestamp">UNIX timestamp: {data['unix']}</p>
                    <p className="timestamp">UTC timestamp: {data['utc']}</p>
                </> : className === "error" ?
                    <p className="timestamp_error">{data['error']}</p> :
                    <p className="timestamp_pending_msg">Timestamps pending...</p>
            }
        </div>
    </>
}

export {Home, Timestamps};