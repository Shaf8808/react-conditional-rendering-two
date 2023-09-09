import React from 'react'

function UserMessage(props) {
  return (
      <div>
        {props.isLoggedIn ? (
          <div>

              <p>Welcome to the site, please authenticate your profile</p>
              <ol>
                  <li>Confirm your email</li>
                  <li>Complete your profile</li>
                  <li>Subscribe to newsletter</li>
              </ol>
          </div>
      ) : (<p>Please sign in</p>)}
      
      </div>
  )
}

export default UserMessage