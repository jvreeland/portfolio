import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import legacy from 'css/legacy.scss'
import index from 'css/index.scss'
import adviceMatchThumbnail from 'images/portfolio/bs-advice-match-thumbnail.png'
import fundPagesThumbnail from 'images/portfolio/bs-fundpages-thumbnail.png'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="intro-container">
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
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-gear fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Web Development</h4>
                    <p className="text-muted">Specializing in web applications using ES6, Angular, Webpack, and Gulp</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-tablet fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Building and styling applications for wide range of devices</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
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
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <img src={fundPagesThumbnail} className="img-responsive" alt=""/>
                      </a>
                      <div className="portfolio-caption">
                          <h4>BrightScope Fund Pages</h4>
                          <p className="text-muted">Web Application</p>
                          <p>Technology Used: Angular, Sass, HighCharts</p>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                      <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                          <img src={adviceMatchThumbnail} className="img-responsive" alt=""/>
                      </a>
                      <div className="portfolio-caption">
                          <h4>BrightScope Advice Match</h4>
                          <p className="text-muted">Web Application</p>
                          <p>Technology Used: Angular, Material UI, </p>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                      <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                          <img src={adviceMatchThumbnail} className="img-responsive" alt=""/>
                      </a>
                      <div className="portfolio-caption">
                          <h4>Express Feedback</h4>
                          <p className="text-muted">Mobile Web Application</p>
                          <p>Technology Used: React, Redux, Webpack, Sass</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        <footer id="footer">
          <div className="logo">JV</div>
        </footer>
      </div>
    )
  }
}
