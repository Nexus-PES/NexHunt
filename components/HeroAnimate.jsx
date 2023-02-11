import React from 'react'
// import Animation from './Animation'

export default function Hero_animate(props) {
  return (
    <div className="hero_animate_comp">
      <div className="hero_animate_content">
        {props.title}
      </div>
      <div className="hero_pattern_container">
        {/* <Animation className="pattern1 pattern" width="50" pattern="{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{" />
        <Animation className="pattern2 pattern" width="70" pattern="<></><></><></><></><></><></><></><></><></><></>" />
        <Animation className="pattern3 pattern" width="90" pattern="++++++++++++++++++++++++++++++++++++++" />
        <Animation className="pattern4 pattern" width="110" pattern="<><><><><><><><><><><><><><><><><><>" /> */}
        {/* <Animation pattern="this is what yoiu want" ></Animation> */}
      </div>
    </div>
  )
}
