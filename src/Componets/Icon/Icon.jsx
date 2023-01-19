import React, {Component} from 'react';
import styles from './style.module.css';
import { FaFacebook,FaTiktok } from "react-icons/fa";
import { AiFillInstagram,AiFillGithub } from "react-icons/ai";
class Icon extends Component {
    render() {
        return (
            <div className={styles.Icon}>
               <span><a href="https://www.facebook.com/ho.vo.10297" target={"_blank"}><FaFacebook/></a></span>
               <span><a href="#" target={"_blank"}><FaTiktok/></a></span>
               <span><a href="https://instagram.com/hovo_99___?igshid=ZDdkNTZiNTM="  target={"_blank"}><AiFillInstagram/></a></span>
               <span><a href="#" target={"_blank"}><AiFillGithub/></a></span>
            </div>
        );
    }
}

export default Icon;