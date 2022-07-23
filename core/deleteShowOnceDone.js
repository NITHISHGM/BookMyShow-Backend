const exectueQuery = require("../database/exectueQuery");
module.exports = {
  deleteShowonceDone: async (req, res) => {
    let timing = req.body.timing;
    let theatre = req.body.theatre;
    let movie_date = req.body.date;
    let pincode = req.body.pincode;
    let sql = `delete from ticket_table where timing = '${timing}' and 
    theatrename ='${theatre}' and movie_date = '${movie_date}' and pincode = ${pincode}`;
    let result = await exectueQuery.executeQuery(sql).catch((err) => err);
    res.json(result);
  },
};
