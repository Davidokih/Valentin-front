import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PairedUser = ({ pairName }) => {

    const [ pairedData, setPairedWith ] = useState({});

    const { id } = useParams();
    const URL = "http://localhost:1111/api/user";
    // const userID = pairName;
    const getPairUser = () => {
        axios.get(`${URL}/${id}/${pairName}`).then((res) => {
            console.log(res.data);
            setPairedWith(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    console.log(pairName);
    console.log(pairedData);

    useEffect(() => {
        getPairUser();
    }, []);
    return (
        <div>
            <div>{ pairedData.name }</div>
        </div>
    );
};

export default PairedUser;