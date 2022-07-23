const exectueQuery = require("../database/exectueQuery");
module.exports = {
  bookATicket: async (req, res) => {
    let timing = req.body.timing;
    let theatrename = req.body.theatrename;
    let moviedate = req.body.movie_date;
    let pincode = req.body.pincode;
    let chair = req.body.chair;
    let Customername = req.body.Customername;

    let sql = `select chairstatus from ticket_table where timing='${timing}'
    and theatrename= '${theatrename}'  and movie_date = '${moviedate}' and pincode = ${pincode} 
    and chair = ${chair}`;

    let result = await exectueQuery.executeQuery(sql).catch((err) => err);
    if (result[0].chairstatus === "F") {
      let ticketID = "XYRT" + new Date().toDateString();
      console.log(ticketID);
      sql = `update ticket_table set ticketID = '${ticketID}',Customername='${Customername}',
      chairstatus='B'  where timing='${timing}' and theatrename= '${theatrename}' 
       and movie_date = '${moviedate}' and pincode = ${pincode} and chair = ${chair}`;
      result = await exectueQuery.executeQuery(sql).catch((err) => err);
      res.send(ticketID);
    } else {
      res.json({
        msg: "aldready Booked",
      });
    }
  },
};
