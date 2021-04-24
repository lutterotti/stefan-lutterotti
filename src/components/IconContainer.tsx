import React, { useState } from 'react';
import { ReactComponent as LogoGithub } from '../assets/logo-github.svg';
import { ReactComponent as LogoLinkedIn } from '../assets/logo-linkedin.svg';
import { ReactComponent as LogoEmail } from '../assets/mail-outline.svg';
import { Animate, NodeGroup } from 'react-move';
import { Link } from 'react-router-dom';

enum Icons {
  GIT = 'git',
  LINKED_IN = 'linked_in',
  EMAIL = 'email'
}

export default function IconContainer () {

  return (
    <div className="icon-container">
      <Link to={{ pathname: "https://github.com/lutterotti" }} target="_blank">
        <div className="icon" id="git">
          <svg className="svg"><LogoGithub width="30" height="30"></LogoGithub></svg>
          <p className="icon-title">lutterotti</p>
        </div>
        </Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/stefani-lutterotti" }} target="_blank">
          <div className="icon" id="linked">
            <svg className="svg"><LogoLinkedIn width="30" height="30"></LogoLinkedIn></svg>
            <p className="icon-title">Stefani Lutterotti</p>
          </div>
        </Link>
        <Link to={{ pathname: "mailto:hey@lutterotti.com" }} target="_blank">
          <div className="icon" id="email">
            <svg className="svg"><LogoEmail width="30" height="30"></LogoEmail></svg>
            <p className="icon-title">hey@lutterotti.com</p>
          </div>
        </Link>
    </div>
  )
}