import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Display from '../components/Display';

describe('Home', () => {
  it('renders correctly', () => {
    const displayComponent = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Display />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(displayComponent).toMatchSnapshot();
  });
});
