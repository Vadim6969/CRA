import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useContacts } from "./useContacts";
import Typography from "@material-ui/core/Typography";
import ContactTable from "./ContactsTable/ContactTable";
import LinearProgress from "@material-ui/core/LinearProgress";
import ToggleViewMod from "../../Components/ToggleViewMod";
import {useDataViewMod} from "./useDataViewMod";
import {DATA_VIEW_MODES} from "../../constans/DATA_VIEW_MODES";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(3),
    },
    headContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(3)
    },

}))



const Contacts = () => {
    const {data, loading, isError} = useContacts();
    const classes = useStyles();
    const {dataViewMod, setDataViewMod} = useDataViewMod();

    if (loading) {
        return <LinearProgress />
    }
    if (isError) {
        return <div>ERROR</div>
    }
    return (
        <Container className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.headContainer}>
                <Typography variant='h4' component='h1'>
                    Contacts
                </Typography>
                <ToggleViewMod dataViewMod={dataViewMod}
                               setDataViewMod={setDataViewMod}
                               DATA_VIEW_MODES={DATA_VIEW_MODES}
                />
            </Grid>
            {dataViewMod === DATA_VIEW_MODES.TABLE ? <ContactTable data={data}/> : <div>grid</div>}
        </Grid>
        </Container>
    );
};

export default Contacts;