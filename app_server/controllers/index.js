/* GET 'home' page */
module.exports.home = function(req, res){
    res.render('index', { 
        title : 'Micro URL',
        slogan : 'Life is short, So does URL',
        copyright : 'Copyright &copy; Ikramul Murad 2018',
        pageHeader : {
            title : 'Micro URL',
            banner: 'Shorten your URL using Micro URL'
        },
        redirect : {
            url : 'www.microurl.com/',
            note : 'you can use browser\'s url bar'
        }
    });
};
