import { Link } from "react-router-dom";

const NotFound = () => <>
    <div className="container">
        <h1>La pagina che cercavi non esiste</h1>
        <Link to="/">Torna alla Home Page</Link>
    </div>
</>

export default NotFound;