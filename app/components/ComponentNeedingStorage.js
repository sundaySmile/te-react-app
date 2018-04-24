import React, { Component } from 'react';
import Storage from 'components/Storage';

class ComponentNeedingStorage extends Component {
	state = {
		username: '',
		favoriteMovie: '',
		isFetching: false,
	};

  fetchData = (save) => {
    this.setState({ isFetching: true });
    
    this.props.reallyLongApiCall()
      .then((user) => {
        save('username', user.username);
        save('favoriteMovie', user.favoriteMovie);

        this.setState({
          username: user.username,
          favoriteMovie: user.favoriteMovie,
          isFetching: false,
        });
      }); 
	}

	render() {
    return (
      <Storage
        render={({ load, save, remove }) => {
          const username = load('username') || this.state.username;
          const favoriteMovie = load('favoriteMovie') || this.state.username;
      
          if (!username || !favoriteMovie) {
            if (!this.state.isFetching) {
              this.fetchData(save);               
            }

            return <div>Loading...</div>; 
          }
      
          return (
            <div>
              My username is {username}, and I love to watch {favoriteMovie}.
            </div>
          );
        }}
      />
    )
  }
}