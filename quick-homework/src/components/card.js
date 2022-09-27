import "./card.css"

export function Card({ person }) {
    
    return (
        <div className="card" style={{backgroundColor: `${person.status==="Alive" ? "green" : person.status === "Dead" ? "red" :"grey"}`}}>
        <h2>{person.name}</h2>
            <img src={person.image} />
            <div className="card__status">{person.status}</div>
      </div>
    );
}