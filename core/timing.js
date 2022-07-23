const exectueQuery = require("../database/exectueQuery");
module.exports = {
  timing: async (req, res) => {
    // timing,theatre,date,pincode
    let timing = req.body.timing;
    let theatre = req.body.theatre;
    let movie_date = req.body.date;
    let pincode = req.body.pincode;

    let sql = `select chair,price_chair,chairstatus,seatrow,seatcol,ticketID,Customername 
   from ticket_table
   where timing = '${timing}' and theatrename = '${theatre}' and movie_date = '${movie_date}' and pincode = ${pincode}`;

    let result = await exectueQuery.executeQuery(sql).catch((err) => err);
    res.json(result);
  },
};
