import "../Nav/nav.css";
import * as All from "../../assets/icons/icons.jsx"
import {Route,Link,Routes} from "react-router-dom"
export function Footer(){
    return (
    <footer className="ecommerce-footer">
        <h4 className="text">Connect with Developer</h4>
        
        <ul className="social-links-group">
            <li className="social-links">
               <a href="https://github.com/dev-ashishsethi" target="_blank"><All.MdiGithub className="footer-icon"/></a>
            </li>
            <li className="social-links">
                <a href="https://linkedin.com/in/aashishsethii01" target="_blank"><All.MdiLinkedin className="footer-icon"/></a>
            </li>
            <li className="social-links">
                <a href="https://twitter.com/web_AshishSethi" target="_blank"><All.MdiTwitter className="footer-icon"/></a>
            </li>
        </ul>
    </footer>
    )
}