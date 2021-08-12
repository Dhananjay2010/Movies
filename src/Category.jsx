import React from "react";

class Category extends React.Component {
  state = {
    allGenre: ["Action", "Comedy", "Romance", "Thriller", "Horror", "Sci-Fi"],
  };

  componentDidMount() {
    fetch("/genre")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({
          allGenre: json,
        });
      });
  }

  render() {
    return (
      <ul class="list-group">
        <li
          class={
            this.props.currGenre == "All Genre" // ===> Condition to add different class
              ? "list-group-item active"
              : "list-group-item"
          }
          key="All Genre"
          onClick={() => {
            this.props.recieveGenre("All Genre");
          }}
        >
          All Genre
        </li>
        {this.state.allGenre.map((el) => {
          return (
            <li
              class={
                this.props.currGenre == el.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={el._id}
              onClick={() => {
                this.props.recieveGenre(el.name);
                // Here I have used condition to add classes in the Genre to give blue on selected.
              }}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;

/*

<ul class="list-group">
                {this.state.allGenre.map((el)=>{
                    return <li class="list-group-item" key={el}>{el}</li>
                })}
            </ul>

            ===> pure array mai loop marege aur hume ek list return karega
            aur tab ek ul return kar deta hai
                
 
fetch("https://localhost:4000/genre")===>


                Fetching the data from the server.

        fetch("https://localhost:4000/genre") is a asynchronous and thus returns a promise.



fetch("/genre").then(function(res){
           return res.json()
        }).then(function(json){

        })

        ===> Kyunki humne proxy set kar di hai to fetch("/genre")
         he kafi hai. Usko pata chal gaya ki kahan se uthana hai.

        Basically, ek server dusre server ko request nhi mar sakta.
        Per kyunki yanhan dono server apne hain(Jo banaya aur jo react ka apna hai)
        to humne request mar di hai proxy set karke.
 */
