import { Provider } from 'react-redux';
import { store } from '../../store';
import Dashboard from "../dashboard";
import { render } from "@testing-library/react";

const ComponentMock = () => <div />

test("Dashboard renders correctly with grettings and children components", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Dashboard userName='John Doe'>
        <ComponentMock />
      </Dashboard>
    </Provider>
  );
  const userName = getByText(/hello john doe/i);
  const children = ComponentMock;
  expect(userName).toBeInTheDocument();
  expect(children).toBeTruthy();
});