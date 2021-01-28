import React from 'react';
import ToggleButton from "@material-ui/lab/ToggleButton";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const ToggleViewMod = ({dataViewMod, setDataViewMod,  DATA_VIEW_MODES}) => {
    const handleAlignment = React.useCallback((event, newAlignment) => {
        setDataViewMod(newAlignment)
    },[setDataViewMod])
    return (
            <ToggleButtonGroup value={dataViewMod}
                               exclusive
                               aria-label='left aligned'
                               onChange={handleAlignment}>
                <ToggleButton value={DATA_VIEW_MODES.TABLE} aria-label="left aligned">
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value={DATA_VIEW_MODES.GRID} aria-label='right aligned'>
                    <ViewModuleIcon />
                </ToggleButton>
            </ToggleButtonGroup>

    );
};

export default ToggleViewMod;