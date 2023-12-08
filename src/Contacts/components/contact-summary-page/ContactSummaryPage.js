import { Link } from "react-router-dom";
import SharedPage from "../../../Shared/components/shared-page/SharedPage";
import ContactList from "../contact-list/ContactList";
import ContactTypes from "../contact-types/ContactTypes";

function ContactSummaryPage(){

    return (
        <SharedPage>
            <div className="align-right">
                <Link to={'/contact/add'}>Add Contact</Link>
            </div>
            <ContactTypes></ContactTypes>
            <ContactList></ContactList>
        </SharedPage>
    )

}

export default ContactSummaryPage;