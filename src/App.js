import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "Enter word or phrase here",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your pig latin translation will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)
// output --> ['alpha', 'through', 'yummy', 'squeal', 'queen', 'fry']
    
    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
    // ACTION ITEM: use "currentWord" as a starting point for your code
        console.log("currentWord:", currentWord)
// output --> alpha, through, yummy, squeal, queen, fry

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)
// if this works, we're good 
// make the words that start with vowels come out with 'way' at the end
// make the words that start with 'qu' keep those two letters together and end with 'ay'
// when code works, come back and add a punctuation part of the conditional statement
// when code works, come back and add the capitalization part of the function
// split the word into two parts, the one that gets moved backward and modified and the one that gets moved forward      

      if (currentWord[0] === "a" || 
      currentWord[0] === "e" ||
      currentWord[0] === "i" ||
      currentWord[0] === "o" ||
      currentWord[0] === "u" ) {
        return currentWord + "way"
      } else if (vowelsArray) {
        if (currentWord[0] === "q" && currentWord[1] === "u" ) {
          let firstSlice = currentWord.slice(0 ,2 )
          let secondSlice = currentWord.slice(2)
          let translatedWord = secondSlice + firstSlice + "ay" 
          return translatedWord
      } else {
        for(let i=0; i < currentWord.length; i++){
          if (currentWord[i] === "a"||
          currentWord[i]=== "e" ||
          currentWord[i]=== "i" ||
          currentWord[i]=== "o" ||
          currentWord[i]=== "u" ||
          currentWord[i]=== "y"
          ){
           let firstSlice = currentWord.slice(0, i)
           let secondSlice = currentWord.slice(i)
           console.log("firstSlice: ", firstSlice)
           console.log("secondSlice: ", secondSlice)
           let translatedWord = secondSlice + firstSlice + "ay"
           return translatedWord
      }
   }
  }
}
      // ### Rules of Pig Latin
      // - For words beginning with a vowel, add "way" to the end.
      // - For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
      // - If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
      // - "y" is treated like a vowel in appropriate circumstances.

      // your code here!

      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord

      
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "Enter word or phrase here",
      phraseTranslated: "This is where your pig latin translation will appear."
  
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter word or phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Burrito code by ~ Daddy.Jorge and Daddy.Frank ~ </footer>
      </>
    )
  }
}

export default App


// *Show off user interface* 
// Frank: what was your teams approach to solving this problem? 
  //We started by adding the code we know for a fact that we would need. Then we added pseudocode to guide us as we moved forward. We added code in increments and moved backwards when our page broke. 
// Did the initial approach work out in the end?
   //Negative, we had to restart and spend more time in the planning and researching portion of the code. We didn't get to add all the bells and whistles that we would have wanted to add. 