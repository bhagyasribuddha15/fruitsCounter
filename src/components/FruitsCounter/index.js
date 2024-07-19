// Write your code here

import {Component} from 'react'

class FruitsCounter extends Component {
    state = {MangoCount : 0, BananaCount : 0}

    ClickMango = () => {
        const {MangoCount} = this.Mango
        this.setState(prevState => (MangoCount : {prevSate.MangoCount + 1}))

    }

    ClickBanana = () => {
        const {BananaCount} = this.Banana
        this.setState(prevState => (BananaCount : {prevSate.BananaCount + 1}))


    }

    render() {
      const {MangoCount,BananaCount} = this.state;
    
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">
            Bob ate {MangoCount} mangoes {BananaCount} bananas
          </h1>
          <div class="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <div>
              <button className="button" onClick = {this.ClickMango}>Eat Mango</button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <div>
              <button className="button" onClick = {this.ClickBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
