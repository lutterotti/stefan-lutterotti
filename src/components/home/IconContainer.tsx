import React, { useState } from 'react';
import { ReactComponent as LogoGithub } from '../../assets/logo-github.svg';
import { ReactComponent as LogoLinkedIn } from '../../assets/logo-linkedin.svg';
import { ReactComponent as LogoEmail } from '../../assets/mail-outline.svg';
import { Link } from 'react-router-dom';

export default function IconContainer() {
  return (
    <div className="icon-container">
      <Link to={{ pathname: "https://github.com/lutterotti" }} target="_blank">
        <div className="icon" id="git">
          <svg className="svg"><LogoGithub></LogoGithub></svg>
          <p className="icon-title">lutterotti</p>
        </div>
      </Link>
      <Link to={{ pathname: "https://www.linkedin.com/in/stefani-lutterotti" }} target="_blank">
        <div className="icon" id="linked">
          <svg className="svg"><LogoLinkedIn></LogoLinkedIn></svg>
          <p className="icon-title">Stefan Lutterotti</p>
        </div>
      </Link>
      <Link to={{ pathname: "mailto:luteroti@gmail.com" }} target="_blank">
        <div className="icon" id="email">
          <svg className="svg"><LogoEmail></LogoEmail></svg>
          <p className="icon-title">luteroti@gmail.com</p>
        </div>
      </Link>
    </div>
  )
}