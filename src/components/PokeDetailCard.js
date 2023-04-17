import { Card, CardTitle, CardBody, CardSubtitle, CardText, CardImg } from "reactstrap";
import React from 'react';

const PokeDetailCard = ({ pokemon }) => {
    const { name, id, type } = pokemon;
    return (
        <Card>
            <CardTitle>My name is {name}</CardTitle>
            <CardBody>
                <CardText>I am type {type} with an id of {id}</CardText>
            </CardBody>
        </Card>
    );
};

export default PokeDetailCard;