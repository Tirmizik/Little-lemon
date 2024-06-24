
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';

jest.mock('./components/Header');
jest.mock('./components/Nav');
jest.mock('./components/Main');
jest.mock('./components/Footer');
jest.mock('./components/ReservationForm');

describe('App component', () => {
  beforeEach(() => {
    Header.mockImplementation(() => <div>Header Component</div>);
    Nav.mockImplementation(() => <div>Nav Component</div>);
    Main.mockImplementation(() => <div>Main Component</div>);
    Footer.mockImplementation(() => <div>Footer Component</div>);
    ReservationForm.mockImplementation(() => <div>ReservationForm Component</div>);
  });

  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders Header component', () => {
    render(<App />);
    expect(screen.getByText('Header Component')).toBeInTheDocument();
  });

  test('renders Nav component', () => {
    render(<App />);
    expect(screen.getByText('Nav Component')).toBeInTheDocument();
  });

  test('renders ReservationForm component', () => {
    render(<App />);
    expect(screen.getByText('ReservationForm Component')).toBeInTheDocument();
  });

  test('renders Main component', () => {
    render(<App />);
    expect(screen.getByText('Main Component')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<App />);
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });
});
