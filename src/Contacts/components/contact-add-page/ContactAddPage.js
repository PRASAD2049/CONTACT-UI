import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import ContactAddForm from "../contact-add-form/ContactAddForm";

function ContactAddPage() {

    const data = useLoaderData();
    // const data = useRouteLoaderData('editContact');

    
    return(
        <ContactAddForm defaultData={data}></ContactAddForm>
    )
}


export default ContactAddPage;

export async function ContactDetailLoader({request, params}) {

    // throw new Error('Error found');
    // throw {myError: 'Error Occurred'};
    // throw new Response(JSON.stringify({name: 'backend', 'message': 'Error occurred'}), {status: '500'})
    // throw new Response(json({name: 'backend', 'message': 'Error occurred'}), {status: '500'})

    const contactId = params.id;

    return new Promise((res,rej) => {

        setTimeout(() => {
            res({
                id: 'cnt1234'
            })
        }, 2000)


    })

}