function makeWhite(){
    linkArray = ['homelink', 'aboutlink', 'historylink', 'sponsorslink', 'committeelink', 'schedulelink', 'contactlink', 'registerlink'];
    for (var i = 0; i < linkArray.length; i++){
        document.getElementById(linkArray[i]).setAttribute('style', 'color: white;'); 
    }
};

function makeColor(){
    makeWhite();
    var targetLink = window.location.pathname;
    targetLink = targetLink.substr(1);//removes the '/'
    targetLink = targetLink.concat("link");
    makeLinkColor(targetLink);
};

function makeLinkColor(link){
    makeWhite();
    switch (link) {
        case 'link':
            document.getElementById('homelink').setAttribute('style', 'color: #B1B4B6;');
            break;
        case 'homelink':
            document.getElementById('homelink').setAttribute('style', 'color: #B1B4B6;');
            break;
        case 'aboutlink':
            document.getElementById(link).setAttribute('style', 'color: #FF3333;');
            break;
        case 'historylink':
            document.getElementById(link).setAttribute('style', 'color: #93592F;');
            break;
        case 'sponsorslink':
            document.getElementById(link).setAttribute('style', 'color: #9F3A96;');
            break;
        case 'committeelink':
            document.getElementById(link).setAttribute('style', 'color: #F36C21;');
            break;
        case 'schedulelink':
            document.getElementById(link).setAttribute('style', 'color: #FCD404;');
            break;
        case 'contactlink':
            document.getElementById(link).setAttribute('style', 'color: #1BB24B;');
            break;
        case 'registerlink':
            document.getElementById(link).setAttribute('style', 'color: #00B3E9;');
            break;
        default:
            break;
    }
};

var currentVisible = "mainbio";
function removeCurrentBio (){
	document.getElementById(currentVisible).setAttribute('style', 'display: none;');
}

function seeBio(committeeBio){
	removeCurrentBio();
	document.getElementById(committeeBio).setAttribute('style', 'display: inline;');
	currentVisible = committeeBio;
}