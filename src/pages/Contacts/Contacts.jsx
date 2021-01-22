import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Container} from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useContacts } from "./useContacts";
import Typography from "@material-ui/core/Typography";
import ContactTable from "./ContactsTable/ContactTable";
import LinearProgress from "@material-ui/core/LinearProgress";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

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

const DATA_VIEW_MODES = {
    TABLE: "table",
    GRID: 'grid'
}

const Contacts = () => {
    const {data, loading, isError} = useContacts();
    const classes = useStyles();
    const [dataViewMod, setDataViewMod] = React.useState(DATA_VIEW_MODES.TABLE)
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
                <ToggleButtonGroup value={alignment}
                                   exclusive
                                   aria-label='left aligned'
                                   onChange={handleAlignment}>
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                   <ToggleButton value='right' aria-label='right aligned'>
                       <ViewModuleIcon />
                   </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            {dataViewMod === DATA_VIEW_MODES.TABLE ? <ContactTable data={data}/> : <div>grid</div>}
        </Grid>
        </Container>
    );
};

export default Contacts;