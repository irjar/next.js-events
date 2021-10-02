import Link from "next/link";
import classes from "./button.module.css";

function Button(props){
    // return Link when the prop is set, otherwiser return a normal button
   if(props.link){
    return (
        <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
        </Link>
       );
   }
  return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
}

export default Button;