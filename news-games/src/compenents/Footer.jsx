import React from 'react';
import waluigi from '../waluigi.mp3';

class Footer extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let audioWaluigi = new Audio(waluigi);
  
  return (
    <footer>

      <h2>&copy; Winston Meikle 2019</h2>
      <div id="Github">
        <a target="_blank" href="https://github.com/Blackstarstorm/News-Game--" onClick={async () => await audioWaluigi.play()}><img src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1570205990/github_fpykxh_kxjb6c.png" alt="GitHub Link" /></a>
      </div>
      
      <div id="LinkIn">
      <a target="_blank" href="https://www.linkedin.com/in/winston-meikle-4644b5162/" onClick={async () => await audioWaluigi.play()}><img src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1570205994/linkedin_vnvo6s_lz70or.png" alt="LinkIn Link"/></a>
      </div>
    </footer>
  )
}
}
export default Footer;