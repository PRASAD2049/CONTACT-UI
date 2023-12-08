import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import useHttp from "../../../hooks/use-http";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";

const ContactList = () => {

    const [contactList, setContactList] = useState([]);

    const navigate = useNavigate();

    const { isLoading, error, sendRequest: fetchContactList } = useHttp();

    // async function fetchContactList() {

    //     setIsLoading(true);

    //     setError(null);

    //     // fetch('assets/data/contact-list.json')
    //     // .then((response) => response.json())
    //     // .then((response) => {
    //     //     console.log('contact List', response);

    //     //     setContactList(response);
    //     // })

    //     //2nd way
    //     try {
    //         const response = await fetch('assets/data/contact-list.json');

    //         if (!response.ok) {
    //             throw new Error('Something went wrong')
    //         }

    //         const data = await response.json();

    //         setContactList(data.contacts[0].contacts);


    //     } catch (error) {

    //         setError(error.message);

    //     }

    //     setIsLoading(false);


    // }

    function handleClick(contact) {

        const path = `/contact/${contact.id}`;

        navigate(path);
        
    }

    useEffect(() => {


        const receiveContacts = (data) => {

            setContactList(data.contacts[0].contacts);

        }

        fetchContactList({
            url: '/assets/data/contact-list.json'
        }, receiveContacts);

    }, [fetchContactList])



    return (
        <React.Fragment>
            {isLoading && <p>Data is loading. Please wait</p>}
            {!isLoading && contactList.length > 0 && !error && <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow key={'table'}>
                            <TableCell>Name</TableCell>
                            <TableCell>Account Details</TableCell>
                            <TableCell>Last Activity</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contactList.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                    <br />
                                    <Chip label={row.entity.name} />

                                </TableCell>
                                <TableCell>
                                    {
                                        row.contactInfo.accountMapInfo.map((account,index) => {

                                            return (
                                                <div key={index}>
                                                    <span>{account.contactAccount.name} *{account.contactAccount.accountNo
                                                        .slice(-4)}</span>
                                                </div>
                                            )

                                        })
                                    }


                                </TableCell>
                                <TableCell>

                                    {
                                        row.contactInfo.accountMapInfo.map((account) => {

                                            return (
                                                <div>
                                                    <span>{account.contactAccount.lastActivity && account.contactAccount.lastActivity.activityInfo.userDateTime}</span>
                                                    &nbsp;
                                                    <span>{account.contactAccount.lastActivity && account.contactAccount.lastActivity.activityInfo.desc}</span>
                                                </div>
                                            )

                                        })
                                    }

                                </TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right">
                                    <KeyboardArrowRightIcon onClick={() => {handleClick(row)}} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
            {!isLoading && contactList.length === 0 && !error && <p>No data available</p>}
            {!isLoading && error && <p>{error}</p>}
        </React.Fragment>
    )

}

export default ContactList;