/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { 
        title : 'About',
        slogan : 'Life is short, So does URL',
        copyright : 'Copyright &copy; Ikramul Murad 2018',
        pageHeader : {
            title : 'About',
            banner : 'Shorten your URL using Micro URL'
        },
        content : {
            definition : 'Micro URL is created to shrink/minify/shorten particular lengthy URL and easily share them to frineds.',
            usage : 'Sometimes you are outside the home and you forget a particular link. Micro URL will help to overcome this situation. You may think Micro URL as a portable bookmark list.'
        }
    });
};
