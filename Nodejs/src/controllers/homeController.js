import db from '../models/index';

let getHomePage = async (req, res) => {
    //không cần khai báo đường dẫn do ViewEngine config tất cả đường dẫn vào views
    //lưu ý views có child folder thì phải thêm "/"
    try {
        let data = await db.User.findAll();

        return res.render("homepage.ejs", {
            //chuyển file json sang string
            data: JSON.stringify(data)
        });
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