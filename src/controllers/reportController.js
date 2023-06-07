const useragent = require('useragent');
const TAB = "\t";

exports.getReportPage = (req, res) => {
  const userAgent = req.headers['user-agent'];
  const agent = useragent.parse(userAgent);
  
  console.log('User Agent:', agent.toString());
  console.log(Date() + TAB + req.socket.localAddress + TAB + req.ip + TAB + req.url);

  res.render('layouts/report.ejs', { title: 'Report', body: 'Report Content' });
};

exports.postReportPage = (req, res) => {
  // Process the submitted report form data
  // Assuming form data is available in req.body
  
  // Example: Saving the report to the database
  const { report } = req.body;
  // Code to save the report to the database goes here
  
  res.redirect('/report');
};

  