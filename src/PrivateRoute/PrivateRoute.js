import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,loading}=useAuth()
    if(loading){
      return <div class="flex items-center justify-center space-x-2 animate-pulse">
      <div class="w-8 h-8 bg-indigo-600 rounded-full"></div>
      <div class="w-8 h-8 bg-indigo-600 rounded-full"></div>
      <div class="w-8 h-8 bg-indigo-600 rounded-full"></div>
  </div>
    }
    return (
       <Route
       {...rest}
       render={({location})=>
      user.email? children
      : <Redirect
      to={{
        pathname: "/login",
        state: { from: location }
      }}
      >

      </Redirect>
    }
       >
         
       </Route>
    );
};

export default PrivateRoute;