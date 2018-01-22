import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Donations from '../../views/Manage/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/manage/donors" name="Donors" component={Dashboard}/>
                <Route path="/manage/donations" name="Donations" component={Donations}/>
                <Route path="/manage/campaigns" name="Campaigns" component={Dashboard}/>
                <Route path="/settings/general" name="General" component={Dashboard}/>
                <Route path="/settings/bank_account" name="Bank Account" component={Dashboard}/>
                <Route path="/settings/account_admins" name="Admins" component={Dashboard}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
