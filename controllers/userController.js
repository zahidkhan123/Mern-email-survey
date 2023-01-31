

const userController =(async (req,res) => {
    console.log("running")
   return res.send(req.user);
})

module.exports= {
    userController
}