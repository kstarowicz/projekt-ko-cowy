import React from "react";
import "../../variables/pictures/bike.png"
import "../../variables/pictures/iphone.png"
import "../../variables/pictures/drill.png"
import "./MainPage.scss";

export default function MainPage(){
    //karuzela
    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })

    //główna treść
    return (
        <div className="main-content content-main-page">
            <div className="welcome-slogan">
                <h2>Witamy w serwisie<br/>Sprawdzam</h2>
            </div>
            <div className="carousel">
                <button className="carousel-button prev">&#8656;</button>
                <button className="carousel-button next">&#8658;</button>
                <ul>
                    <li className="slide">
                        <img src="../../variables/pictures/bike.png" alt="rower"/>
                    </li>
                    <li className="slide">
                        <img src="../../variables/pictures/iphone.png" alt="telefon"/>
                    </li>
                    <li className="slide">
                        <img src="../../variables/pictures/drill.png" alt="wiertarka"/>
                    </li>
                </ul>
            </div>
        </div>
    )
    //stopka

}




//aruzela
/*var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  class Carousel extends React.Component {

      constructor(props) {
          super(props)
          this.state = {
              items: this.props.items,
              active: this.props.active,
              direction: ''
          }
          this.rightClick = this.moveRight.bind(this)
          this.leftClick = this.moveLeft.bind(this)
      }

      generateItems() {
          var items = []
          var level
          console.log(this.state.active)
          for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
              var index = i
              if (i < 0) {
                  index = this.state.items.length + i
              } else if (i >= this.state.items.length) {
                  index = i % this.state.items.length
              }
              level = this.state.active - i
              items.push(<Item key={index} id={this.state.items[index]} level={level} />)
          }
          return items
      }

      moveLeft() {
          var newActive = this.state.active
          newActive--
          this.setState({
              active: newActive < 0 ? this.state.items.length - 1 : newActive,
              direction: 'left'
          })
      }

      moveRight() {
          var newActive = this.state.active
          this.setState({
              active: (newActive + 1) % this.state.items.length,
              direction: 'right'
          })
      }

      render() {
          return(
              <div id="carousel" className="noselect">
                  <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                  <ReactCSSTransitionGroup
                      transitionName={this.state.direction}>
                      {this.generateItems()}
                  </ReactCSSTransitionGroup>
                  <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
              </div>
          )
      }
  }

  class Item extends React.Component {

      constructor(props) {
          super(props)
          this.state = {
              level: this.props.level
          }
      }

      render() {
          const className = 'item level' + this.props.level
          return(
              <div className={className}>
                  {this.props.id}
              </div>
          )
      }
  }

  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))*/