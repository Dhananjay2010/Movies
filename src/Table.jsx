import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [],
    currPage: 1,
  };

  componentDidMount() {
    fetch("/movies")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({
          allMovies: json,
        });
        this.props.NumberOFMovies(json.length);
      });
  }

  render() {
    let moviesToDisplay = [];
    if( this.props.recievedGenre!="All Genre"){
      moviesToDisplay= this.state.allMovies.filter((e)=>{
        return e.genre.name==this.props.recievedGenre
      })
    }
    else{
      moviesToDisplay=this.state.allMovies;
    };

    if (this.props.passInput) {
      let strToCompare = this.props.passInput.toLowerCase();

      // Lowercase mai convert isiliye kiya taki user kisi bhi case mai type kar sake
      moviesToDisplay = moviesToDisplay.filter((el) => {
        return el.title.toLowerCase().includes(strToCompare);
      });
    }

    let numberOfPages = Math.ceil(moviesToDisplay.length / 5);
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }

    let starting = (this.state.currPage - 1) * 5;
    let ending = this.state.currPage * 5 - 1;

    moviesToDisplay = moviesToDisplay.slice(
      starting,
      Math.min(ending, moviesToDisplay.length - 1) + 1
    );

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((e) => {
              return (
                <tr key={e._id}>
                  <th scope="row">{e.title}</th>
                  <td>{e.genre.name}</td>
                  <td>{e.numberInStock}</td>
                  <td>{e.dailyRentalRate}</td>
                  <td 
                    onClick={() => {
                      let allMovies = moviesToDisplay;

                      let index = allMovies.findIndex((el) => e._id == el._id);

                      allMovies[index].liked
                        ? (allMovies[index].liked = false)
                        : (allMovies[index].liked = true);

                      this.setState({ allMovies: allMovies });
                    }}
                  >
                    {e.liked ? "Liked!" : "Like"}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        let AllMovies = this.state.allMovies;

                        let movies = AllMovies.filter((el) => {
                          // Making the delete button work
                          return e._id != el._id;
                        });

                        this.props.NumberOFMovies(movies.length);

                        this.setState({
                          allMovies: movies,
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item"
              onClick={() => {
                // Working the Previous button
                let currPage = this.state.currPage;
                currPage--;
                if (currPage < 1) currPage = 1;
                this.setState({ currPage: currPage });
              }}
            >
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {arr.map((el) => {
              return (
                <li
                  class="page-item"
                  onClick={() => {
                    this.setState({
                      currPage: el,
                    });
                  }}
                >
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li
              class="page-item"
              onClick={() => {
                // Working the Next button
                let currPage = this.state.currPage;
                currPage++;
                if (currPage > numberOfPages) currPage = numberOfPages;
                this.setState({ currPage: currPage });
              }}
            >
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;

/*
let numberOfPages = Math.ceil(this.state.allMovies.length / 5);
        let arr = [];
        for (let i = 1; i <= numberOfPages; i++) {
            arr.push(i);
        }

        ye isiliye kara kyunki mai chahta hun ki bas meri page pe atmax
        5 he movies aayein.

        So taki number of pages nikalne ke liye use 5 se devide karke
        ek array banaya ki kitne page honge

        Tab jake maine use array mai mara map function jisne mujhe required no
        of pages he dikhaye meri screen pe.


let starting=(this.state.currPage-1) * 5;
        let ending= (this.state.currPage*5)-1;

        let moviesToDisplay= this.state.allMovies.slice(starting,
            Math.min(ending, this.state.allMovies.length-1) + 1
            );

    ====> This code helps us to get max 5 movies in a page

          Here we used slice function to slice the all Movies array in the state.
          So accordingly we have created a a formula for starting and ending index.

          And used the currpage of state to have movies accordingly

          The case arrised with if we have 17 movies
          then the end page will have 2 movies, therefore
          we have used MAth.min for the ending index,

          For the last case, Math.min will compare(19,16) So the reuslt will be 16
          and since since slice function is used +1 is added at last so that the
          16 becomes 17 and the it slices from(15, 17-1).


React class component bahut sare phases se gujarta hai.

            1. Constructor()==> Jaise he class create hoti hai ye chalta hai.

            
*/
