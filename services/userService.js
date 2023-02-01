
const getUserTokenService = async (req) => {
  const {user} = req
  let userToken;

  if (!user) {
    return (serviceResponse = {
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