import React from "react";
import "../About/about.css"
import { Transition, animated } from 'react-spring/renderprops' 

const defaultStyles = {
    overflow: 'hidden',
    width: '100%',
    color: 'white',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
    
  }


  export default class About extends React.PureComponent {

    state = { items: [],

    }

    async componentDidMount() {
        this.t1 && clearTimeout(this.t1)
        this.t2 && clearTimeout(this.t2)
        this.t3 && clearTimeout(this.t3)
    
        this.setState({ items: [<h2>Roy Davis</h2>] })
        this.t1 = setTimeout(
          () => this.setState({ items: [<h4>Full Stack</h4>] }),
          1500
        )
        this.t2 = setTimeout(
          () => this.setState({ items: [<h4>Web Developer</h4>] }),
          3000
        )
        this.t3 = setTimeout(() => this.setState({ items: [<h2>Roy Davis</h2>, "Full Stack", "Web Developer"] }), 4500)
      }

    render(){
    return (
        <div id="about">
            <Transition
          items={this.state.items}
          //initial={null}
          from={{ overflow: 'hidden', height: 0, opacity: 0 }}
          enter={{ height: 50, opacity: 1 }}
          leave={{ height: 0, opacity: 0 }}
          trail={200}>
          {item => styles => (
            <animated.div style={{ ...defaultStyles, ...styles }}>
              {item}
            </animated.div>
          )}
        </Transition>
            
            <div className="container"  onClick={() => this.componentDidMount()}>
                <div className="row">
                    <div className="col s6">
                        <div id="roy-picture">
                            <img src={"./images/roy.png"} alt="" />
                        </div>
                    </div>

                    <div className="col s6">
                        <div id="about-text">
                            <p>Full Stack Web Developer with extensive retail experience. Graduate of the University of Central Florida Coding Boot Camp with skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, AJax, JSON, Node.js, Express.js, Mysql,
                    Mongo DB and React.js. Degree in Computer IT from  Valencia College. My goal as a developer is to create intuitive user experiences, develop responsive websites, and create visually stunning websites.</p> <p> My background in retail has given me invaluable experience working in a team environment and putting the needs of the customer first.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
    }
}
