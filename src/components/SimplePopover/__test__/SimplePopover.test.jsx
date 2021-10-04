import { render, screen, waitFor, waitForElementToBeRemoved, fireEvent, logRoles, logDOM } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import SimplePopover from ".."

describe('Test component - SimplePopover', () => {
    it('should correctly rendered', () => {
        render(<SimplePopover/>);

        expect(screen.getByRole('button', {name: /open popover/i})).toBeInTheDocument();
    })

    it('should open the overlay panel when click the button', async() => {
        render(<SimplePopover/>);

        const openPopoverBtn = screen.getByRole('button', {name: /open popover/i});

        userEvent.click(openPopoverBtn);

        await waitFor(() => {
            expect(screen.getByText('The content of the Popover.')).toBeInTheDocument()
        })
    })

    it('should close the overlay panel when click the outside', async() => {
        render(<SimplePopover/>);

        const openPopoverBtn = screen.getByRole('button', {name: /open popover/i});

        userEvent.click(openPopoverBtn);

        let popoverText;
        await waitFor(() => {
            popoverText = screen.getByText('The content of the Popover.');
            expect(popoverText).toBeInTheDocument();
        })

        userEvent.click(screen.getByRole('presentation').firstChild);

        await waitForElementToBeRemoved(popoverText);
    })

    it('should close the overlay panel when press ESC button', async () => {
        render(<SimplePopover/>);

        const openPopoverBtn = screen.getByRole('button', {name: /open popover/i});

        userEvent.click(openPopoverBtn);

        let popoverText;
        await waitFor(() => {
            popoverText = screen.getByText('The content of the Popover.')
            expect(popoverText).toBeInTheDocument();
        });

        fireEvent.keyDown(popoverText, {key: 'Escape', code: 'Escape', keyCode: 27, charCode: 27});

        await waitForElementToBeRemoved(popoverText);
    })
})