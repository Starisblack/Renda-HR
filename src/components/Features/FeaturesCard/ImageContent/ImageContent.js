

import "./ImageContent.css"

function ImageContent({img, height, width}) {
  return (
    <div className="feature-img">
         <img style={{height: height, width: width }} src={img}  alt="rendahr"/>
    </div>
  )
}

export default ImageContent