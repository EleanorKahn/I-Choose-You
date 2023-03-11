import { Card, CardTitle, CardBody, CardSubtitle, CardText, CardImg } from "reactstrap";
import React from 'react';

const PokeDetailCard = () => {
    return (
        <Card>
            <CardTitle tag="h5">
                PokeName
            </CardTitle>
            <CardSubtitle>
                Poke Evolution maybe?
            </CardSubtitle>
            <CardBody>
                <CardImg src="../logo.svg" alt="react logo as placeholder"/>
                <CardText>              
                    Pokemon element affinity, stats, info etc
                </CardText>
            </CardBody>
        </Card>
    );
};

export default PokeDetailCard;