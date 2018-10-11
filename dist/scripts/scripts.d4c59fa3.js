"use strict";angular.module("TheNayakNews",["ngAnimate","ngCookies","ngResource","ui.router","ngSanitize","ngTouch"]),angular.module("TheNayakNews").config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/home.html"}).state("tech",{url:"/tech",templateUrl:"views/tech.html",controller:"techController"}).state("film",{url:"/film",templateUrl:"views/film.html",controller:"filmController"}).state("sports",{url:"/sports",templateUrl:"views/sports.html",controller:"sportsController"})}]),angular.module("TheNayakNews").factory("webService",["$http","$q",function(a,b){function c(c){var e=b.defer();return a({method:"GET",url:c}).then(function(a){d.news=a,e.resolve(a)},function(a){e.reject(a)}),e.promise}var d={news:[],getData:c};return d}]),angular.module("TheNayakNews").controller("filmController",["$scope","webService","$location","$anchorScroll","$window",function(a,b,c,d,e){function f(){g(k),h(j)}function g(c){var d=b.getData(c);d.then(function(b){a.filmLeftArticles=[],angular.isDefined(b.data.articles)&&(angular.forEach(b.data.articles,function(b,c){var d={author:b.author,title:b.title,description:b.description,url:b.url,urlToImage:b.urlToImage,publishedAt:b.publishedAt};a.filmLeftArticles.push(d)}),a.showFilm=!0)},function(a){})}function h(c){var d=b.getData(c);d.then(function(b){a.filmRightArticles=[],angular.isDefined(b.data.articles)&&angular.forEach(b.data.articles,function(b,c){var d={author:b.author,title:b.title,description:b.description,url:b.url,urlToImage:b.urlToImage,publishedAt:b.publishedAt};a.filmRightArticles.push(d)})},function(a){})}var i="74c20057e29e4641a38b5d00c39bd93f",j="https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey="+i,k="https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey="+i;a.showFilm=!1,f(),a.redirectToOriginalSite=function(a){window.open(a)},a.backToTop=function(){$("html, body").animate({scrollTop:0},1e3)}}]),angular.module("TheNayakNews").controller("sportsController",["$scope","webService",function(a,b){function c(){d(h),e(g)}function d(c){var d=b.getData(c);d.then(function(b){a.sportsLeftArticles=[],angular.isDefined(b.data.articles)&&angular.forEach(b.data.articles,function(b,c){var d={author:b.author,title:b.title,description:b.description,url:b.url,urlToImage:b.urlToImage,publishedAt:b.publishedAt};a.sportsLeftArticles.push(d)})},function(a){})}function e(c){var d=b.getData(c);d.then(function(b){a.sportsRightArticles=[],angular.isDefined(b.data.articles)&&(angular.forEach(b.data.articles,function(b,c){var d={author:b.author,title:b.title,description:b.description,url:b.url,urlToImage:b.urlToImage,publishedAt:b.publishedAt};a.sportsRightArticles.push(d)}),a.showSports=!0)},function(a){})}var f="74c20057e29e4641a38b5d00c39bd93f",g=" https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey="+f,h="https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=latest&apiKey="+f;a.showSports=!1,c(),a.redirectToOriginalSite=function(a){window.open(a)},a.backToTop=function(){$("html, body").animate({scrollTop:0},1e3)}}]),angular.module("TheNayakNews").controller("techController",["$scope","webService",function(a,b){function c(){d(h),e(g)}function d(c){var d=b.getData(c);d.then(function(b){a.sportsLeftArticles=[],angular.isDefined(b.data.articles)&&angular.forEach(b.data.articles,function(b,c){var d={author:b.author,title:b.title,description:b.description,url:b.url,urlToImage:b.urlToImage,publishedAt:b.publishedAt};a.sportsLeftArticles.push(d)})},function(a){})}function e(c){var d=b.getData(c);d.then(function(b){a.sportsRightArticles=[],angular.isDefined(b.data.articles)&&(angular.forEach(b.data.articles,function(b,c){var d={author:b.author,title:b.title,description:b.description,url:b.url,urlToImage:b.urlToImage,publishedAt:b.publishedAt};a.sportsRightArticles.push(d)}),a.showTech=!0)},function(a){})}var f="74c20057e29e4641a38b5d00c39bd93f",g="https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey="+f,h="https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey="+f;a.showTech=!1,c(),a.redirectToOriginalSite=function(a){window.open(a)},a.backToTop=function(){$("html, body").animate({scrollTop:0},1e3)}}]),angular.module("TheNayakNews").controller("navController",["$scope","$location",function(a,b){a.isCurrentPath=function(a){return b.path()==a}}]),angular.module("TheNayakNews").run(["$templateCache",function(a){a.put("views/film.html",'<div id="film-content"> <div id="filmArticle" class="row"> <div id="filmLeft" class="col-md-7"> <div class="filmLeftArticles" ng-repeat="filmLeftArticle in filmLeftArticles"> <blockquote class="quote-box"> <p class="quotation-mark">“</p> <p class="quote-text">{{filmLeftArticle.title}}</p> <hr> <p class="quote-author">{{filmLeftArticle.author}}<span class="articlePosted">{{filmLeftArticle.publishedAt | date}}</span></p> </blockquote> <p class="filmLeftArticlesDescription">{{filmLeftArticle.description}}<span class="continueReading"><a href="{{filmLeftArticle.url}}" target="_blank">Continue reading >></a></span> </p><p> <img class="filmLeftArticlesImage" ng-src="{{filmLeftArticle.urlToImage}}" ng-click="redirectToOriginalSite(filmLeftArticle.url)" target="_blank"> </p></div> </div> <div id="filmRight" class="col-md-4"> <h2 ng-if="showFilm">Top Headlines</h2> <div class="filmRightArticles" ng-repeat="filmRightArticle in filmRightArticles"> <blockquote> <h1>{{filmRightArticle.title}}</h1> <h4>{{filmRightArticle.author}}</h4> </blockquote> <img class="filmRightArticlesImage" ng-src="{{filmRightArticle.urlToImage}}" ng-click="redirectToOriginalSite(filmRightArticle.url)" target="_blank"> <p class="filmRightArticlesDescription">{{filmRightArticle.description}}<span class="continueReading"><a href="{{filmRightArticle.url}}" target="_blank">Continue reading >></a></span> </p><p> </p></div> </div> <button id="filmBackToTop" type="button" scrollable ng-click="backToTop()">Back to Top</button> </div> </div>'),a.put("views/home.html",'<div class="home-content"> <div id="myCarousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li> <li data-target="#myCarousel" data-slide-to="1"></li> <li data-target="#myCarousel" data-slide-to="2"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img src="images/film.7dafa32d.jpg" alt="Los Angeles" style="width:100%;height : 700px"> <div class="carousel-caption"> <h3>Film</h3> <blockquote> <h1>My Mama always said, \'Life was like a box of chocolates; you never know what you\'re gonna get.\'</h1> <p>- <i>TOM HANKS</i> as Forrest Gump in Forrest Gump</p> <!-- console.developers.google.com/apis/credentials?project=thenayaknews --> </blockquote> </div> </div> <div class="item"> <img src="images/sports.9b2d4c21.jpg" alt="Chicago" style="width:100%;height : 700px"> <div class="carousel-caption"> <h3>Sports</h3> <blockquote> <h1>I\'ve failed over and over and over again in my life and that is why I succedd</h1> <p>- <i>Michael Jordan</i></p> </blockquote> <!-- https://www.brainyquote.com/quotes/quotes/m/michaeljor127660.html?src=t_sports --> </div> </div> <div class="item"> <img src="images/tech.cffc1da5.jpg" alt="New York" style="width:100%;height : 700px"> <div class="carousel-caption"> <h3>Tech</h3> <blockquote> <h1> Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. </h1> <p>- <i>Thomas Edison </i></p> </blockquote> </div> </div> </div> <!-- Left and right controls --> <a class="left carousel-control" href="#myCarousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a> </div> </div>'),a.put("views/nav.html",'<!-- NAVIGATION --> <div id="nav-content"> <nav class="navbar navbar-inverse" role="navigation" ng-controller="navController"> <div class="navbar-header" style=""> <a class="navbar-brand" ui-sref="home">The Nayak News</a> <img src="images/favIcon.853ff4e1.png" width="20" height="20"> </div> <ul class="nav navbar-nav"> <li clas="navMenu" ng-class="{ active: isCurrentPath(\'/film\') }"><a ui-sref="film">FILM</a></li> <li clas="navMenu" ng-class="{ active: isCurrentPath(\'/tech\') }"><a ui-sref="tech">TECH</a></li> <li clas="navMenu" ng-class="{ active: isCurrentPath(\'/sports\') }"><a ui-sref="sports">SPORTS</a></li> </ul> <div id="followNayak"> <h4>Follow Nayak :</h4> <ul> <li><a href="https://github.com/theprajwalnayak/" target="_blank"><i class="fa fa-github"></i></a></li> <li><a href="https://www.linkedin.com/in/theprajwalnayak//" target="_blank"><i class="fa fa-linkedin"></i></a></li> <li><a href="https://twitter.com/ThePrajwalNayak/" target="_blank"><i class="fa fa-twitter"></i></a></li> <li><a href="http://plus.google.com/" target="_blank"><i class="fa fa-google-plus"></i> </a></li> </ul> </div> </nav> </div>'),a.put("views/sports.html",'<div id="sports-content"> <div id="sportsArticle" class="row"> <div id="sportsLeft" class="col-md-7"> <div class="sportsLeftArticles" ng-repeat="sportsLeftArticle in sportsLeftArticles"> <blockquote> <h1>{{sportsLeftArticle.title}}</h1> <h4>-{{sportsLeftArticle.author}}</h4> </blockquote> <img class="sportsLeftArticlesImage" ng-src="{{sportsLeftArticle.urlToImage}}" ng-click="redirectToOriginalSite(sportsLeftArticle.url)" target="_blank"> <p class="sportsLeftArticlesDescription">{{sportsLeftArticle.description}}<span class="continueReading"><a href="{{sportsLeftArticle.url}}" target="_blank">Continue reading >></a></span></p><p> </p></div> </div> <div id="sportsRight" class="col-md-4"> <h2 ng-if="showSports">Top Headlines</h2> <div class="sportsRightArticles" ng-repeat="sportsRightArticle in sportsRightArticles"> <blockquote> <h1>{{sportsRightArticle.title}}</h1> <h4>-{{sportsRightArticle.author}}</h4> </blockquote> <img class="sportsRightArticlesImage" ng-src="{{sportsRightArticle.urlToImage}}" ng-click="redirectToOriginalSite(sportsRightArticle.url)" target="_blank"> <p class="sportsRightArticlesDescription">{{sportsRightArticle.description}}<span class="continueReading"><a href="{{sportsRightArticle.url}}" target="_blank">Continue reading >></a></span></p><p> </p></div> </div> <button id="sportsBackToTop" type="button" scrollable ng-click="backToTop()">Back to Top</button> </div> </div>'),a.put("views/tech.html",'<div id="tech-content"> <div id="techArticle" class="row"> <div id="techLeft" class="col-md-7"> <div class="techLeftArticles" ng-repeat="techLeftArticle in sportsLeftArticles"> <blockquote> <h1>{{techLeftArticle.title}}</h1> <h4><span>-</span>{{techLeftArticle.author}}</h4> </blockquote> <img class="techLeftArticlesImage" ng-src="{{techLeftArticle.urlToImage}}" ng-click="redirectToOriginalSite(techLeftArticle.url)" target="_blank"> <p class="techLeftArticlesDescription">{{techLeftArticle.description}}<span class="continueReading"><a href="{{techLeftArticle.url}}" target="_blank">Continue reading >></a></span></p><p> </p></div> </div> <div id="techRight" class="col-md-4"> <h2 ng-if="showTech">Top Headlines</h2> <div class="techRightArticles" ng-repeat="techRightArticle in sportsRightArticles"> <blockquote> <h1>{{techRightArticle.title}}</h1> <h4>-{{techRightArticle.author}}</h4> </blockquote> <img class="techRightArticlesImage" ng-src="{{techRightArticle.urlToImage}}" ng-click="redirectToOriginalSite(techRightArticle.url)" target="_blank"> <p class="techRightArticlesDescription">{{techRightArticle.description}}<span class="continueReading"><a href="{{techRightArticle.url}}" target="_blank">Continue reading >></a></span></p><p> </p></div> </div> <button id="techBackToTop" type="button" scrollable ng-click="backToTop()">Back to Top</button> </div> </div>')}]);