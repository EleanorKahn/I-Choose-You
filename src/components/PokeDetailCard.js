import { Card, CardTitle, CardBody, CardSubtitle, CardText, CardImg } from "reactstrap";
import React from 'react';

const PokeDetailCard = ({ pokemon }) => {
    const { name, id, type } = pokemon;
    return (
        <p>My name is {name} and I am type {type} with an id of {id}</p>
    );
};

export default PokeDetailCard;