
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'MozFest2012 #MozFest' });
};
