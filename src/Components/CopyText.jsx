import React from 'react';
import PropTypes from 'prop-types'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {useCopyToClipboard} from "react-use";
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        cursor: 'pointer',
        display: 'flex',
        alignItem: 'center'
    },
    icon: {
        marginRight: theme.spacing(1),
    }
}))

const CopyText = ({children}) => {
    const [, copyClipBoard] = useCopyToClipboard();
    const [statusCopy, setStatusCopy] = React.useState('copy');
    const getToolTipTitle = () => {
        switch (statusCopy){
            case "copy":
                return 'Copy'
            case 'copied':
                return 'Copied'
            default:
                return '';
        }
    }
    const onClickCopy = React.useCallback(() => {
        copyClipBoard(children)
        setStatusCopy('copied')
    },[copyClipBoard, children])

    const onClickAway = React.useCallback(() => {
        setStatusCopy('copy')
    },[setStatusCopy])

const classes = useStyles();
    return (
        <ClickAwayListener onClickAway={onClickAway}>
        <Tooltip title={getToolTipTitle()} arrow>
        <Button className={classes.root} onClick={onClickCopy}>
            <FileCopyIcon className={classes.icon} fontSize='small'/>
            {children}
        </Button>
        </Tooltip>
        </ClickAwayListener>
    );
};
CopyText.propTypes = {
    children: PropTypes.string.isRequired,
}
export default CopyText;