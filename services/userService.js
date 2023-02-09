
const getUserTokenService = async (req) => {
  const {user} = req
  console.log("user",user)
  let userToken;

  if (!user) {
    return (userToken = {
      success: false,
      message: "no user found",
      status: 422,
    });
  }
  return (userToken = {
    success: true,
    message: null,
    data:user,
    status: 200,
  });
}

module.exports = {
    getUserTokenService
}