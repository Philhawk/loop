import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { ShareButtons, generateShareIcon } from 'react-share';

const { TwitterShareButton, GooglePlusShareButton, FacebookShareButton } = ShareButtons;

const GooglePlusIcon = generateShareIcon('google');
const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');
const paperStyle = {
  height: '3em',
  width: '100%',
  textAlign: 'center',
  padding: '.75em',
  marginTop: '.25em',
  marginBottom: '.25em',
  display: 'inline-block',
};

const startButtonStyle = {
  margin: 10,
  width: '100%',
  float: 'right',
  backgroundColor: 'red',
};

class TeacherPresentControlBarComponent extends Component {
  constructor() {
    super();
  }

  // bitlyShareLink = this.props.session.bitly;

  generatePresentorLink(linkURL) {
    return (
      <div className="col s12 m8 l9">
        <Paper className="presentorLink" style={paperStyle}>
            {this.props.session.bitly}
        </Paper>
      </div>
    );
  }

  render() {
    const shareUrl = this.props.session.bitly;
    const title = 'Checkout my live loop!'

    return (
        <div className="row">
            <div className="card col s12 m12 l12 teacherPresentationControlBar">
                <div className="row">
                    <div className="col s12 m6 l6">
                      <div className="row">
                        <div className="col s12 m4 l3">
                          <h4 className="share-something">Share Your Loop</h4>
                        </div>
                          {this.generatePresentorLink('https://YouBestBeWatching.com')}
                      </div>
                    </div>
                    <div className="col s12 m6 l6">
                      <div className="row">
                        <div className="col s12 m3 l3">
                          <h4 className="share-something">Share On Social</h4>
                        </div>
                        <div className="col s4 m3 l3">
                          <GooglePlusShareButton
                            url={shareUrl}
                            className="social-buttons">
                            <GooglePlusIcon
                              size={40}
                              round />
                          </GooglePlusShareButton>
                        </div>
                        <div className="col s4 m3 l3">
                          <FacebookShareButton
                            url={shareUrl}
                            title={title}
                            className="social-buttons">
                            <FacebookIcon
                              size={40}
                              round />
                          </FacebookShareButton>
                        </div>
                        <div className="col s4 m3 l3">
                          <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className="social-buttons">
                            <TwitterIcon
                              size={40}
                              round />
                          </TwitterShareButton>
                        </div>

                      </div>
                    </div>


                </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({ session })
const TeacherPresentControlBar = connect(mapStateToProps)(TeacherPresentControlBarComponent)

export default TeacherPresentControlBar
