import React from "react";


class SearchBar extends React.Component{

    state = {
        searchText: ''
    }

    onSearchSubmit = (event) => {
        this.props.onSearchSubmit(this.state.searchText)
        event.preventDefault()
    }

    render(){
        return(
            <div className="ui container segment" style={{marginTop: "10px"}}>
                <form className="ui form" onSubmit={this.onSearchSubmit} >
                    <div className="ui icon input" style={{width: "100%"}}>
                        <input 
                            type="text" 
                            placeholder="Enter user name..."
                            value={this.state.searchText}
                            onChange={(e) => this.setState({searchText: e.target.value})}
                        />
                        <i className="circular search link icon" onClick={this.onSearchSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar