import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from "./Greeting.js";

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //...nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "It is good to see you!" if button was NOT clicked', () => {
        render(<Greeting />);
        const paragraphElement = screen.getByText('It is good to see you!');
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders "Changed!" you if button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const paragraphElement = screen.getByText('Changed!');
        expect(paragraphElement).toBeInTheDocument();
    });

    test('does not renders "It is good to see you!" if button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const paragraphElement = screen.queryByText('It is good to see you!!');
        expect(paragraphElement).toBeNull();
    });
});