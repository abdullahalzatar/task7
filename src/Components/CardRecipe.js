import '../Style/cardRecipe.css';
import poto from "../Assets/pexels-valeria-boltneva-1833349.jpg"


function CardRecipe(props) {
    console.log(props)
  return (
    <div className="cardRecipe">
     <div className="main">
        <div className="photo" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.548), rgba(249, 249, 248, 0)),url(${props.value.image})`,}}></div>
        <div className="dis">
            <p className='title'>{props.value.title}</p>
            <p className='res'>Restaurant : Hooters ...</p>
        </div>
     </div>
      
      </div>
  );
}

export default CardRecipe;
