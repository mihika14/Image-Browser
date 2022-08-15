import React from 'react';

class SearchBar extends React.Component{
  state = { term: ''};

  // onInputClick(){
  //   console.log('Input was clicked');
  // }
  onFormSubmit = event => {
    event.preventDefault(); 
     
    this.props.onSubmit(this.state.term);
  };
  //event.defaut used so that text does not dissappear when page refreshes.
  
    render(){
        return(
        <div className="ui segement">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Image Search</label>
               <input 
                type= "text" 
                // onClick={this.onInputClick} 
                value={this.state.term}
                onChange={(e) => this.setState({term: e.target.value})}
              />
              </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;