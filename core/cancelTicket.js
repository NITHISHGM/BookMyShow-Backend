const exectueQuery = require("../database/exectueQuery");

module.exports = {
  cancelTicket: async (req, res) => {
    let ticketID = req.body.ticketID;
    let sql = `update ticket_table set chairstatus = 'F', ticketID=null, Customername = null 
    where ticketID='${ticketID}'`;
    let result = exectueQuery.executeQuery(sql).catch((err) => err);
    res.json(result);
  },
};
