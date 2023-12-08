import { useNavigate, useParams } from "react-router-dom";

export function ContactDetailPage() {

    const params = useParams();
    const navigate = useNavigate();
console.log('params', params);

function editHandler(){

    const path = `/contact/edit/${params.id}`;
    navigate(path);

}
    return (
        <div>
            <h2>Detail page of {params.id}</h2>
            <button type="button" onClick={editHandler}>Edit</button>
        </div>
    )

}