import { Fragment } from "react";
import classes from "./MeetupDetails.module.css";

export default function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.desc}</p>
    </section>
  );
}
