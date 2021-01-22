import React from 'react';
import format from 'date-fns/esm/format'
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CopyText from "../../../Components/CopyText";
import {NATIONALITYHumanName} from "../../../constans/nationality";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const ContactTable = ({data}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>FullName</TableCell>
                        <TableCell>Birthday</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell align='right'>Nationality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.login.uuid}>
                            <TableCell component="th" scope="row">
                                <Avatar src={item.picture.medium} alt='avatar'/>
                            </TableCell>
                            <TableCell>{item.name.title + '.' + item.name.first + item.name.last}</TableCell>
                            <TableCell>
                                <Typography>
                                    {format(new Date(item.dob.date), 'MM/dd/yyyy')}</Typography>
                                <Typography>{item.dob.age} years</Typography>
                            </TableCell>
                            <TableCell><CopyText>{item.email}</CopyText></TableCell>
                            <TableCell><CopyText>{item.phone}</CopyText></TableCell>
                            <TableCell>
                                <Typography>{item.location.country}</Typography>
                                <Typography>{item.location.city}</Typography>
                            </TableCell>
                            <TableCell>{NATIONALITYHumanName[item.nat]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactTable;