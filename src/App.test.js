import { render, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Calc app UI testing", () => {
	test("Title", () => {
		render(<App />);
		const h1 = screen.getByText(/Calculator/i);
		expect(h1).toBeInTheDocument();
	});
	test("Add btn", () => {
		render(<App />);
		const btn = screen.getByTitle("add");
		expect(btn).toBeInTheDocument();
	});
	test("Substruction btn", () => {
		render(<App />);
		const btn = screen.getByTitle("minus");
		expect(btn).toBeInTheDocument();
	});
	test("Multiplication btn", () => {
		render(<App />);
		const btn = screen.getByTitle("multiply");
		expect(btn).toBeInTheDocument();
	});
	test("Divide btn", () => {
		render(<App />);
		const btn = screen.getByTitle("divide");
		expect(btn).toBeInTheDocument();
	});
	test("Reset input btn", () => {
		render(<App />);
		const btn = screen.getByTitle("reset input");
		expect(btn).toBeInTheDocument();
	});
	test("Reset result btn", () => {
		render(<App />);
		const btn = screen.getByTitle("reset result");
		expect(btn).toBeInTheDocument();
	});
	test("Result field", () => {
		render(<App />);
		const el = screen.getByTitle("result");
		expect(el).toBeInTheDocument();
	});
	test("Main input", () => {
		render(<App />);
		const el = screen.getByTitle("input");
		expect(el).toBeInTheDocument();
	});
});
