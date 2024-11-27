import React from 'react';
import { Grid2 } from '@mui/material';
import CustomCard from './CustomCard';

const DataList = ({ data }) => (
    console.log(data),
    <Grid2 container justifyContent="center" alignItems="center">
        {data.map((item, index) => (
            <CustomCard key={index} title={item.title} body={item.body} />
        ))}
    </Grid2>
);

export default DataList;