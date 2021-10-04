// import { SwipeableDrawer } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios.js'

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPeople(req.data)
        }

        fetchData();
    }, [])

    console.log(people);
    var matchedPeople = [];
    var unmatchedPeople = [];

    const swiped = (direction, nameToDelete) => {
        console.log("removing: "+ nameToDelete);
        if (direction==="left")  unmatchedPeople.push(nameToDelete);
        if (direction==="right")  matchedPeople.push(nameToDelete);
        console.log(direction);
        console.log("matchedPeople", matchedPeople);
        console.log("unmatchedPeople", unmatchedPeople);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                { people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["down", "up"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                     style={{ backgroundImage: `url(${person.imgUrl})` }} className="card"
                    >
                        <h3 className="person__name">{person.name}</h3>
                    </div>
                </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
