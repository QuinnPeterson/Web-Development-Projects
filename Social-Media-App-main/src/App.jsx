import React, { useState, useEffect } from "react";
import Post from "./components/post/Post";
import "./App.css";
import { supabase } from "./supabaseInit";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import ImageUpload from "./components/imageUpload/ImageUpload";
import Cookies from "js-cookie";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "rgba(255,255,255,1)",
    boxShadow: 24,
    padding: "30px 60px",
    borderRadius: "12px",
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Load user from session or cookies on page load
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        const savedUsername = Cookies.get("username");
        const savedID = Cookies.get("id");
        setUser(session.user);
        setUsername(savedUsername || "");
        setID(savedID || "");
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
          setUsername(Cookies.get("username") || "");
          setID(Cookies.get("id") || "");
        } else {
          setUser(null);
          setUsername("");
          setID("");
        }
      }
    );

    // Clean up the listener on component unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) console.error("Error fetching posts:", error);
      else setPosts(data);
    };

    fetchPosts();
  }, []);

  const signUp = async (e) => {
    e.preventDefault();

    const { error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (authError) {
      window.alert(authError.message);
      return;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (user) {
      // Insert user info into the database
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: user.id,
          username: username,
          email: email,
          created_at: new Date().toISOString(),
        },
      ]);

      // Save username and id in cookies
      Cookies.set("username", username, { expires: 7 }); // Expires in 7 days
      Cookies.set("id", user.id, { expires: 7 });

      if (insertError) {
        console.error("Error inserting user:", insertError);
      } else {
        console.log("User successfully inserted!");
        setUser(user);
        setID(user.id);
      }
    } else {
      console.log("User not found after signup.");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Fetch user details from Supabase
        const { data: loggedInUser, e } = await supabase
          .from("users")
          .select("username, email, id")
          .eq("id", user.id)
          .single();

        if (e) {
          console.error("Error fetching user:", e);
        } else {
          // Log the complete user object to check data structure
          console.log("Logged-in user object:", loggedInUser);

          // Set state and cookies
          setUser(loggedInUser);
          setUsername(loggedInUser.username);
          setID(loggedInUser.id);

          // Save username and id in cookies
          Cookies.set("username", loggedInUser.username, { expires: 7 });
          Cookies.set("id", loggedInUser.id, { expires: 7 });
        }

        setEmail("");
        setPassword("");
        setOpenLogin(false);
      }
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    } else {
      // Clear cookies and user state on logout
      Cookies.remove("username");
      Cookies.remove("id");
      setUser(null);
      setUsername("");
      setID("");
    }
  };

  return (
    <div className="app">
      {!user && (
        <>
          <Modal open={openSignup} onClose={() => setOpenSignup(false)}>
            <div style={modalStyle} className={classes.paper}>
              <center>
                <img src="images/logo.png" alt="Logo" />
              </center>
              <form className="app__signUp">
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  placeholder="Email address"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="primary__button"
                  type="submit"
                  onClick={signUp}
                >
                  Sign up
                </button>
              </form>
            </div>
          </Modal>

          <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
            <div style={modalStyle} className={classes.paper}>
              <center>
                <img src="images/logo.png" alt="Logo" />
              </center>
              <form className="app__signUp">
                <input
                  placeholder="Email address"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="primary__button"
                  type="submit"
                  onClick={login}
                >
                  Log in
                </button>
              </form>
            </div>
          </Modal>
        </>
      )}

      <div className="app__header">
        <div className="app__headerWrapper">
          <img src="images/logo.png" alt="Logo" />
          {user ? (
            <div className="app__userInfo">
              <span className="username">{username}</span>
              <button className="text__button" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="app__headerButtons">
              <button
                className="primary__button"
                onClick={() => setOpenLogin(true)}
              >
                Log in
              </button>
              <button
                className="text__button"
                onClick={() => setOpenSignup(true)}
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="timeline">
        {user && <ImageUpload user={user} />}

        {posts.map((post) => (
          <Post
            key={post.id}
            postId={post.id}
            user={user}
            username={username}
            caption={post.caption}
            imageUrl={post.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
