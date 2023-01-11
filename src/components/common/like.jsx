import React from 'react';

const Like = (props) => {
  let classes = 'fa fa-heart';
  if (!props.liked) classes += '-o';
  return <i onClick={props.onLike} className={classes} aria-hidden="true"></i>;
};

export default Like;
