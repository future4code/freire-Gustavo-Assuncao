  export const goToLoginPage = (navigate) => {
    navigate("/login")
  }

  export const goToSignUpPage = (navigate) => {
    navigate("/cadastro")
  }

  export const goToFeedPage = (navigate) => {
      navigate("/")
    }
  
    export const goToPostPage = (navigate, id) => {
      navigate(`/posts/${id}/comments`)
    }