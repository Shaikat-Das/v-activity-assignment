import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../src/firebase.config'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';




firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''      
})


    // logged in user info context api die onno route a pete

    const [signedInUser, setSignedInUser] = useContext(UserContext);
// redirect kore j jaigai jete chaicilam se jaigai jawar jonno

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
// firebase theke
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)

// for successful sign in
        .then(function(result) {
            // const user = result.user;
            const {displayName, email} = result.user;
            const signedInUser ={
                isSignedIn: true,
                name: displayName, 
                email: email           
            }
         setUser(signedInUser);
        //  context er setLoggedInUser k set korer jonno
        setSignedInUser(signedInUser);
        history.replace(from);
          })
// if sign in not happen
          .catch(function(error) {
            var errorMessage = error.message;
            console.log (error);
          });

    }
// For sign out 
    const handleSignOut = () =>{
        firebase.auth().signOut()
        
        .then(function() {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setUser(signedOutUser);
          })
          .catch(function(error) {
            // An error happened.
          });
    }






    return (
        <div>
           
           

            <div style={{textAlign:"center" }}>
                        {
                            user.isSignedIn &&  
                            <div className="welcome-message">
                            <h2><strong>Welcome, {user.name}</strong> </h2>
                            <Link to ="/Registration"> <p><b>Please fill up the form to be a volunteer</b></p> </Link>
                            </div>
                        }
            </div>

            <div style={{textAlign:"center" }}>
                    { user.isSignedIn ?  <button onClick={handleSignOut} 
                            className="btn btn-success" >Or You can Sign out to exit</button>:
                        <div className="log-in">
                            <h3>Log In with</h3>
                            <button onClick={handleSignIn} className="btn btn-success" >Google Sign In</button>
                            <h4>Don't have an account?  <a href="https://www.gmail.com">Sign Up with Google</a></h4>
                        </div>
                    }           
            </div>

        </div>
    );
};

export default Login;