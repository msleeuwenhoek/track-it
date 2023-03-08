function getError(errorCode) {
  if (errorCode === "auth/invalid-email") {
    return "invalid email format";
  }
  if (errorCode === "auth/email-already-in-use") {
    return "email is already in use";
  }
  if (errorCode === "auth/user-not-found") {
    return "user not found";
  }
  if (errorCode === "auth/wrong-password") {
    return "wrong password";
  }
  if (errorCode === "auth/weak-password") {
    return "password is too weak";
  }
  if (errorCode === "auth/too-many-requests") {
    return "too many requests, try again later";
  } else {
    return "something went wrong";
  }
}

export default getError;
