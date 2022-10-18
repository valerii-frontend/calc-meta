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

describe("Calc app Math operations", () => {
	test("Adding", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 10;
		await user.click(addButton);
		input.value = 30;
		await user.click(addButton);
		expect(Number(result.textContent)).toBe(40);
	});
	test("Adding 0.3", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 0.2;
		await user.click(addButton);
		input.value = 0.1;
		await user.click(addButton);
		expect(Number(result.textContent)).toBe(0.3);
	});
	test("Subtraction", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const substrButton = screen.getByTitle("minus");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 100;
		await user.click(addButton);
		input.value = 50;
		await user.click(substrButton);
		expect(parseInt(result.textContent)).toBe(50);
	});
	test("Multiplication", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const multiplyButton = screen.getByTitle("multiply");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 100;
		await user.click(addButton);
		input.value = 5;
		await user.click(multiplyButton);
		expect(parseInt(result.textContent)).toBe(500);
	});
	test("Divide", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const divideButton = screen.getByTitle("divide");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 100;
		await user.click(addButton);
		input.value = 5;
		await user.click(divideButton);
		expect(parseInt(result.textContent)).toBe(20);
	});

	test("Divide to 0", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const divideButton = screen.getByTitle("divide");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 100;
		await user.click(addButton);
		input.value = 0;
		await user.click(divideButton);
		expect(screen.getByText("You can't divide to zero!")).toBeVisible();
	});
	test("Divide 0 to something", async () => {
		const user = userEvent.setup();
		render(<App />);

		const addButton = screen.getByTitle("add");
		const divideButton = screen.getByTitle("divide");
		const input = screen.getByTitle("input");
		const result = screen.getByTitle("result");

		input.value = 100;
		await user.click(addButton);
		input.value = -100;
		await user.click(addButton);
		input.value = 5;
		await user.click(divideButton);
		expect(screen.getByText("You can't divide to zero!")).toBeVisible();
	});
});
