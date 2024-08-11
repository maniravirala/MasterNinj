const authEndpoint = "http://localhost:5000/auth";
const authHeaders = {
  "Content-Type": "application/json",
};
const authPostOptions = {
  method: "POST",
  headers: authHeaders,
};

export const register = async (email, password) => {
  const registerOptions = {
    ...authPostOptions,
    body: JSON.stringify({ email, password }),
  };
  try {
    const res = await fetch(`${authEndpoint}/register`, registerOptions);
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      setAuthSuccess(true);
      setAuthMessage(data.message);
    } else {
      setAuthSuccess(false);
      setAuthMessage(data.message);
    }
  } catch (err) {
    setAuthError(err);
  }
};

export const login = async (email, password) => {
  const loginOptions = {
    ...authPostOptions,
    body: JSON.stringify({ email, password }),
  };
  try {
    const res = await fetch(`${authEndpoint}/login`, loginOptions);
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      setAuthSuccess(true);
      setAuthMessage(data.message);
    } else {
      setAuthSuccess(false);
      setAuthMessage(data.message);
    }
  } catch (err) {
    setAuthError(err);
  }
};

export const logout = async () => {
  try {
    const res = await fetch(`${authEndpoint}/logout`, authOptions);
    const data = await res.json();
    if (res.ok) {
      setUser(null);
      setAuthSuccess(true);
      setAuthMessage(data.message);
    } else {
      setAuthSuccess(false);
      setAuthMessage(data.message);
    }
  } catch (err) {
    setAuthError(err);
  }
};
