import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../src/components/App.tsx';

describe('basic test', () => {
    it('Test that paragraph exists', () => {
        render(<App />);
        expect(screen.getByRole('paragraph').textContent).toMatch('Fick Sucker');
    })

    it('Test that other strings do not match paragraph'), () => {
        render(<App />);
        expect(screen.getByRole('paragraph').textContent).not.toMatch('Dong');
    }
})