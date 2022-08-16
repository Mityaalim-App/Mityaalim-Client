import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/main/Dashboard';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import Onboarding from './components/onboarding/Onboarding';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import PasswordReset from './components/auth/PasswordReset';
import SavingsTargetForm from './components/main/SavingsTargetForm';
import TransactionList from './components/transactions/TransactionList';
import TransactionCreate from './components/transactions/TransactionCreate';
import TransactionEdit from './components/transactions/TransactionEdit';
import TransactionDelete from './components/transactions/TransactionDelete';
import UserInfoEdit from './components/users/UserInfoEdit';
import ArticleList from './components/tasks/ArticleList';
import PodcastList from './components/tasks/PodcastList';
import VideoList from './components/tasks/VideoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Dashboard />
              <Footer />
            </>
          }
        />
        <Route path='/intro' element={<Onboarding />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/forgot-password' element={<ForgotPassword />} />
        <Route path='/login/reset-password' element={<PasswordReset />} />
        <Route path='/user/edit/:id' element={<UserInfoEdit />} />
        <Route path='/savings-target/new' element={<SavingsTargetForm />} />
        <Route path='/savings-target/edit/:id' element={<SavingsTargetForm />} />
        <Route
          path='/transactions'
          element={
            <>
              <Navbar />
              <TransactionList />
              <Footer />
            </>
          }
        />
        <Route
          path='/transactions/new'
          element={
            <>
              <Navbar />
              <TransactionCreate />
              <Footer />
            </>
          }
        />
        <Route
          path='/transactions/edit/:id'
          element={
            <>
              <Navbar />
              <TransactionEdit />
              <Footer />
            </>
          }
        />
        <Route
          path='/transactions/delete/:id'
          element={
            <>
              <TransactionDelete />
              <Navbar />
              <TransactionList />
              <Footer />
            </>
          }
        />
        <Route
          path='/articles'
          element={
            <>
              <Navbar />
              <ArticleList />
            </>
          }
        />
        <Route
          path='/videos'
          element={
            <>
              <Navbar />
              <VideoList />
            </>
          }
        />
        <Route
          path='/podcast'
          element={
            <>
              <Navbar />
              <PodcastList />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
