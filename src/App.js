import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import Chat from "./Chat";

function App() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!user ? (
        <>
          <h1>Welcome to Firebase Chat</h1>
          <button onClick={login}>Sign in with Google</button>
        </>
      ) : (
        <>
          <h2>Hello, {user.displayName}</h2>
          <button onClick={logout}>Sign Out</button>
          <Chat user={user} />
        </>
      )}
    </div>
  );
}

export default App;
