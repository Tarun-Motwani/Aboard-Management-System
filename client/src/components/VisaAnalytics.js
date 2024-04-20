import React from 'react';
import visaLogo from '../images/logo.png'
import '../CSS/VisaAnalytics.css';

class VisaAnalyticsPage extends React.Component {
  render() {
    return (
      <>
      <div className='visa-analytics-whole-page'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill">
        </path>
      </svg>
      <img src={visaLogo} alt="visaLogo" className='visaLogo'/>

      <div className="visa-analytics-page">
        <div className='visa-page'>
        <h1>Global Academia Study Abroad: Visa Analytics</h1>

        <h2>Overview</h2>
        <p>This page provides an overview of visa data for students studying abroad through Global Academia. The data is updated monthly and includes information on visa success rates, application processing times, and popular study destinations.</p>

        <h2>Visa Success Rates</h2>
        <table>
          <thead>
            <tr>
              <th>Country of Origin</th>
              <th>Destination</th>
              <th>Success Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United States</td>
              <td>United Kingdom</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>United States</td>
              <td>France</td>
              <td>85%</td>
            </tr>
            <tr>
              <td>Canada</td>
              <td>United Kingdom</td>
              <td>95%</td>
            </tr>
            <tr>
              <td>Canada</td>
              <td>Australia</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>China</td>
              <td>United States</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>China</td>
              <td>Canada</td>
              <td>60%</td>
            </tr>
          </tbody>
        </table>

        <h2>Total Application Processed</h2>
        <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/14464/images/ooNktVmASAG7W3sTi0Z3_all.gif' alt="Application Processing Times" />

        <h2>Popular Study Destinations</h2>
        <img src="https://flourish.studio/images/newsletters/bar_chart_race.gif" alt="Popular Study Destinations" />

        <h2>Data Sources</h2>
        <p>The visa data for Global Academia students is collected from official government sources and processed by our data analytics team. The data is updated monthly to ensure the most up-to-date information is available.</p>

        <h2>Methodology</h2>
        <p>Visa success rates are calculated as the percentage of visa applications that were approved. Application processing times are calculated based on the time between submission and final decision by the relevant government agency. Popular study destinations are determined based on the number of visa applications received for each destination.</p>
      </div>
     </div>
     </div>
      </>
    );
  }
}

export default VisaAnalyticsPage;