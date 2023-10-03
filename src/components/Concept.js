function Concepts(props){
 return(
<li className="concept">
          <img src={props.conceptual.image} alt={props.title} />
          <h2>{props.conceptual.title}</h2>
          <p>{props.conceptual.description}</p>
        </li>

 )


}
export default Concepts