import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import legacy from 'css/legacy.scss'
import index from 'css/index.scss'
import adviceMatchThumbnail from 'images/portfolio/bs-advice-match-thumbnail.png'
import fundPagesThumbnail from 'images/portfolio/bs-fundpages-thumbnail.png'
import hundredXThumbnail from 'images/portfolio/hundredx-thumbnail.png'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="intro-container">
            <div className="intro-container-overlay"></div>
            <h1> Hi, Im Jessica.</h1>
            <h2> I build and style web applications </h2>
          </div>
        </header>

        <section id="services">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">My Expertise</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-gear fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Web Development</h4>
                    <p className="text-muted">Specializing in web applications using ES6, React, Redux, Angular, and Webpack</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-tablet fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Building and styling applications for wide range of devices</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">User Experience</h4>
                    <p className="text-muted">Understanding users and creating an intutive user experience</p>
                </div>
            </div>
          </div>
        </section>


        <section id="portfolio" className="bg-light-gray">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2 className="section-heading">Recent Projects</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-sm-6 portfolio-item">
                      <a href="https://hundredxinc.com/" className="portfolio-link" data-toggle="modal">
                          <img src={hundredXThumbnail} className="img-responsive" alt=""/>
                      </a>
                      <div className="portfolio-caption">
                          <h4>Express Feedback</h4>
                          <q>Our universally understood UX delivers exceptional response rates. Express Feedback easily integrates into your channels providing better control over delivery and context.</q><cite>- Hundredxinc.com</cite>
                          <ul className="list-block">
                              <li>Technology Used: React, Redux, Webpack, Sass </li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                      <a href="https://brightscope.com/fund-pages" className="portfolio-link" data-toggle="modal">
                          <img src={fundPagesThumbnail} className="img-responsive" alt=""/>
                      </a>
                      <div className="portfolio-caption">
                          <h4>BrightScope Fund Pages</h4>
                          <q>Access trended analysis on over 30,000 share classes, 10,000 funds, and over 800 fund families with ease. Fund Pages provides deep insights for investors and industry experts at any level.</q> <cite>- Brightscope.com</cite>
                          <ul className="list-block">
                              <li>Technology Used: Angular, Webpack, CoffeeScript, Sass, Jade</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                      <a href="https://brightscope.com" className="portfolio-link" data-toggle="modal">
                          <img src={adviceMatchThumbnail} className="img-responsive" alt=""/>
                      </a>
                      <div className="portfolio-caption">
                          <h4>BrightScope Advice Match</h4>
                          <q>Our AdviceMatch platform puts you in control of your search for a financial advisor. Based on your unique needs, we individually rank all of your advisor options so you can focus on those that are most relevant to you.</q><cite>- Brightscope.com</cite>
                          <ul className="list-block">
                              <li>Technology Used: Angular, CoffeeScript, Grunt, Sass </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <footer id="footer">
        </footer>
      </div>
    )
  }
}
