import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';


//Redux action
import { googleAuth } from '../Redux/Reducer/Auth/Auth.action';

const GoogleAuth = () => {
    const { token } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        if(token) {
            dispatchEvent(googleAuth(token)).then(() => history.push("/Delivery"));
        }
    }, [token]);

    return (
        <>
          LOADING...........  
        </>
    )
};

export default GoogleAuth;
