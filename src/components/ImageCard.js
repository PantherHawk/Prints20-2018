import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Lazyload from 'react-lazyload';

export default const ImageCard = {sauce} => (
      <div className="wrapper">
        <div className="widget-list image-container">
          <Lazyload throttle={200} height={300}>
            <CSSTransitionGroup key="1"
              transitionName="fade"
              transitionAppear
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
              <img src={sauce} />
            </CSSTransitionGroup>
          </Lazyload>
        </div>
    );
