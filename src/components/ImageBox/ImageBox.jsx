const ImageBox = (props) => {

  return (
        <div className="imagebox">
            <img 
                className="imagebox__image" 
                src={`images/${props.image}`} 
                alt={props.alt} 
                style={{height: '200px'}}
            >

            </img>
        </div>
  );
}

export default ImageBox;