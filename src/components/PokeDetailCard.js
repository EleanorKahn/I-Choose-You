import { Card, CardTitle, CardBody, CardSubtitle, CardText, CardImg } from "reactstrap";
import React from 'react';

const PokeDetailCard = ({ pokemon }) => {
    const { name } = pokemon;
    return (
        <Card>
            <CardTitle>My name is {name}</CardTitle>
            <CardBody>
                <CardText>I am a Pokemon</CardText>
            </CardBody>
        </Card>
    );
};

export default PokeDetailCard;