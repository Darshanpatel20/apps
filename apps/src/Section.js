import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
        return(

            <div className="row">
                        <div className="col-md-1 ">

                        </div>
                        <div className="col-md-10 text-center">
                            <h4 className="bg-danger">{Game.title}</h4>
                            <h4 className="subheading">{Game["main-heading"]}</h4>
                            

                        
                        <div className="card-body bg-light">
                        <img src={Game.image} className=" img-fluid" alt=""></img>
                        <h4 className="subheading">{Game["heading-1"]}</h4>
                        <p className="card-text">{Game["paragraph-1"]}</p>
                        <h5 className="card-title">{Game["heading-2"]}</h5>
                        <p className="card-text">{Game["paragraph-2"]}</p>
                        <h5 className="card-title">{Game["heading-3"]}</h5>
                        <p className="card-text">{Game["paragraph-3"]}</p>
  </div>
                        </div>
        
  <div className="col-md-1 ">
      

</div>
<hr></hr>
            </div>
            
            );
    }
);

class Section extends Component {
    render() {
        return (
            <div>
        {games}
            </div>            
                );
    }
}

export default Section;
