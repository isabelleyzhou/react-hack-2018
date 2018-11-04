import React from 'react';
import List from './List.js';
import firebase from './firebase-config';

const databaseRef = firebase.database().ref().child('users');

var currentUser;

// const list = [
//   {
//     name: 'Richard',
//     img: 'lmaoooo.jpg'
//   }
// ];

const list = [];

export default class SearchBox extends React.Component {
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
      databaseRef.once('value').then(snap => {
        currentUser = firebase.auth().currentUser.email;
        let snapshot = snap.val();
        console.log('Text');
        Object.keys(snapshot).forEach(key => {
          const img = snapshot[key].imgurl;
          const name = snapshot[key].username.split(' ')[0];
          const email = snapshot[key].email;
          // html += '<div class="User"><img src=' + img + ' alt="oops" class="dp"/><p><strong>' + name + '</strong></p></div>';
          if (email !== currentUser) {
            list.push({
              name: name,
              img: img,
              email: email
            });
          }
          this.setState({
            filtered: list,
            loaded: true
          });
        });
        console.log(currentUser);
        console.log(list);
      })
    }
  
    // componentWillReceiveProps(nextProps) {
    //   this.setState({
    //     filtered: nextProps.list,
    //   });
    // }

      clicked(item){
        let proceed=true;
        for (var i=0; i< this.state.selected.length; i++){
          if (item.email === this.state.selected[i].email){
            proceed=false;
          }
        }
        if (proceed){
          this.setState({
            selected: this.state.selected.concat({
              name: item.name,
              img: item.img,
              email: item.email
            })
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
        currentList = list;
          currentList = list;     
        currentList = list;
          currentList = list;     
              // Use .filter() to determine which items should be displayed
              // based on the search terms
        newList = currentList.filter(item => {
                  // change current item to lowercase
          const lc = item.name.toLowerCase();
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
          <div className="container" id="top">
            <section className="section">
                 <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                  <List items={this.state.filtered} clicker={this.clicked} />
            </section>
            <hr />
            <section className="section">
                   <List items={this.state.selected} clicker={this.removeItem} />
            </section>
            <hr />
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
                 <input type="text" className="searchinput" onChange={this.handleChange} placeholder="Type..." />
            </section>
            <hr />
            {/* <section className="section">
            </section> */}
          </div>
        </div>
      );
    }
  }
  }
  