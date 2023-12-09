import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import SharedPage from "../../../Shared/components/shared-page/SharedPage";

export function ContactDetailPage() {

    const params = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState([]);

    const { isLoading, error, sendRequest: fetchContact } = useHttp();

    const { isDelteReqLoading, deleteError, sendRequest: deleteContact } = useHttp();


    useEffect(() => {

        const receiveContacts = (data) => {

            setContact(data.response);

        }

        fetchContact({
            url: `contact/${params.id}`,
            headers: {
                "Content-Type": "application/json"
            }
        }, receiveContacts);


    }, [fetchContact])

    function editHandler() {

        const path = `/contact/edit/${params.id}`;

        navigate(path);

    }

    function handleResponse(data) {

        const path = `/contact/summary`;

        navigate(path);
    }

    function deleteHandler() {

        deleteContact({
            url: `contact/${params.id}`,
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }, handleResponse);
        

    }

    return (
        <SharedPage>
        <div>

            {isLoading && <p>Data is loading. Please wait</p>}
            {!isLoading && <div>
                <div className="d-flex">
                    <h2>Contact</h2>
                    <div className="flex-spacer"></div>
                    <button type="button" onClick={editHandler}>Edit</button>
                    <button type="button" onClick={deleteHandler}>Delete</button>
                
                </div>
                <div className="d-flex">
                    <div className="col-3">
                        Name
                    </div>
                    <div className="col-9">
                        {contact.name}
                    </div>
                </div>
                <div className="d-flex">
                <div className="col-3">
                        Alias
                    </div>
                    <div className="col-6">
                        {contact.alias}
                    </div>
                </div>
            </div>
            }
        </div>
        </SharedPage>
    )

}