import { Link } from "react-router-dom";

export default function Horario({id, hora}){

    return(
        <Link data-test="showtime" to={`/assentos/${id}`}>
            <button>{hora}</button>
        </Link>
    );
}
