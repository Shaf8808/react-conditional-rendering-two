import React from 'react'

function MethodsAsPropsChild(props) {
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
              <button onClick={props.handleSignOut}>Sign Out</button>
          </div>
      ) : (
      <div>
        <p>Please sign in</p>
        <button onClick={props.handleSignIn}> Sign in</button>
      </div>
           )}
      </div>
  )
}

export default MethodsAsPropsChild