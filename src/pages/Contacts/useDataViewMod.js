import React from "react";
import {DATA_VIEW_MODES} from "../../constans/DATA_VIEW_MODES";


const getInitialDataViewMod = () => {
    return localStorage.getItem('dataViewMod') || DATA_VIEW_MODES.TABLE
}


export const useDataViewMod = () => {
    const [dataViewMod, setDataViewMod] = React.useState(getInitialDataViewMod)

    React.useEffect(() => {
        localStorage.setItem('dataViewMod', dataViewMod)
    },[dataViewMod])
    return {dataViewMod, setDataViewMod}
}
