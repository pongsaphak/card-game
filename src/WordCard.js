import React, { Component } from 'react'; 

import CharacterCard from "./CharacterCard"; 
import _ from 'lodash'; 
const prepareStateFromWord = (given_word) => { 
      let word = given_word.toUpperCase() 
      let chars = _.shuffle(Array.from(word)) 
      return { 
          word, 
          chars, 
          attemt: 1, 
          guess: [], 
          completed: false 
      } 
} 
  export default class WordCard extends Component { 
      constructor(props){ 
          super(props) 
          this.state = prepareStateFromWord(this.props.value) 
      } 
      activationHandler = (c) => { 
          let guess = [this.state.guess]+c 
          this.setState({guess}) 
          if(guess.length === this.state.chars.length){ 
              if(guess === this.state.word){ 
                  this.setState({guess: [], completed: true}) 
              }else{ 
                  this.setState({guess: [], attemt: this.state.attemt + 1}) 
             } 
          } 
      } 
  
 
      render(){
        let className = `${this.state.completed ? 'status': 'again'}` 
          return( 
              <div className="App"> 
                  { 
                      Array.from(this.state.chars).map( 
                          (c, i) => <CharacterCard value = {c} key = {i} attemt={this.state.attemt} 
                          activationHandler = {this.activationHandler}/> 
                      ) 
                  } 
                  <dir className={className}> 
                      <h1>{this.state.completed? "" : "You want to know what is behide?"}</h1> 
                      <h3>{this.state.completed? "" : "Press correctly."}</h3> 
                      <p>Round : {this.state.attemt}</p> 
                      <p>{this.state.completed? "I Love Pun" : ""}</p> 
                      <p>{this.state.completed? "ปัญสิกรณ์ ติยะกร" : ""}</p>
                      <p>{this.state.completed? "ฉายา : ฉลาม" : ""}</p>
                      <p>{this.state.completed? "วันเกิด : 9 พฤศจิกายน 2543" : ""}</p>
                      <p>{this.state.completed? "ความสามารถพิเศษ : เต้น ร้องเพลง" : ""}</p> 
                      <p>{this.state.completed? "สีที่ชอบ : ดำ" : ""}</p>                     
                  </dir> 


              </div> 
          ) 
      } 
  } 
