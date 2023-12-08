
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ContactTypes() {

    let contactTypes = [
        {
            type: 'All',
            title: 'All Contacts',
            count: 63
        },
        {
            type: 'Beneficiary',
            title: 'Beneficiaries',
            count: 54
        },
        {
            type: 'Employee',
            title: 'Employess',
            count: 9
        }
    ];

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                {
                    contactTypes.map((contactType, index) => {
                        return <Grid item xs={4} key={index}>
                            <Card>
                                <CardContent>
                                    <h2>{contactType.title}</h2>
                                    <span>{contactType.count}</span>
                                </CardContent>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )

}

export default ContactTypes;