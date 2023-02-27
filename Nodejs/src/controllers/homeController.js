import db from '../models/index';

let getHomePage = async (req, res) => {
    //không cần khai báo đường dẫn do ViewEngine config tất cả đường dẫn vào views
    //lưu ý views có child folder thì phải thêm "/"
    try {
        let data = await db.User.findAll();
        
        console.log("-----------------")
        console.log(data);
        console.log("-----------------")

        return res.render("homepage.ejs");
    } catch (e) {
        console.log(e)
    }



}


// object:{
//     key:'',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
}