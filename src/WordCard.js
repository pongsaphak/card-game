import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

export default class WordCard extends
    Component {
        render() {
            return (
                <div>
                    activationHandler = c => { console.log(`${c} has been activated.`) }
                    { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
                    <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>
                </div>
            );
        }
    }
