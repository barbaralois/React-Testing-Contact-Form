import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without errors', () => {
  render(<ContactForm />);
});

test('ContactForm allows typing in each input field', () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  //these lines showcased the fact that id was missing on all labels, so I added those.

  fireEvent.change(firstNameInput, { target: { value: 'abcdefg' } });
  fireEvent.change(lastNameInput, { target: { value: 'Moore' } });
  fireEvent.change(emailInput, { target: { value: 'barbara@moore.com' } });
  fireEvent.change(messageInput, { target: { value: 'lambda student' } });

  expect(screen.getByDisplayValue(/abcdefg/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue('Moore')).toBeInTheDocument();
  expect(screen.getByDisplayValue(/barbara@moore.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/lambda student/i)).toBeInTheDocument();
});

test('can target inputs via placeholders and type', () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

  fireEvent.change(firstNameInput, { target: { value: 'abcdefg' } });
  fireEvent.change(lastNameInput, { target: { value: 'Moore' } });
  fireEvent.change(emailInput, { target: { value: 'barbara@moore.com' } });
  // used this to move the email placeholder from label to input
});

// test('gives an error if provided name is too long', () => {
//   render(<ContactForm />);
//   const firstNameInput = screen.getByPlaceholderText(/edd/i);
//   const lastNameInput = screen.getByPlaceholderText(/burke/i);
//   fireEvent.change(firstNameInput, { target: { value: 'abcdefg' } });
//   fireEvent.change(lastNameInput, { target: { value: 'Moore' } });

//   const nameError = document.querySelector('p');
//   waitFor(() => expect(nameError).toBeInTheDocument());
//   I really want this to tell me whether or not that error is rendering on the screen because the first name input is too long, but it's not working. No matter what I put in the query selector, it passes.

//   const nameError = screen.findByTestId('emailError');
//   const nameError = screen.findByText(/maxLength/i);
//   expect(nameError).toBeInTheDocument();
//   this one isn't working either, I don't know what it means when it says the passed in nameError is an object.
// });

// not sure if I need to change the message from textarea to input? I can't figure out how to test this.
