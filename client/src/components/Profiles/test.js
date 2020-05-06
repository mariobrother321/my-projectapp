({profile: {
    user: {_id, name , avatar},
    status,
    company,
    location,
    skills
}}) => {
    console.log("fut pe mata")
    
    return  <div className="profile">
             
             <img src={avatar} alt="" className="round-img"/>
               <div>
                  <h2>{name}</h2>
                   <p>{status} {company && <span>at {company}</span>} </p>
                   <p className=""> {location && <span>{location}  </span> } </p>
                   <Link to={`/profile/${_id}`} className="btn btn-dark"> 
                   View Profile </Link>
                </div>
                <ul>
                    {skills.slice(0, 4).map((skill, index) => (
                        <li key={index} className="text-primary">
                            {skill}
                        </li>
                    ))}
                </ul>

             </div>;
 }   