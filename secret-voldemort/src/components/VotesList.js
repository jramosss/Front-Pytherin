import React from 'react'

export function VotesList(props) {
    
  const usersVotes = props.usersVotes
  return(
    <div>
      <ul>
        {usersVotes.map(user =>
          <li>{user.user} votes: {user.vote}</li>
        )}
      </ul>
    </div>
  );
}