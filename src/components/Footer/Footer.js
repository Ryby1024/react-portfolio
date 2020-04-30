import React, {Component} from "react";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <p>Copyright: 2020 Roy Davis</p>
                    </div>
                </div>
            </footer>
        )
    }
}