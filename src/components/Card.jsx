import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";



export default function Card(props) {
  const NavUnlisted = styled.ul`
    text-decoration: none;
  `;

  const linkStyle = {
    textDecoration: "none",
    color: "#1F397D"
  };
  return (
    <NavUnlisted >

      <Link to={props.que_no} style={linkStyle}>
        <div className="card_comp">
          <div>
            <div className="card_ques_num">Question {props.qnumber}</div>
            <div className="card_ques_underline"></div>
            <div className="card_ques_desc">{props.title}</div>
            <div className="card_decoration"></div>
            <div className="card_decoration2"></div>
          </div>
        </div>
      </Link>
    </NavUnlisted>
  )
}
