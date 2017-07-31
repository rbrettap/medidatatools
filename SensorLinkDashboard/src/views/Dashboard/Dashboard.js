import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';
import { subscribeToTimer } from '../api';

const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

// Main Chart

// convert Hex to RGBA
function convertHex(hex,opacity) {
  hex = hex.replace('#','');
  var r = parseInt(hex.substring(0,2), 16);
  var g = parseInt(hex.substring(2,4), 16);
  var b = parseInt(hex.substring(4,6), 16);

  var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

//Random Numbers
function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50,200));
  data2.push(random(80,100));
  data3.push(65);
}

const mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo,10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({
          timestamp
      }));

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
        timestamp: 'no timestamp yet'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <button onClick={() => { this.setState({ card1: !this.state.card1 }); }} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.card1}>
                      <i className="icon-settings"></i>
                    </button>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">5000</h4>
                <p>Devices online</p>
                <div className="animated fadeIn">
                  timer value: {this.state.timestamp}
                </div>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-info">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <button onClick={() => { this.setState({ card2: !this.state.card2 }); }} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.card2}>
                      <i className="icon-settings"></i>
                    </button>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">5254</h4>
                <p>Devices online</p>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <button onClick={() => { this.setState({ card3: !this.state.card3 }); }} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.card3}>
                      <i className="icon-settings"></i>
                    </button>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">5254</h4>
                <p>Devices online</p>
              </div>
              <div className="chart-wrapper">
                <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <div className="btn-group float-right">
                  <Dropdown isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <button onClick={() => { this.setState({ card4: !this.state.card4 }); }} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.card4}>
                      <i className="icon-settings"></i>
                    </button>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <h4 className="mb-0">5254</h4>
                <p>Devices online</p>
              </div>
              <div className="chart-wrapper px-3">
                <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">Subject Device Compliance</h4>
                <div className="small text-muted">July 2017</div>
              </div>
              <div className="col-sm-7 hidden-sm-down">
                <button type="button" className="btn btn-primary float-right"><i className="icon-cloud-download"></i></button>
                <div className="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option1"/> Day
                    </label>
                    <label className="btn btn-outline-secondary active">
                      <input type="radio" name="options" id="option2" defaultChecked/> Month
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option3"/> Year
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
              <Line data={mainChart} options={mainChartOpts} height={300}/>
            </div>
          </div>
          <div className="card-footer">
            <ul>
              <li>
                <div className="text-muted">Visits</div>
                <strong>29.703 Users (40%)</strong>
                <Progress className="progress-xs mt-2" color="success" value="40" />
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Unique</div>
                <strong>24.093 Users (20%)</strong>
                <Progress className="progress-xs mt-2" color="info" value="20" />
              </li>
              <li>
                <div className="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <Progress className="progress-xs mt-2" color="warning" value="60" />
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <Progress className="progress-xs mt-2" color="danger" value="80" />
              </li>
              <li className="hidden-sm-down">
                <div className="text-muted">Bounce Rate</div>
                <strong>40.15%</strong>
                <Progress className="progress-xs mt-2" color="primary" value="40" />
              </li>
            </ul>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Device Compliance
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="callout callout-info">
                          <small className="text-muted">New Subject</small><br/>
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-1" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Recurring Subjects</small><br/>
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-2" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars">
                      <li>
                        <div className="title">
                          Monday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="34" />
                          <Progress className="progress-xs" color="danger" value="78" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Tuesday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="56" />
                          <Progress className="progress-xs" color="danger" value="94" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Wednesday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="12" />
                          <Progress className="progress-xs" color="danger" value="67" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Thursday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="43" />
                          <Progress className="progress-xs" color="danger" value="91" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Friday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="22" />
                          <Progress className="progress-xs" color="danger" value="73" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Saturday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="53" />
                          <Progress className="progress-xs" color="danger" value="82" />
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Sunday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9" />
                          <Progress className="progress-xs" color="danger" value="69" />
                        </div>
                      </li>
                      <li className="legend">
                        <span className="badge badge-pill badge-info"></span> <small>New Subjects</small> &nbsp; <span className="badge badge-pill badge-danger"></span> <small>Recurring Subjects</small>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Submissions</small><br/>
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-3" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="callout callout-success">
                          <small className="text-muted">Registrations</small><br/>
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-4" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="icon-user"></i>
                        <span className="title">Male</span>
                        <span className="value">43%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="43" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Female</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="37" />
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <i className="icon-globe"></i>
                        <span className="title">Web Search</span>
                        <span className="value">191,235 <span className="text-muted small">(56%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="56" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-facebook"></i>
                        <span className="title">Facebook</span>
                        <span className="value">51,223 <span className="text-muted small">(15%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="15" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-twitter"></i>
                        <span className="title">Twitter</span>
                        <span className="value">37,564 <span className="text-muted small">(11%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="11" />
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-linkedin"></i>
                        <span className="title">LinkedIn</span>
                        <span className="value">27,319 <span className="text-muted small">(8%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="8" />
                        </div>
                      </li>
                      <li className="divider text-center">
                        <button type="button" className="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="show more"><i className="icon-options"></i></button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="callout">
                          <small className="text-muted">Uploads Trend</small><br/>
                          <strong className="h4">23%</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-5" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="callout callout-primary">
                          <small className="text-muted">Download Trend</small><br/>
                          <strong className="h4">5%</strong>
                          <div className="chart-wrapper">
                            <canvas id="sparkline-chart-6" width="100" height="30"></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-0"/>
                    <ul className="icons-list">
                      <li>
                        <i className="icon-screen-desktop bg-primary"></i>
                        <div className="desc">
                          <div className="title">iPhone</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded this week</div>
                          <strong>1.924</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-info"></i>
                        <div className="desc">
                          <div className="title">Samsung Galaxy Edge</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded this week</div>
                          <strong>1.224</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-warning"></i>
                        <div className="desc">
                          <div className="title">iPhone 6S</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded this week</div>
                          <strong>1.163</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user bg-danger"></i>
                        <div className="desc">
                          <div className="title">iPhone 7</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded this week</div>
                          <strong>928</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-spotify bg-success"></i>
                        <div className="desc">
                          <div className="title">iPad Pro</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded this week</div>
                          <strong>893</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-cloud-download bg-danger"></i>
                        <div className="desc">
                          <div className="title">iPad Mini</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Downloads</div>
                          <strong>121.924</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning"></i>
                        <div className="desc">
                          <div className="title">iPad 2</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <button type="button" className="btn btn-link text-muted"><i className="icon-settings"></i></button>
                        </div>
                      </li>
                      <li className="divider text-center">
                        <button type="button" className="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="show more"><i className="icon-options"></i></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <br/>
                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                  <thead className="thead-default">
                    <tr>
                      <th className="text-center"><i className="icon-people"></i></th>
                      <th>User</th>
                      <th className="text-center">Country</th>
                      <th>Usage</th>
                      <th className="text-center">Device Type</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@team27.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Richard Brett</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2017
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2017 - Jul 10, 2017</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                       
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@team27.com"/>
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div>Mike Welles</div>
                        <div className="small text-muted">

                          <span>Recurring</span> | Registered: Jan 1, 2017
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="Brazil" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2017 - Jul 10, 2017</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">
                        
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@team27.com"/>
                          <span className="avatar-status badge-warning"></span>
                        </div>
                      </td>
                      <td>
                        <div>Vipin Jain</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2017
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/India.png'} alt="India" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>74%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2017 - Jul 10, 2017</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="warning" value="74" />
                      </td>
                      <td className="text-center">
                        
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>1 hour ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@team27.com"/>
                          <span className="avatar-status badge-default"></span>
                        </div>
                      </td>
                      <td>
                        <div>Matt Noble</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2017
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="France" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>98%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2017 - Jul 10, 2017</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="danger" value="98" />
                      </td>
                      <td className="text-center">
                        
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last month</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@team27.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Nolan Carroll</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2017
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="Spain" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>22%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2017 - Jul 10, 2017</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="22" />
                      </td>
                      <td className="text-center">
                        
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last week</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@team27.com"/>
                          <span className="avatar-status badge-danger"></span>
                        </div>
                      </td>
                      <td>
                        <div>Kevin Bohlmann</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2017
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="Poland" style={{height: 24 + 'px'}}/>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>43%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2017 - Jul 10, 2017</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="43" />
                      </td>
                      <td className="text-center">
                        
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Yesterday</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
