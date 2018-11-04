import React from 'react';
import List from './List.js';
import firebase, { login } from './firebase-config';

const databaseRef = firebase.database().ref().child('users');

function listUsers(user) {
  databaseRef.once('value').then(snap => {
      let snapshot = snap.val();
      console.log('Text');
      Object.keys(snapshot).forEach(key => {
        const img = snapshot[key].imgurl;
        const name = snapshot[key].username.split(' ')[0];
        // html += '<div class="User"><img src=' + img + ' alt="oops" class="dp"/><p><strong>' + name + '</strong></p></div>';
        list2.push({
          name: name,
          img: img
        });
      });
      console.log(list2);
  });
}

// const list = [
//   {
//     name: 'Richard',
//     img: 'lmaoooo.jpg'
//   }
// ];

const list = ['Richard', 'Bianca', 'Isabelle'];
const list2 = [];

class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filtered: [],
        selected:[],
        loaded: false
      };
      // this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.clicked = this.clicked.bind(this);
    }

    componentDidMount() {
      this.setState({
        filtered: list,
        loaded: true
      });
      login(listUsers);
    }
  
    // componentWillReceiveProps(nextProps) {
    //   this.setState({
    //     filtered: nextProps.list,
    //   });
    // }

      clicked(name){
        let proceed=true;
        for (var i=0; i< this.state.selected.length; i++){
          if (name == this.state.selected[i]){
            proceed=false;
          }
        }
        if (proceed){
          this.setState({
            selected: this.state.selected.concat(name)
          })
        }
      }
      
      handleChange(e) {
          // Variable to hold the original version of the list
      let currentList = [];
          // Variable to hold the filtered list before putting into state
      let newList = [];
          
          // If the search bar isn't empty
      if (e.target.value !== "") {
              // Assign the original list to currentList
        currentList = list;
              
              // Use .filter() to determine which items should be displayed
              // based on the search terms
        newList = currentList.filter(item => {
                  // change current item to lowercase
          const lc = item.toLowerCase();
                  // change search term to lowercase
          const filter = e.target.value.toLowerCase();
                  // check to see if the current list item includes the search term
                  // If it does, it will be added to newList. Using lowercase eliminates
                  // issues with capitalization in search terms and search content
          return lc.includes(filter);
        });
      } else {
              // If the search bar is empty, set newList to original task list
        newList = list;
      }
          // Set the filtered state based on what our rules added to newList
      this.setState({
        filtered: newList
      });
    }
  
    // addItem(e) {
    //   // Prevent button click from submitting form
    //   e.preventDefault();
  
    //   // Create variables for our list, the item to add, and our form
    //   let list = this.state.list;
    //   const newItem = document.getElementById("addInput");
    //   const form = document.getElementById("addItemForm");
  
    //   // If our input has a value
    //   if (newItem.value != "") {
    //     // Add the new item to the end of our list array
    //     list.push(newItem.value);
    //     // Then we use that to set the state for list
    //     this.setState({
    //       list: list
    //     });
    //     // Finally, we need to reset the form
    //     newItem.classList.remove("is-danger");
    //     form.reset();
    //   } else {
    //     // If the input doesn't have a value, make the border red since it's required
    //     newItem.classList.add("is-danger");
    //   }
    // }
  
    removeItem(item) {
      this.setState({
        selected: this.delete(item, this.state.selected)
      })
    }

    delete(x, lst){
      let newlst=[];
      for (var i=0; i< lst.length; i++){
        if (lst[i] !==x){
          newlst.push(lst[i]);
        }
      }
      return newlst;
    }
  
    render() {
      if(this.state.loaded){
      return (
        <div className="content">
          <p>Find your friends</p>
          <div className="container">
            <section className="section">
                 <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                  <List items={this.state.filtered} clicker={this.clicked} />
            </section>
            <hr />
            <section className="section">
                   <List items={this.state.selected} clicker={this.removeItem} />
            </section>
          </div>
          <div className= "selected">
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="content">
          <div className="container">
            <section className="section">
                 <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
            </section>
            <hr />
            <section className="section">
            </section>
          </div>
        </div>
      );
    }
  }
  }

  export default SearchBox;
  