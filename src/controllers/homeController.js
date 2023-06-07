const useragent = require('useragent');
const TAB = "\t";

exports.getHomePage = (req, res) => {
  const userAgent = req.headers['user-agent'];
  const agent = useragent.parse(userAgent);
  
  console.log('User Agent:', agent.toString());
  console.log(Date() + TAB + req.socket.localAddress + TAB + req.ip + TAB + req.url);

  res.render('layouts/home.ejs', { title: 'Home', body: 'Home Content' });
};

  