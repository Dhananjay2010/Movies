import React from "react"

import Category from "./Category.jsx"
import Search from "./Search.jsx"
import Table from "./Table.jsx"

class App extends React.Component {

  state={
    NoOfMovies:0,
    Searchstring:"",
    currGenre:"All Genre",
  };

  NumberOFMovies=(number)=>{
    this.setState({
      NoOfMovies:number
    })
  }

  passSearch=(value)=>{
    this.setState({
      Searchstring: value
    })
  }

  recieveGenre=(genre)=>{
    this.setState({
      currGenre: genre
    })
  }

  render(){
    return (
      <React.Fragment>
        
        <div className="row" >
          <div className="col-2 pd-3">
            <Category recieveGenre={this.recieveGenre} currGenre={this.state.currGenre}/>
          </div>
          <div className="col-10 p-4">
            <div className="row">
              <div className="col-3">
                <Search NoMovies={this.state.NoOfMovies} passSearch={this.passSearch}/>
              </div>
            </div>
            <div className="row ">
              <div className="col-8">
                <Table NumberOFMovies={this.NumberOFMovies} passInput={this.state.Searchstring} recievedGenre={this.state.currGenre}/>
              </div>
            </div>
          </div>
        </div>
  
      </React.Fragment>
  
    )
  }
  
}

export default App;

/*
Yahan pe React.Fragment===> Kyunki bas ek element ya component he return kar
                            sakte hain to agar bahut sare element ya component ko return karna hota
                            hai to use ek element ke andar wrap karke return kar dete hain


                            Hum div mai bhi wrap kar sakte hain per wo HTML mai dikhta hai
                            Isiliye React.Fragment use kiya jo ki HTML mai nhi dikhta
*/
